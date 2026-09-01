---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609011000-optical-breakdown-mechanism-in-air/","title":"Optical Breakdown Mechanism in Air","tags":["type/permanent","context/research","theme/breakdown-physics","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"title":"Optical Breakdown Mechanism in Air","aliases":["Zettel - Optical Breakdown Mechanism in Air","Optical Breakdown Mechanism in Air"],"tags":["type/permanent","context/research","theme/breakdown-physics","status/evergreen"],"date":"2026-09-01","last_updated":"2026-09-01"}}
---


# Optical Breakdown Mechanism in Air

## Core concept
Laser-induced optical breakdown in atmospheric air is a threshold phenomenon governed by the electric-field intensity of the optical radiation. For nanosecond lasers at $\lambda = 1064\text{ nm}$, breakdown occurs at approximately $I_{th} \approx 10^{10} - 10^{11}\text{ W/cm}^2$.

---

## Physical mechanism
The process develops in two stages:
1. **Multiphoton ionisation (MPI):** Simultaneous absorption of $k$ photons overcomes the ionisation potential of nitrogen and oxygen molecules ($E_i \approx 12 - 15.6\text{ eV}$), creating the initial seed electrons.
2. **Cascade or avalanche ionisation:** Free electrons absorb photons during collisions with neutral particles through inverse bremsstrahlung. Once their kinetic energy reaches $\mathcal{E} > E_i$, they ionise additional particles by impact:
$$
\frac{dn_e}{dt} = \nu_i n_e - \nu_a n_e - \nu_r n_e^2 - \nabla \cdot (\mathbf{u}_e n_e - D_e \nabla n_e)
$$
where $\nu_i$ is the ionisation frequency, $\nu_a$ the attachment frequency and $\nu_r$ the recombination frequency.

---

## Knowledge-graph connections
- **Parent concept:** [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]] · [[II Areas/01_Research/01_MOC\|01_Research MOC]]
- **Application:** [[II Areas/01_Research/Laser-Triggered Spark Gaps (LTSG)\|Laser-Triggered Spark Gaps (LTSG)]]
- **Dissertation link:** [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix#CL-02\|CL-02]] · [[II Areas/02_Thesis/Thesis Structure & Chapter Outline#Chapter 2\|Thesis Structure & Chapter Outline — Chapter 2]]
- **Source literature:** [[III Resources/Literature/LN - Mikes2024 - Laser Spark Gaps\|LN - Mikes2024 - Laser Spark Gaps]]
