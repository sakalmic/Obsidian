import { afterEach, describe, expect, it } from "vitest";
import middleware from "./middleware.ts";

const originalEnvironment = { ...process.env };

afterEach(() => {
	process.env = { ...originalEnvironment };
});

describe("site access middleware", () => {
	it("fails closed when the password is not configured", async () => {
		delete process.env.SITE_PASSWORD;
		const response = await middleware(new Request("https://sakalmic.phd/"));

		expect(response.status).toBe(503);
		expect(response.headers.get("cache-control")).toContain("no-store");
	});

	it("shows the login page without a valid session", async () => {
		process.env.SITE_PASSWORD = "strong-test-password";
		const response = await middleware(
			new Request("https://sakalmic.phd/system/guide/?section=workflow"),
		);

		expect(response.status).toBe(401);
		expect(await response.text()).toContain("Přístupové heslo");
		expect(response.headers.get("x-robots-tag")).toContain("noindex");
	});

	it("rejects an incorrect password", async () => {
		process.env.SITE_PASSWORD = "strong-test-password";
		const response = await middleware(
			new Request("https://sakalmic.phd/__auth?returnTo=%2Fsystem%2F", {
				method: "POST",
				body: new URLSearchParams({ password: "incorrect" }),
			}),
		);

		expect(response.status).toBe(401);
		expect(await response.text()).toContain("není správné");
		expect(response.headers.get("set-cookie")).toBeNull();
	});

	it("creates a signed secure session and restores the requested page", async () => {
		process.env.SITE_PASSWORD = "strong-test-password";
		process.env.SITE_AUTH_SECRET = "independent-cookie-secret";
		const loginResponse = await middleware(
			new Request(
				"https://sakalmic.phd/__auth?returnTo=%2Fsystem%2Fguide%2F%3Fsection%3Dworkflow",
				{
					method: "POST",
					body: new URLSearchParams({ password: "strong-test-password" }),
				},
			),
		);

		expect(loginResponse.status).toBe(303);
		expect(loginResponse.headers.get("location")).toBe(
			"/system/guide/?section=workflow",
		);
		const setCookie = loginResponse.headers.get("set-cookie");
		expect(setCookie).toContain("HttpOnly");
		expect(setCookie).toContain("Secure");
		expect(setCookie).toContain("SameSite=Strict");

		const cookie = setCookie.split(";", 1)[0];
		const protectedResponse = await middleware(
			new Request("https://sakalmic.phd/system/guide/", {
				headers: { cookie },
			}),
		);
		expect(protectedResponse).toBeUndefined();
	});

	it("does not allow an external return URL", async () => {
		process.env.SITE_PASSWORD = "strong-test-password";
		const response = await middleware(
			new Request(
				"https://sakalmic.phd/__auth?returnTo=https%3A%2F%2Fexample.com",
				{
					method: "POST",
					body: new URLSearchParams({ password: "strong-test-password" }),
				},
			),
		);

		expect(response.headers.get("location")).toBe("/");
	});
});
