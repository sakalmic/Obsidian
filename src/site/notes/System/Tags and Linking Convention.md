---
{"dg-publish":true,"permalink":"/system/tags-and-linking-convention/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"aliases":["Tags and Linking Convention","Tagging Rules"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-01"}}
---


# 🏷️ Tags and Linking Convention in Obsidian-PhD

Tento průvodce stanovuje povinné a doporučené konvence pro tagování a propojování poznámek v doktorském vaultu. Cílem je zajistit 100% spolehlivost pro **Dataview dashboardy** i čistou navigaci na webu **Digital Garden**.

---

## 1. Povinné kategorie tagů

Každá nově vytvořená poznámka musí obsahovat alespoň:
1. **Typový tag** (`#type/...`)
2. **Kontextový tag** (`#context/...`)
3. **Tematický tag** (`#theme/...`)
4. **Stavový / Prioritní tag** (`#status/...`, `#priority/...`)

---

## 2. Typové tagy (`#type/...`)
Definují podstatu a formát dokumentu:

- `#type/project` → Aktivní výzkumný, publikační nebo studijní projekt
- `#type/literature` → Rešerše odborného článku, knihy nebo sborníku (`LN - ...`)
- `#type/permanent` → Atomická konceptuální poznámka Zettelkasten (`YYYYMMDDHHmm - ...`)
- `#type/fleeting` → Rychlý záchyt myšlenky z diskuze či měření (`FN - ...`)
- `#type/daily` → Denní výzkumný deník (`YYYY-MM-DD.md`)
- `#type/chapter` → Disertační kapitola nebo podsekce
- `#type/meeting` → Zápis ze schůzky se školitelem či řešitelským týmem
- `#type/paper` → Rukopis vědeckého článku a sledování recenzního řízení
- `#type/experiment` → Protokol ze simulace v COMSOLu nebo laboratorního měření
- `#type/grant` → Grantová přihláška, průběžná nebo závěrečná zpráva
- `#type/teaching` → Podklady k výuce, cvičením a vedení studentů
- `#type/moc` → Rozcestník / Mapa obsahu (Map of Content)

---

## 3. Kontextové tagy (`#context/...`)
Určují doménu v rámci doktorského studia:

- `#context/phd` → Obecný kontext doktorského studia
- `#context/research` → Vědecký výzkum a experimenty
- `#context/thesis` → Příprava a psaní disertační práce
- `#context/publications` → Vědecké publikace a konference
- `#context/admin` → ISP, KOS, studijní předpisy ČVUT FEL
- `#context/teaching` → Pedagogická činnost
- `#context/grants` → Financování, SGS, GAČR

---

## 4. Tematické tagy (`#theme/...`)
Zahrnují vědecké disciplíny a specializace vašeho doktorátu:

### Plazma a laserové spínání
- `#theme/plasma-dynamics` → Fyzikální dynamika a vývoj výbojového kanálu
- `#theme/laser-triggering` → Laserem indukovaný průraz (LTSG)
- `#theme/breakdown-physics` → Townsendova a streamerová teorie průrazu
- `#theme/optical-diagnostics` → Rychlá optická a ICCD diagnostika

### Elektroenergetika a sítě
- `#theme/electrical-power` → Elektroenergetika a vysokonapěťové spínání
- `#theme/arc-quenching` → Zhášení oblouku a ochrana vedení
- `#theme/power-grid` → Stabilita sítě a přechodové jevy
- `#theme/hybrid-breakers` → Hybridní a polovodičové vypínače

### Modelování a ekonomie
- `#theme/comsol-simulation` → Multifyzikální numerické simulace v COMSOLu
- `#theme/techno-economics` → Technicko-ekonomické modelování a CAPEX/OPEX
- `#theme/methodology` → Vědecká metodologie a claim ledger

---

## 5. Stavové a prioritní tagy

### Stav (`#status/...`)
- `#status/idea` → Počáteční koncept
- `#status/planning` → Plánování a rešerše
- `#status/in-progress` → Aktivně rozpracováno
- `#status/draft` → První verze textu
- `#status/submitted` → Odesláno do recenze / ke schválení
- `#status/revision` → Přepracování po oponentuře
- `#status/published` → Publikováno / Schváleno
- `#status/completed` → Dokončeno
- `#status/evergreen` → Trvalý, stabilní Zettelkasten koncept

### Priorita (`#priority/...`)
- `#priority/critical` 🔥 → Hořící deadliny (ISP zprávy, odevzdání článků)
- `#priority/high` ⚡ → Hlavní výzkumné úkoly týdne
- `#priority/normal` 📌 → Běžná práce
- `#priority/low` ☕ → Nízká priorita / vedlejší rešerše
- `#priority/lowest` 🧊 → Zásobník nápadů na později

---

## 6. Pravidla pro interní linky a Digital Garden

1. **Vždy používejte čistou syntaxi `[[Název Poznámky]]`** nebo `[[Název Poznámky|Zobrazovaný Text]]`.
2. Pro citace odborné literatury používejte předponu `LN - ` (např. `[[LN - Mikes2024 - Laser Spark Gaps]]`).
3. Pro trvalé atomické poznámky používejte formát `YYYYMMDDHHmm - Název` (např. `[[202609011000 - Optical Breakdown Mechanism in Air]]`).
4. Pro disertační tvrzení používejte Claim Ledger ID (např. `[[Claim Ledger & Evidence Matrix#CL-01|CL-01]]`).
