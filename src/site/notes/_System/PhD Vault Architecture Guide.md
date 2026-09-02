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

<pre class="folder-tree-container" style="overflow-x: auto; scrollbar-width: thin; -webkit-overflow-scrolling: touch; background: var(--background-secondary, #fffdf8); border: 1px solid var(--background-modifier-border, #d9d4c9); border-radius: 8px; padding: 1.1rem 1.25rem; font-family: var(--font-monospace, 'Consolas', monospace); font-size: 0.88em; line-height: 1.65; white-space: pre; color: var(--text-normal, #18242e); margin: 1rem 0;">
<span style="font-weight: 700; color: var(--text-normal, #18242e);">Obsidian-PhD/</span>
├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">Home.md</span>                         <span style="color: var(--text-muted, #717b82); font-style: italic;"># Public research dashboard & entry point</span>
├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">Keystones/</span>                      <span style="color: var(--text-muted, #717b82); font-style: italic;"># Core scientific contributions, claims & synthesis</span>
├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">_</span><span style="font-weight: 600; color: var(--text-normal, #18242e);">System/</span>                         <span style="color: var(--text-muted, #717b82); font-style: italic;"># Vault architecture, tagging & publishing guides</span>
├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">_Inbox/                         # Fleeting notes, rapid captures & raw clippings (private)</span>
├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">_Daily/                         # Daily research logs & time blocks (private)</span>
├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">I Projects/</span>                     <span style="color: var(--text-muted, #717b82); font-style: italic;"># Active manuscripts, COMSOL models & milestones</span>
├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">II Areas/</span>                       <span style="color: var(--text-muted, #717b82); font-style: italic;"># Long-term academic spheres of responsibility (Model A flat)</span>
│   ├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">01_Research/</span>                <span style="color: var(--text-muted, #717b82); font-style: italic;"># 4 scientific pillars: plasma, switching, diagnostics, techno-economics</span>
│   ├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">02_Thesis/</span>                  <span style="color: var(--text-muted, #717b82); font-style: italic;"># Monograph architecture, claim ledger & LaTeX links</span>
│   ├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">03_Publications/</span>            <span style="color: var(--text-muted, #717b82); font-style: italic;"># Journal pipeline, conference targets & authorship</span>
│   ├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">04_Administration/          # ISP, KOS credits, regulations & supervisor syncs (private)</span>
│   ├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">05_Teaching/                # Laboratory courses, seminars & thesis supervision (private)</span>
│   └── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">06_Grants_Funding/          # SGS grants, GAČR proposals & mobility budgets (private)</span>
├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">III Resources/</span>                  <span style="color: var(--text-muted, #717b82); font-style: italic;"># Reusable knowledge base</span>
│   ├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">Conferences_and_Events/</span>     <span style="color: var(--text-muted, #717b82); font-style: italic;"># Academic conference directory & deadlines</span>
│   ├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">Data_and_Simulations/       # Measurement datasets & raw COMSOL files (private)</span>
│   ├── <span style="font-weight: 600; color: var(--text-normal, #18242e);">Literature/</span>                 <span style="color: var(--text-muted, #717b82); font-style: italic;"># Structured literature notes (LN - AuthorYear)</span>
│   └── <span style="font-weight: 600; color: var(--text-normal, #18242e);">Zettelkasten/</span>               <span style="color: var(--text-muted, #717b82); font-style: italic;"># Atomic permanent notes (YYYYMMDDHHmm - ...)</span>
├── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">IV Archives/                    # Completed projects & closed study periods (private)</span>
└── <span style="color: var(--text-muted, #717b82); opacity: 0.45;">TEMPLATES/                      # Reusable note structures for Templater (private)</span>
</pre>

> [!note] **Vysvětlivky k viditelnosti složek (Digital Garden vs. lokální trezor):**
> - **Výrazné / tučné písmo:** Složky a poznámky publikované na veřejném webu ([sakalmic-phd.vercel.app](https://sakalmic-phd.vercel.app/)).
> - <span style="color: var(--text-muted, #717b82); opacity: 0.55;">**Světle šedé písmo:**</span> Privátní složky a interní agenda (zůstávají pouze lokálně v Obsidianu).
> - <span style="color: var(--text-muted, #717b82); opacity: 0.55;">**_**</span>**System:** Šedé podtržítko značí lokální systémový název ve filesystému, zatímco obsah složky je vypublikován pod URL cestou `/system/`.

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
