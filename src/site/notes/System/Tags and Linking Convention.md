---
{"dg-publish":true,"permalink":"/system/tags-and-linking-convention/","tags":["type/guide","context/phd","theme/system"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"aliases":["Tags and Linking Convention","Tagging Rules"],"tags":["type/guide","context/phd","theme/system"],"date":"2026-09-01","last_updated":"2026-09-01"}}
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

## 4. Theme tags

### Plasma and laser switching

- `#theme/plasma-dynamics`
- `#theme/laser-triggering`
- `#theme/breakdown-physics`
- `#theme/optical-diagnostics`

### Power systems and switching

- `#theme/electrical-power`
- `#theme/arc-quenching`
- `#theme/power-grid`
- `#theme/hybrid-breakers`

### Modelling and economics

- `#theme/comsol-simulation`
- `#theme/techno-economics`
- `#theme/methodology`

---

## 5. Status and priority tags

### Status

`#status/idea` · `#status/planning` · `#status/in-progress` · `#status/draft` · `#status/submitted` · `#status/revision` · `#status/published` · `#status/completed` · `#status/evergreen`

### Priority

`#priority/critical` · `#priority/high` · `#priority/normal` · `#priority/low` · `#priority/lowest`

---

## 6. Internal links and public navigation

1. Use clear wiki links: `[[Note Title]]` or `[[Note Title|Display text]]`.
2. Prefix literature notes with `LN - ` and permanent notes with `YYYYMMDDHHmm - `.
3. Link dissertation claims by stable ID, for example `[[Claim Ledger & Evidence Matrix#CL-01|CL-01]]`.
4. Public notes may link only to other notes with `dg-publish: true`; private destinations should be described as private workspace items rather than linked.
