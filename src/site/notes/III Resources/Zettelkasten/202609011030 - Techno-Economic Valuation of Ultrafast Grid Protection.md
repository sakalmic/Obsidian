---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609011030-techno-economic-valuation-of-ultrafast-grid-protection/","title":"Techno-Economic Valuation of Ultrafast Grid Protection","tags":["type/permanent","context/research","theme/techno-economics","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"title":"Techno-Economic Valuation of Ultrafast Grid Protection","aliases":["Zettel - Techno-Economic Valuation of Ultrafast Grid Protection","Techno-Economic Valuation of Ultrafast Grid Protection"],"tags":["type/permanent","context/research","theme/techno-economics","status/evergreen"],"date":"2026-09-01","last_updated":"2026-09-02"}}
---


# Techno-Economic Valuation of Ultrafast Grid Protection

## Core concept
Techno-economic modelling of power-system protection translates **measured system-level changes**—for example interruption-time distribution, let-through energy, failure probability and maintenance interval—into costs and reliability outcomes. A change from $50\ \mathrm{ms}$ to $5\ \mu\mathrm{s}$ is a scenario bound, not an achieved result, until a complete demonstrator shows that the faster trigger actually shortens the system interruption sequence.

---

## Quantifying economic value
The total economic value $V_{tot}$ is the sum of the relevant savings:
$$
V_{tot} = \Delta C_{maint} + \Delta C_{outage} + \Delta C_{asset} - C_{laser\_sys}
$$
where:
- $\Delta C_{maint}$ is the saving in quenching-chamber maintenance cycles.
- $\Delta C_{outage}$ is the reduction in interruption costs, expressed through the value of lost load and SAIDI/SAIFI indices.
- $\Delta C_{asset}$ is the extension of transformer and switch service life through reduced dynamic short-circuit forces.
- $C_{laser\_sys}$ is the CAPEX and OPEX of the laser and optical control subsystem.

The model should propagate distributions, not only point estimates. At minimum vary trigger success, false-trigger probability, component lifetime, discount rate, maintenance cost, outage value and incumbent-switch performance. Report break-even boundaries and dominant sensitivities; calculate payback only for named use cases with traceable inputs.

---

## Knowledge-graph connections
- **Parent concept:** [[II Areas/01_Research/Techno-Economic Modeling of Grid Switching\|Techno-Economic Modeling of Grid Switching]] · [[II Areas/01_Research/01_MOC\|01_Research MOC]]
- **Dissertation link:** [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix#EX-ECO-01\|EX-ECO-01]] · [[II Areas/02_Thesis/Thesis Structure & Chapter Outline#Chapter 6: Pulsed-Power Application and Conditional Techno-Economics\|Chapter 6]]
