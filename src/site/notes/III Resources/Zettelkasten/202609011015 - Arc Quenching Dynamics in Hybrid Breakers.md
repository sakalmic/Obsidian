---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609011015-arc-quenching-dynamics-in-hybrid-breakers/","title":"Arc Quenching Dynamics in Hybrid Breakers","tags":["type/permanent","context/research","theme/arc-quenching","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"title":"Arc Quenching Dynamics in Hybrid Breakers","aliases":["Zettel - Arc Quenching Dynamics in Hybrid Breakers","Arc Quenching Dynamics in Hybrid Breakers"],"tags":["type/permanent","context/research","theme/arc-quenching","status/evergreen"],"date":"2026-09-01","last_updated":"2026-09-02"}}
---


# Arc Quenching Dynamics in Hybrid Breakers

## Core concept
In a hybrid breaker, current is commutated away from the mechanical contact into another branch so that the contact can interrupt at a natural or deliberately created current zero. Semiconductor, resonant and auxiliary-switch branches are established concepts; a laser-triggered spark gap is a **candidate auxiliary switch**, not yet a demonstrated breaker architecture in this project.

---

## Recovery-voltage and quenching dynamics
Arc quenching is limited by the rate of rise of recovery voltage (RRRV):
$$
\text{RRRV} = \left.\frac{du_{TRV}}{dt}\right|_{t=0} \le \left(\frac{du_{diel}}{dt}\right)_{crit}
$$
An LTSG could contribute to the timing of an auxiliary commutation pulse, but the switch alone does not create an artificial current zero. That system-level outcome additionally requires a commutation circuit, sufficient opposing current, insulation recovery and acceptable recovery-voltage stress. The core PhD campaign therefore measures trigger probability, delay, jitter, recovery and erosion first; breaker claims remain conditional on a later demonstrator.

## Demonstrator evidence needed

- a complete equivalent circuit and energy balance;
- comparison with a defined incumbent auxiliary switch;
- current-zero timing and post-zero dielectric recovery;
- transient recovery voltage and RRRV margin;
- repetitive-shot lifetime, failure modes and laser-system overhead.

---

## Knowledge-graph connections
- **Parent concept:** [[II Areas/01_Research/High-Voltage Arc Quenching & Protection\|High-Voltage Arc Quenching & Protection]] · [[II Areas/01_Research/01_MOC\|01_Research MOC]]
- **Application:** [[II Areas/01_Research/Techno-Economic Modeling of Grid Switching\|Techno-Economic Modeling of Grid Switching]]
- **Dissertation link:** [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix#EX-APP-01\|EX-APP-01]] · [[II Areas/01_Research/Research Extensions Roadmap#E9 - Power-engineering demonstrator\|E9 demonstrator]]
