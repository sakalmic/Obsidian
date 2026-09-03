---
{"dg-publish":true,"permalink":"/system/ph-d-vault-architecture-guide/","title":"PhD Vault Architecture Guide","tags":["topic/system/vault"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-03","dg-note-properties":{"title":"PhD Vault Architecture Guide","aliases":["System Guide"],"type":"guide","status":"evergreen","context":"phd","topics":["topic/system/vault"],"tags":["topic/system/vault"],"date":"2026-09-01","last_updated":"2026-09-03"}}
---


# PhD Vault Architecture Guide

This document defines the canonical architecture of **Obsidian-PhD**. The vault must support four connected outcomes: a defensible dissertation, reproducible evidence, timely publications and completion of doctoral obligations.

## Architecture decision

The existing PARA structure is retained. Public notes are not moved merely for cosmetic reasons because their paths may be used as published URLs. Classification is handled primarily through properties and links, while folders represent workflow responsibility.

<pre class="folder-tree-container" style="overflow-x: auto; scrollbar-width: thin; -webkit-overflow-scrolling: touch; background: #0c1822; border: 1px solid #1f303f; border-radius: 8px; padding: 0.85rem 1rem; font-family: var(--font-monospace, 'Consolas', monospace); font-size: 0.76em; line-height: 1.55; white-space: pre; color: #ffffff; margin: 0.9rem 0;">
<span style="color: #ffffff; font-weight: 700;">Obsidian-PhD/                    canonical doctoral research vault</span>
<span style="color: #ffffff;">├── Home.md                         public entry point and research dashboard</span>
<span style="color: #8796a0;">├── _Inbox/                         rapid capture; process within seven days</span>
<span style="color: #8796a0;">├── _Daily/                         daily research log, progress and decisions</span>
<span style="color: #ffffff;">├── _System/                        canonical rules, workflow and publishing guides</span>
<span style="color: #ffffff;">├── I Projects/                     time-bounded outcomes with deadlines</span>
<span style="color: #ffffff;">├── II Areas/                       long-lived responsibilities and synthesis</span>
<span style="color: #ffffff;">│   ├── 01_Research/                research questions, theory and method synthesis</span>
<span style="color: #ffffff;">│   ├── 02_Thesis/                  dissertation structure, argument and evidence map</span>
<span style="color: #ffffff;">│   │   └── Claims/                 one atomic note per stable CL identifier</span>
<span style="color: #ffffff;">│   ├── 03_Publications/            manuscripts, venues, reviews and publication status</span>
<span style="color: #8796a0;">│   ├── 04_Administration/          ISP, examinations, regulations and official records</span>
<span style="color: #8796a0;">│   ├── 05_Teaching/                courses, teaching evidence and supervised work</span>
<span style="color: #8796a0;">│   └── 06_Grants_Funding/          funding calls, proposals, budgets and mobility support</span>
<span style="color: #ffffff;">├── III Resources/                  reusable references, concepts and evidence</span>
<span style="color: #ffffff;">│   ├── Literature/                 one source note per paper, book or thesis</span>
<span style="color: #ffffff;">│   ├── Zettelkasten/               atomic concepts written in the author's words</span>
<span style="color: #8796a0;">│   ├── Methods/                    reusable protocols, statistics and SOPs</span>
<span style="color: #8796a0;">│   ├── Evidence/                   reproducibility records linked to claims and outputs</span>
<span style="color: #8796a0;">│   │   ├── Calibrations/           instrument calibration, uncertainty and validity records</span>
<span style="color: #8796a0;">│   │   ├── Experiments/            acquisition runs, conditions and observation records</span>
<span style="color: #8796a0;">│   │   ├── Simulations/            model inputs, configurations and computed outputs</span>
<span style="color: #8796a0;">│   │   ├── Dataset Manifests/      dataset identity, provenance, checksums and versions</span>
<span style="color: #8796a0;">│   │   └── Analysis Records/       analysis decisions, scripts, outputs and claim links</span>
<span style="color: #8796a0;">│   ├── Data_and_Simulations/       legacy indexes and external data pointers</span>
<span style="color: #ffffff;">│   └── Conferences_and_Events/     event calendar, submissions and participation records</span>
<span style="color: #8796a0;">├── IV Archives/                    completed or superseded records retained for traceability</span>
<span style="color: #8796a0;">├── Keystones/                      legacy location; do not add new notes</span>
<span style="color: #8796a0;">└── TEMPLATES/                      canonical templates for repeatable research records</span>
</pre>

> [!info] **Visibility in this diagram**
> - <span style="background: #0c1822; color: #ffffff; border-radius: 3px; padding: 0.08rem 0.35rem;">White rows</span> identify folders that contain notes selected for the public Digital Garden.
> - <span style="background: #0c1822; color: #8796a0; border-radius: 3px; padding: 0.08rem 0.35rem;">Grey rows</span> identify unpublished working folders that remain only in the local Obsidian vault. Their darker tone intentionally distinguishes them from the white public rows.
> - The colour is an orientation aid, not a publication control. A note is published only when its frontmatter explicitly contains `dg-publish: true`; a folder can therefore contain both public and local notes.

## Canonical sources of truth

| Question | Canonical note |
| --- | --- |
| What is the active scientific programme and schedule? | [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]] |
| What must be delivered in the next three weeks? | [[I Projects/Minimum Dissertation Study & Research Discussion 2026\|Minimum Dissertation Study & Research Discussion 2026]] |
| What is the dissertation title and chapter structure? | [[II Areas/02_Thesis/Thesis Structure & Chapter Outline\|Thesis Structure & Chapter Outline]] |
| Which scientific assertions are allowed? | [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix\|Claim Ledger & Evidence Matrix]] and atomic CL notes |
| How is evidence generated and promoted? | [[_System/Research Methodology & Workflows\|Research Methodology & Workflows]] |
| Which metadata are valid? | [[_System/Tags and Linking Convention\|Tags and Linking Convention]] |
| What are the doctoral deadlines? | [[I Projects/ISP & Milestone Tracking\|ISP & Milestone Tracking]] |

Other notes link to or embed these sections. They must not maintain independent copies of the same schedule or claim status.

## Folder responsibilities

### I Projects

A project has a deadline, deliverable and finish condition. Examples are the minimum study, an experimental campaign, a manuscript or the dissertation submission. A project note must contain `due`, `status`, `project_id` and a definition of done.

### II Areas

Areas contain living syntheses and long-term responsibilities. Research notes explain what is known; they do not serve as task boards. Thesis claims are atomic notes under `02_Thesis/Claims/` and are aggregated by the claim ledger.

### III Resources

Resources are reusable inputs. Raw binary data, COMSOL projects and large waveforms remain in their controlled external storage. Obsidian stores a manifest with location, checksum or immutable identifier, protocol version, QC state and linked claims.

### IV Archives

Completed projects, superseded protocols and abandoned hypotheses are archived rather than deleted. Stable IDs are never reused.

## Public and private boundary

- `dg-publish: true` is an explicit publication decision, not a default.
- Administrative, personal, safety-sensitive, raw-data and internal review notes remain private.
- Before moving a public note, assign a stable `permalink` or preserve its path.
- Public notes must not expose private dataset locations, credentials, personal records or unapproved preliminary results.

## Migration policy

1. New templates and active core notes use the property schema immediately.
2. Legacy `type/...`, `context/...`, `status/...` and `priority/...` tags may remain temporarily for compatibility, but no new note should introduce them.
3. Migrate an old note when it is next substantively edited.
4. Update dashboards to query properties rather than legacy tags.
5. Do not perform a mass path rename until public permalinks and backlinks have been checked.

## Weekly architecture check

- Inbox older than seven days is empty or explicitly deferred.
- Every active project has a next action and due date.
- Every new experiment links to a protocol, dataset manifest and at least one CL.
- No claim is marked supported without QC-passed evidence and an uncertainty statement.
- Duplicate schedules and copied task lists are replaced by links or embeds.
