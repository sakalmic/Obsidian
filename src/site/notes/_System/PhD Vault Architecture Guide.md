---
{"dg-publish":true,"permalink":"/system/ph-d-vault-architecture-guide/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"aliases":["PhD Vault Architecture Guide","System Guide"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-02"}}
---


# PhD Vault Architecture Guide

This document defines the organisation and operating standards of the **Obsidian-PhD** vault. The system supports doctoral research at CTU FEE in laser-induced plasma, electrical power engineering and techno-economic modelling, as well as dissertation writing and selective publication through Digital Garden.

---

## Design principles

1. **Controlled depth:** Main information should remain no more than one or two navigation steps away. Maps of Content, index notes and tags provide the primary routes through the vault.
2. **Model A flat folder taxonomy:** Academic areas (specifically `II Areas/01_Research/`) employ a **flat folder structure**. Rather than rigid subdirectories that cause single-inheritance friction and break web links upon refactoring, multi-dimensional classification is driven by 2-tier hierarchical tags (`#theme/<pillar>/<topic>`) and automated Dataview MOC dashboards.
3. **Clear public–private boundary:** Public research notes use `dg-publish: true`; administration, budgets, student records and meeting minutes remain private with `dg-publish: false`.
4. **Direct connection to the dissertation:** Thesis notes, the claim ledger and experimental records map directly to the LaTeX monograph under `PhD/thesis`.
5. **Stable naming and clean slugs:** Predictable English file names ensure human-readable links in Obsidian and clean, permanent URLs on the public garden (`sakalmic-phd.vercel.app`).

---

## Folder structure

```text
Obsidian-PhD/
├── Home.md                         # Public research dashboard & entry point
├── _Inbox/                         # Fleeting notes, rapid captures and raw clippings
├── _Daily/                         # Daily research logs, deep-work records and time blocks
├── I Projects/                     # Active time-bound doctoral projects and manuscripts
├── II Areas/                       # Long-term academic spheres of responsibility (Model A flat)
│   ├── 01_Research/                # Living research notes, theory, diagnostics and models
│   ├── 02_Thesis/                  # Dissertation architecture, claim ledger and evidence matrix
│   ├── 03_Publications/            # Target journals, conference calendar and authorship
│   ├── 04_Administration/          # ISP, KOS credit tracking, supervisor syncs and directives
│   ├── 05_Teaching/                # Laboratory classes, seminars and BP/DP supervision
│   └── 06_Grants_Funding/          # SGS grants, GAČR proposals, mobility and travel budgets
├── III Resources/                  # Reusable knowledge base
│   ├── Conferences_and_Events/     # Academic conference directory and deadlines
│   ├── Data_and_Simulations/       # Measurement datasets and COMSOL configuration notes
│   ├── Literature/                 # Structured literature notes (`LN - ...`)
│   └── Zettelkasten/               # Atomic permanent notes (`YYYYMMDDHHmm - ...`)
├── IV Archives/                    # Completed projects and closed study periods
├── _System/                        # Vault governance, tagging conventions and publishing guides
└── TEMPLATES/                      # Reusable note structures for Templater
```

---

## Research Pillar Architecture (`II Areas/01_Research/`)

To preserve clean URLs on Vercel and prevent classification fragmentation, notes in `01_Research/` are categorized into **four scientific pillars** via hierarchical tags rather than folders:

| Pillar | Focus | Tag Hierarchy | Canonical Anchor Notes |
| :--- | :--- | :--- | :--- |
| **Pillar 1** | **Discharge Physics & Optical Breakdown** | `#theme/physics/...` | [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]]<br>[[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]] |
| **Pillar 2** | **High-Voltage Switching & Arc Quenching** | `#theme/engineering/...` | [[II Areas/01_Research/Laser-Triggered Spark Gaps (LTSG)\|Laser-Triggered Spark Gaps (LTSG)]]<br>[[II Areas/01_Research/High-Voltage Arc Quenching & Protection\|High-Voltage Arc Quenching & Protection]] |
| **Pillar 3** | **Diagnostics, Statistics & Simulation** | `#theme/methods/...` | [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]<br>[[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]]<br>[[I Projects/COMSOL Plasma Simulation Model\|COMSOL Plasma Simulation Model]] |
| **Pillar 4** | **Techno-Economic Grid Assessment** | `#theme/economics/...` | [[II Areas/01_Research/Techno-Economic Modeling of Grid Switching\|Techno-Economic Modeling of Grid Switching]] |
| **Roadmap** | **Campaign Strategy & Activation Gates** | `#theme/roadmap` | [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]]<br>[[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]] |

---

## Maps of Content

| Map | Area | Scope | Visibility |
| :--- | :--- | :--- | :---: |
| [[II Areas/01_Research/01_MOC\|01_Research]] | Research & Methodology | 4-pillar automated dashboard, theory, diagnostics, literature and permanent concepts | Public |
| [[II Areas/02_Thesis/02_MOC\|02_Dissertation]] | Dissertation | Monograph outline, claim ledger, evidence matrix and LaTeX sync | Public |
| [[II Areas/03_Publications/03_MOC\|03_Publications]] | Publications & Conferences | Active papers, target venues, conference pipeline and authorship shares | Public |
| [[II Areas/04_Administration/04_MOC\|04_Administration]] | Administration & ISP | Study plan milestones, KOS exams, supervisor sync log and directives | Private |
| [[II Areas/05_Teaching/05_MOC\|05_Teaching]] | Teaching & Supervision | Laboratory teaching, seminar courses and supervised theses (BP/DP) | Private |
| [[II Areas/06_Grants_Funding/06_MOC\|06_Grants]] | Grants & Funding | SGS competition, external grant proposals and conference travel support | Private |
