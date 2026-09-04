const COOKIE_NAME = "__Host-phd_access";
const LOGIN_PATH = "/__auth";
const LOGOUT_PATH = "/__logout";
const DEFAULT_SESSION_HOURS = 12;
const MAX_SESSION_HOURS = 168;
const encoder = new TextEncoder();

function securityHeaders(contentType = "text/html; charset=utf-8") {
	return {
		"Cache-Control": "private, no-store, max-age=0",
		"Content-Security-Policy":
			"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
		"Content-Type": contentType,
		"Referrer-Policy": "no-referrer",
		"X-Content-Type-Options": "nosniff",
		"X-Frame-Options": "DENY",
		"X-Robots-Tag": "noindex, nofollow, noarchive",
	};
}

function sessionDurationSeconds() {
	const configured = Number.parseInt(process.env.SITE_SESSION_HOURS ?? "", 10);
	const hours = Number.isFinite(configured)
		? Math.min(Math.max(configured, 1), MAX_SESSION_HOURS)
		: DEFAULT_SESSION_HOURS;
	return hours * 60 * 60;
}

async function digest(value: string) {
	return new Uint8Array(
		await crypto.subtle.digest("SHA-256", encoder.encode(value)),
	);
}

function equalBytes(left: Uint8Array, right: Uint8Array) {
	let difference = left.length ^ right.length;
	const length = Math.max(left.length, right.length);

	for (let index = 0; index < length; index += 1) {
		difference |= (left[index] ?? 0) ^ (right[index] ?? 0);
	}

	return difference === 0;
}

async function passwordMatches(provided: string, expected: string) {
	const [providedDigest, expectedDigest] = await Promise.all([
		digest(provided),
		digest(expected),
	]);
	return equalBytes(providedDigest, expectedDigest);
}

function toBase64Url(bytes: Uint8Array) {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary)
		.replaceAll("+", "-")
		.replaceAll("/", "_")
		.replace(/=+$/u, "");
}

async function sign(value: string, secret: string) {
	const key = await crypto.subtle.importKey(
		"raw",
		encoder.encode(secret),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);
	const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
	return toBase64Url(new Uint8Array(signature));
}

function cookieValue(request: Request) {
	const cookieHeader = request.headers.get("cookie") ?? "";
	for (const entry of cookieHeader.split(";")) {
		const [name, ...valueParts] = entry.trim().split("=");
		if (name === COOKIE_NAME) return valueParts.join("=");
	}
	return null;
}

async function validSession(request: Request, signingSecret: string) {
	const token = cookieValue(request);
	if (!token) return false;

	const separator = token.indexOf(".");
	if (separator < 1) return false;

	const expiresAt = token.slice(0, separator);
	const suppliedSignature = token.slice(separator + 1);
	if (!/^\d+$/u.test(expiresAt) || Number(expiresAt) <= Date.now()) return false;

	const expectedSignature = await sign(expiresAt, signingSecret);
	return passwordMatches(suppliedSignature, expectedSignature);
}

function safeReturnPath(request: Request) {
	const requested = new URL(request.url).searchParams.get("returnTo") ?? "/";
	return requested.startsWith("/") && !requested.startsWith("//")
		? requested
		: "/";
}

function loginPage(returnTo: string, invalidPassword = false) {
	const action = `${LOGIN_PATH}?returnTo=${encodeURIComponent(returnTo)}`;
	const error = invalidPassword
		? '<p class="error" role="alert">The password you entered is incorrect.</p>'
		: "";

	return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <title>Private Research Vault</title>
  <style>
    :root { color-scheme: light; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
    * { box-sizing: border-box; }
    body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 1.5rem; color: #102f45; background: #102f45; }
    main { width: min(100%, 30rem); padding: clamp(2rem, 7vw, 3.25rem); border-radius: 1rem; background: #f5f1e8; box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 28%); }
    .eyebrow { margin: 0 0 .75rem; color: #bb5d36; font-size: .75rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
    h1 { margin: 0; font-family: Georgia, serif; font-size: clamp(2rem, 8vw, 3rem); line-height: 1.02; }
    .intro { margin: 1rem 0 1.75rem; color: #4d5e69; line-height: 1.55; }
    label { display: block; margin-bottom: .5rem; font-weight: 750; }
    input { width: 100%; min-height: 3rem; padding: .75rem .9rem; border: 1px solid #9ba6ad; border-radius: .5rem; background: white; color: #102f45; font: inherit; }
    input:focus { outline: 3px solid rgb(187 93 54 / 25%); border-color: #bb5d36; }
    button { width: 100%; min-height: 3rem; margin-top: 1rem; border: 0; border-radius: .5rem; background: #bb5d36; color: white; font: inherit; font-weight: 800; cursor: pointer; }
    button:hover { background: #9f4928; }
    .error { margin: 0 0 1rem; padding: .75rem; border-left: .25rem solid #a52d22; background: #f8ded9; color: #7b2018; }
    small { display: block; margin-top: 1.25rem; color: #697780; line-height: 1.45; }
  </style>
</head>
<body>
  <main>
    <p class="eyebrow">CTU · Doctoral Research</p>
    <h1>Michal Sakala | PhD</h1>
    <p class="intro">This research website is private. Enter the access password to continue.</p>
    ${error}
    <form method="post" action="${action}">
      <label for="password">Access password</label>
      <input id="password" name="password" type="password" required autofocus autocomplete="current-password">
      <button type="submit">Unlock website</button>
    </form>
    <small>Your session is stored only in a secure cookie in this browser.</small>
  </main>
</body>
</html>`;
}

function loginResponse(request: Request, invalidPassword = false) {
	const url = new URL(request.url);
	const returnTo =
		url.pathname === LOGIN_PATH
			? safeReturnPath(request)
			: `${url.pathname}${url.search}`;
	return new Response(loginPage(returnTo, invalidPassword), {
		status: 401,
		headers: securityHeaders(),
	});
}

function unavailableResponse() {
	return new Response(
		"Website access is not configured. The owner must set SITE_PASSWORD in Vercel.",
		{ status: 503, headers: securityHeaders("text/plain; charset=utf-8") },
	);
}

export default async function middleware(request: Request) {
	const password = process.env.SITE_PASSWORD;
	if (!password) return unavailableResponse();

	const url = new URL(request.url);
	const signingSecret = process.env.SITE_AUTH_SECRET || password;

	if (url.pathname === LOGOUT_PATH) {
		return new Response(null, {
			status: 303,
			headers: {
				...securityHeaders(),
				Location: "/",
				"Set-Cookie": `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`,
			},
		});
	}

	if (url.pathname === LOGIN_PATH && request.method === "POST") {
		let submittedPassword = "";
		try {
			const form = await request.formData();
			submittedPassword = String(form.get("password") ?? "");
		} catch {
			return loginResponse(request, true);
		}

		if (await passwordMatches(submittedPassword, password)) {
			const maxAge = sessionDurationSeconds();
			const expiresAt = String(Date.now() + maxAge * 1000);
			const signature = await sign(expiresAt, signingSecret);
			return new Response(null, {
				status: 303,
				headers: {
					...securityHeaders(),
					Location: safeReturnPath(request),
					"Set-Cookie": `${COOKIE_NAME}=${expiresAt}.${signature}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`,
				},
			});
		}

		return loginResponse(request, true);
	}

	if (await validSession(request, signingSecret)) {
		if (url.pathname === LOGIN_PATH) {
			return new Response(null, {
				status: 303,
				headers: { ...securityHeaders(), Location: "/" },
			});
		}
		return;
	}
	return loginResponse(request);
}
