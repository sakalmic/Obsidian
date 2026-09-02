---
{"dg-publish":true,"permalink":"/system/ph-d-vault-architecture-guide/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"aliases":["PhD Vault Architecture Guide","System Guide"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-01"}}
---


# PhD Vault Architecture Guide

This document defines the organisation and operating standards of the **Obsidian-PhD** vault. The system supports doctoral research at CTU FEE in laser-induced plasma, electrical power engineering and techno-economic modelling, as well as dissertation writing and selective publication through Digital Garden.

---

## Design principles

1. **Controlled depth:** Main information should remain no more than one or two navigation steps away. Maps of Content, index notes and tags provide the primary routes through the vault.
2. **Clear public–private boundary:** Public research notes use `dg-publish: true`; administration, budgets, unpublished data and meeting minutes remain private with `dg-publish: false`.
3. **Direct connection to the dissertation:** Thesis notes, the claim ledger and experimental records map directly to the LaTeX project under `PhD/thesis`.
4. **Stable naming:** English file names and predictable prefixes keep links readable in Obsidian and on the public site.

---

## Folder structure

```text
Obsidian-PhD/
├── Home.md                         # Public research dashboard
├── _Inbox/                         # Unprocessed ideas and fleeting notes
├── Daily/                          # Daily research log
├── I Projects/                     # Active doctoral projects
├── II Areas/                       # Six long-term academic areas
│   ├── 01_Research/                # Plasma physics, switching and diagnostics
│   ├── 02_Thesis/                  # Dissertation, hypotheses and evidence
│   ├── 03_Publications/            # Manuscripts and conference planning
│   ├── 04_Administration/          # ISP, examinations and regulations
│   ├── 05_Teaching/                # Teaching and thesis supervision
│   └── 06_Grants_Funding/          # Grants, mobility and budgets
├── III Resources/                  # Literature, data and permanent notes
├── IV Archives/                    # Closed projects and completed periods
├── System/                         # Methods, conventions and setup guides
└── TEMPLATES/                      # Reusable Templater note structures
```

---

## Maps of Content

| Map | Area | Scope | Visibility |
| :--- | :--- | :--- | :---: |
| [[II Areas/01_Research/01_MOC\|01_Research]] | Research & Methodology | Plasma physics, LTSG, COMSOL, diagnostics and techno-economics | Public |
| [[II Areas/02_Thesis/02_MOC\|02_Dissertation]] | Dissertation | Structure, claims, hypotheses and LaTeX integration | Public |
| [[II Areas/03_Publications/03_MOC\|03_Publications]] | Publications & Conferences | Manuscripts, venues and conference planning | Public |
| [[II Areas/04_Administration/04_MOC\|04_Administration]] | Administration & ISP | Study obligations, meetings and deadlines | Private |
| [[II Areas/05_Teaching/05_MOC\|05_Teaching]] | Teaching & Supervision | Courses and supervised theses | Private |
| [[II Areas/06_Grants_Funding/06_MOC\|06_Grants]] | Grants & Funding | Applications, budgets and travel | Private |
