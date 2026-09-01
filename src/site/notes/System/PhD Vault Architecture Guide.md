---
{"dg-publish":true,"permalink":"/system/ph-d-vault-architecture-guide/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"aliases":["PhD Vault Architecture Guide","System Guide"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-01"}}
---


# 🏛️ PhD Vault Architecture Guide

Tento dokument definuje systémovou architekturu, organizační logiku a standardy vaultu **Obsidian-PhD**. Vault je navržen speciálně pro doktorské studium na ČVUT FEL, vědecký výzkum v oblasti laserem indukovaného plazmatu, elektroenergetiky a techno-ekonomického modelování, přípravu disertační práce a následné publikování skrze **GitHub** a **Digital Garden (Vercel)**.

---

## 🧭 Základní principy systému

1. **Struktura s řízenou hloubkou (Max 1–2 kliknutí)**:
   - Zabraňuje přehlcování složkovým stromem.
   - Všechny hlavní složky mají maximálně 1 úroveň podsložek.
   - Přístup k informacím je řízen skrze **MOC (Maps of Content)**, indexové poznámky a tagy.

2. **Oddělení soukromé administrace a veřejného výzkumu**:
   - Každá poznámka obsahuje frontmatter klíč `dg-publish: true` (pro veřejné Zettely, literaturu, přehledy) nebo `dg-publish: false` (pro interní finance, nepublikovaná data a zápisy ze schůzek).

3. **Plné propojení s disertačním LaTeX projektem (`PhD/thesis`)**:
   - Poznámky k fázím dizertace, claim ledgeru a experimentálním sadám přímo mapují na soubory `chapters/`, `appendices/` a `references.bib` v LaTeXové šabloně.

---

## 📂 Struktura složek vaultu

```
Obsidian-PhD/
├── Home.md                                 # Centrální rozcestník (DataviewJS dashboard, MOC, aktivní projekty)
├── _Inbox/                                 # Rychlý sběr nezpracovaných myšlenek (Fleeting notes)
│   └── Fleeting/                           
├── Daily/                                  # Denní výzkumný log (experimenty, simulace, literatura, reflexe)
├── I Projects/                             # Aktivní PhD projekty s milníky a úkoly
├── II Areas/                               # 6 akademických pilířů doktorského studia
│   ├── 01_Research/                        # Fyzikální dynamika plazmatu, laserové spínání, diagnostika
│   ├── 02_Thesis/                          # Struktura dizertace, claim ledger, hypotézy, vazba na LaTeX
│   ├── 03_Publications/                    # Články v přípravě, konference (ICOLSE, IEEE), publikační strategie
│   ├── 04_Administration/                  # ISP, KOS, státní doktorská zkouška / minimum, směrnice FEL
│   ├── 05_Teaching/                        # Pedagogická činnost, cvičení, vedení závěrečných prací
│   └── 06_Grants_Funding/                  # SGS granty, GAČR, cesťáky a finanční přehledy
├── III Resources/                          # Znalostní báze a podklady
│   ├── Literature/                         # Rešerše a literární poznámky (LN - ...)
│   ├── Zettelkasten/                       # Atomické permanentní poznámky (YYYYMMDDHHmm - ...)
│   ├── Data_and_Simulations/               # Dokumentace k COMSOL modelům a měřením
│   └── Conferences_and_Events/             # Přehled vědeckých konferencí a termínů
├── IV Archives/                            # Archivované projekty a uzavřené granty
├── System/                                 # Metodické návody, tagovací pravidla, Digital Garden setup
└── TEMPLATES/                              # Předkonfigurované Templater šablony pro PhD
```

---

## 🗺️ Přehled MOC (Maps of Content)

| Ikona | MOC Soubor | Název | Zaměření |
| :---: | :--- | :--- | :--- |
| 🔬 | [[II Areas/01_Research/01_MOC\|01_Research]] | Výzkum & Metodologie | Fyzika plazmatu, LTSG, COMSOL simulace, diagnostika |
| 📖 | [[II Areas/02_Thesis/02_MOC\|02_Thesis]] | Disertační práce | Kapitoly disertační práce, Claim Ledger, hypotézy |
| 📑 | [[II Areas/03_Publications/03_MOC\|03_Publications]] | Publikace & Konference | Pipeline článků (IEEE, APL), recenzní řízení |
| 🏛️ | [[II Areas/04_Administration/04_MOC\|04_Administration]] | Administrace & ISP | ISP, KOS, zápisy ze schůzek se školitelem, termíny |
| 🎓 | [[II Areas/05_Teaching/05_MOC\|05_Teaching]] | Výuka & Vedení prací | Vedení cvičení, konzultace, témata BP/DP |
| 💰 | [[II Areas/06_Grants_Funding/06_MOC\|06_Grants_Funding]] | Granty & Financování | SGS ČVUT, GAČR, rozpočty a čerpání |
