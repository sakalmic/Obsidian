---
{"dg-publish":true,"permalink":"/system/tags-and-linking-convention/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"aliases":["Tags and Linking Convention","Tagging Rules"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-02"}}
---


# Tags and Linking Convention

This guide defines the required conventions for tagging and linking notes in the doctoral vault. The goal is reliable Dataview queries, a consistent knowledge graph and clean public navigation.

---

## 1. Required tag dimensions

Every new note should include the relevant tags from these dimensions:

1. **Type:** `#type/...`
2. **Context:** `#context/...`
3. **Theme:** `#theme/...`
4. **Status and priority:** `#status/...`, `#priority/...`

---

## 2. Type tags

- `#type/project` — active research, publication or study project
- `#type/literature` — structured note on a paper, book or proceedings item
- `#type/permanent` — atomic Zettelkasten note
- `#type/fleeting` — rapidly captured observation or idea
- `#type/daily` — daily research log
- `#type/chapter` — dissertation chapter or subsection
- `#type/meeting` — meeting record
- `#type/paper` — manuscript and peer-review tracker
- `#type/experiment` — simulation or laboratory protocol
- `#type/grant` — grant application or report
- `#type/teaching` — course or supervision note
- `#type/moc` — Map of Content

---

## 3. Context tags

- `#context/phd` — general doctoral context
- `#context/research` — scientific research and experiments
- `#context/thesis` — dissertation planning and writing
- `#context/publications` — papers and conferences
- `#context/admin` — study administration and regulations
- `#context/teaching` — teaching and supervision
- `#context/grants` — funding and grant administration

---

## 4. Theme tags (2-tier hierarchical taxonomy)

Research themes are organized hierarchically under `#theme/<pillar>/<topic>` matching the dissertation pillars:

### Pillar 1 · Discharge Physics & Optical Breakdown
- `#theme/physics/optical-breakdown` — multiphoton, cascade/avalanche, threshold intensity, seed electron generation
- `#theme/physics/plasma-dynamics` — hydrodynamic expansion, shock-wave propagation, electron temperature, thermal relaxation
- `#theme/physics/gaseous-dielectrics` — SF6 alternatives, synthetic air, N2/O2 mixtures, dielectric recovery

### Pillar 2 · High-Voltage Switching & Arc Quenching
- `#theme/engineering/ltsg` — laser-triggered spark gap design, electrode geometry, trigger delay, jitter reduction
- `#theme/engineering/arc-quenching` — thermal deionisation, magnetic/laser arc steering, hybrid mechanical-plasma interruption
- `#theme/engineering/power-grid` — fast transmission/distribution protection, transient recovery voltage, overvoltage mitigation

### Pillar 3 · Experimental Diagnostics, Statistics & Simulation
- `#theme/methods/diagnostics` — ICCD imaging, timing synchronisation, B-dot/Rogowski probes, calibrated voltage dividers, EMP shielding
- `#theme/methods/statistics` — U50 estimation, logistic/probit regression, delay censoring, Weibull analysis, jitter characterisation
- `#theme/methods/comsol-multiphysics` — 2D/3D axisymmetric models, drift-diffusion kinetics, hydrodynamic coupling, mesh refinement

### Pillar 4 · Techno-Economic Grid Assessment
- `#theme/economics/asset-lifecycle` — switching contact erosion reduction ($I^2t$), circuit-breaker lifetime extension
- `#theme/economics/grid-reliability` — SAIDI, SAIFI, avoided cascading outage costs, resilience with renewable penetration
- `#theme/economics/cost-benefit` — LCC, CAPEX/OPEX of laser/optical subsystems versus SF6 environmental compliance costs

### Research Extensions & Strategy
- `#theme/roadmap` — strategic research roadmaps, experimental campaigns, and long-term milestones (2026–2028)

---

## 5. Status and priority tags

### Status

`#status/idea` · `#status/planning` · `#status/in-progress` · `#status/draft` · `#status/submitted` · `#status/revision` · `#status/published` · `#status/completed` · `#status/evergreen`

### Priority

`#priority/critical` · `#priority/high` · `#priority/normal` · `#priority/low` · `#priority/lowest`

---

## 6. Internal links and public navigation

1. **Descriptive link labels:** Use natural language labels in prose (e.g. `[[Laser-Induced Plasma Dynamics|plasma channel dynamics]]`) rather than raw paths.
2. **Standardized prefixes:** Prefix literature notes with `LN - ` (e.g. `LN - Mikes2024 - Laser Spark Gaps`) and permanent zettels with `YYYYMMDDHHmm - ` (e.g. `202609011000 - Optical Breakdown Mechanism in Air`).
3. **Traceable claims:** Link dissertation claims by their permanent alphanumeric IDs, such as `[[Claim Ledger & Evidence Matrix#CL-01|CL-01]]`.
4. **Public–private link hygiene:** Public notes (`dg-publish: true`) must link only to other public notes. References to private administrative notes or meetings should be formatted as plain text rather than active wikilinks to prevent 404 dead links on Vercel.
5. **Model A conceptual up-linking:** In our flat folder structure, hierarchy is expressed through upward wikilinks. When creating atomic notes, simulation logs, or literature reviews, link up to the canonical pillar note (e.g. `[[Laser-Induced Plasma Dynamics]]` or `pillar: "[[Laser-Triggered Spark Gaps (LTSG)]]"`). This automatically populates Obsidian's backlink panel and Digital Garden's web backlink footer.
6. **Hierarchical Dataview queries:** In MOCs and dashboard notes, query entire pillars using hierarchical tag matching:
   | Note                                                                                                                           | Status |
| ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]]                                       | \-     |
| [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]] | \-     |

{ .block-language-dataview}
7. **Aliases for fluid writing:** Define standard aliases in frontmatter (e.g. `aliases: [LTSG, Laser-Triggered Spark Gaps]`) so autocomplete finds notes effortlessly during drafting.
