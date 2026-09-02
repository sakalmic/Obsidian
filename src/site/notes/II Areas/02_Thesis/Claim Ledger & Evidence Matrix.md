---
{"dg-publish":true,"permalink":"/ii-areas/02-thesis/claim-ledger-and-evidence-matrix/","title":"Claim Ledger & Evidence Matrix","tags":["type/study","context/thesis","theme/methodology","status/in-progress"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"title":"Claim Ledger & Evidence Matrix","aliases":["Claim Ledger","Evidence Matrix"],"tags":["type/study","context/thesis","theme/methodology","status/in-progress"],"status":"in-progress","date":"2026-09-01","last_updated":"2026-09-02"}}
---


# Claim Ledger & Evidence Matrix

This matrix safeguards the **evidence-based integrity** of the dissertation. Every principal scientific claim must be traceable to primary experimental or simulation data and, where appropriate, to a peer-reviewed publication.

---

## Evidence-state vocabulary

- **Literature-supported:** established in cited external work, not yet demonstrated on the present apparatus.
- **Hypothesis:** predeclared and testable; no result implied.
- **In progress:** data collection/analysis has begun, but acceptance criteria are not met.
- **Supported:** primary data, uncertainty and independent repetition meet the acceptance criterion.
- **Falsified/bounded:** the result is absent or smaller than a stated bound under tested conditions.

## Core claim ledger

| ID | Scientific claim or hypothesis | Primary evidence required | Acceptance / falsification rule | Status |
| :---: | :--- | :--- | :--- | :---: |
| **CL-01** | Laser excitation increases breakdown probability at a fixed, subcritical working coefficient $k=U_{app}/U_{50}$. | WP1 baseline + WP3/4 randomized laser/no-laser shots. | Predeclared effect and confidence interval; report bound if interval includes no meaningful change. | Hypothesis |
| **CL-02** | Delay and jitter decrease with measured laser intensity and reach a saturation region. | ≥100 valid/censored observations per confirmatory condition; timing budget. | Trend survives day/electrode random effects and an independent repeat. | Hypothesis |
| **CL-03** | Focus position/channel continuity predicts trigger success better than pulse energy alone. | Measured channel geometry + shot-level optical energy and success. | Held-out predictive comparison of energy-only and channel-informed models. | Hypothesis |
| **CL-04** | Polarity or field geometry modifies the laser-triggering mechanism. | Separate $U_{50}$ baselines and matched-factor experiments. | Significant/predeclared interaction or a quantitative upper bound. | Hypothesis |
| **CL-05** | A reduced $E/N$ + channel-density/electron-balance model predicts median delay or trigger probability outside its calibration subset. | WP1-WP4 data with calibration/validation split. | Prediction interval covers held-out result within declared tolerance. | Hypothesis |
| **CL-06** | Optical channel evolution and electrical waveforms identify reproducible stages of breakdown. | Synchronized imaging/emission, voltage and current. | Stable time ordering/correlation across sessions; otherwise bounded/falsified. | Hypothesis |

## Extension claims - inactive until their gates are passed

| ID | Extension hypothesis | Activation gate | Evidence required | Status |
| :---: | :--- | :--- | :--- | :---: |
| **EX-EMP-01** | Laser triggering changes EMP beyond the effect of stored energy and circuit timing. | Calibrated RF chain + pickup controls. | Matched laser-triggered/self-breakdown/electrical-trigger comparison at ≥2 positions/polarizations. | Planned |
| **EX-RAD-01** | Laser triggering changes the probability or spatial distribution of photon/electron emission. | Radiation survey + EMP false-signal controls. | Passive spatial map plus time-resolved shielded detector if feasible. | Planned |
| **EX-RAD-02** | A neutron component is present under a specified configuration. | Mechanism case + calibrated multi-response detectors + radiation approval. | Concordant detector evidence and background/statistical analysis. | Planned |
| **EX-APP-01** | A validated LTSG provides a system-level advantage in a pulsed-power demonstrator. | Core reliability, recovery and lifetime data. | Circuit-level comparison with a defined incumbent trigger. | Planned |
| **EX-ECO-01** | A use case has favourable total cost/reliability under measured assumptions. | EX-APP-01 + defensible cost inputs. | Sensitivity/probabilistic analysis; no point payback claim without uncertainty. | Planned |

## Stable claim records

The sections below are permanent link targets. Update the status and evidence in the tables above; do not reuse an ID for a different claim.

### CL-01

**Laser-assisted breakdown probability.** Test the paired laser/no-laser difference at fixed $k=U_{app}/U_{50}$ using [[I Projects/LTSG Core Research Package 2026-2028#WP3 - Screening experiment\|WP3]] and the confirmatory campaign. Report the effect size and interval, including a useful upper bound if the effect is absent.

### CL-02

**Delay and jitter.** Relate censored shot-level delay data to measured optical variables; separate source timing, diagnostic timing and discharge variability using [[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]].

### CL-03

**Channel geometry versus pulse energy.** Compare an energy-only model with one containing focus position and measured channel continuity on held-out shots.

### CL-04

**Polarity and field geometry.** Test matched conditions only after separate self-breakdown baselines establish comparable working coefficients.

### CL-05

**Reduced predictive model.** Calibrate the smallest defensible $E/N$ and channel-evolution model on one subset, then evaluate its predictive interval on untouched data.

### CL-06

**Reproducible discharge stages.** Require synchronized optical and electrical records and show stable event ordering across sessions before assigning physical stage labels.

### EX-EMP-01

**EMP extension.** Activate only after a calibrated RF chain and the four-state pickup-control matrix distinguish radiated signal from cable/instrument coupling.

### EX-RAD-01

**Photon/electron extension.** Begin with passive spatial mapping and background controls; add fast detectors only after EMP immunity is demonstrated.

### EX-RAD-02

**Neutron extension.** Requires a credible production mechanism, radiation-safety approval, multiple detector responses and a predeclared background analysis.

### EX-APP-01

**Pulsed-power demonstrator.** Compare the validated LTSG with a defined incumbent switch on reliability, timing, recovery, lifetime and system complexity.

### EX-ECO-01

**Techno-economic case.** Build only on measured EX-APP-01 performance and traceable cost inputs; report sensitivity distributions rather than a single deterministic payback number.

## Literature evidence that constrains the claims

| Evidence | What it supports | What it does not prove here |
| --- | --- | --- |
| Luther et al. 2001, [doi:10.1063/1.1419036](https://doi.org/10.1063/1.1419036) | Femtosecond triggering can reach tens-of-picoseconds jitter in a small pressurised gap. | Jitter of the present atmospheric nanosecond system. |
| Arantchouk et al. 2013, [doi:10.1063/1.4802927](https://doi.org/10.1063/1.4802927) | Atmospheric filament triggering can switch >10 kA with sub-ns jitter in an optimised setup. | Performance at the present voltage, geometry or laser regime. |
| Rosenthal et al. 2020, [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836) | Density-channel/electrode heating can dominate femtosecond-triggered breakdown evolution. | Dominance of the same mechanism for nanosecond excitation. |
| [[III Resources/Literature/LN - Cikhardt2026 - Electromagnetic and Particle Pulses\|LN - Cikhardt2026 - Electromagnetic and Particle Pulses]] | EMP is multi-mechanism and measurement-chain sensitive. | Quantitative EMP amplitude of the LTSG. |
| [[III Resources/Literature/LN - Stepanova2026 - Ionising Radiation from Impulse Generators\|LN - Stepanova2026 - Ionising Radiation from Impulse Generators]] | Impulse generators can produce spatially non-homogeneous mixed radiation fields. | Radiation presence or mechanism in laser-triggered shots. |

## Integrity note (2026-09-02)

Earlier numerical statements in this ledger (80% delay reduction, 5% model agreement, 45% wear reduction and 4.2-year payback) were not accompanied here by inspectable primary evidence and acceptance criteria. They have therefore been replaced by testable hypotheses. Reintroduce a numerical claim only with a dataset identifier, analysis version, uncertainty and independent verification state.

---

## Related notes

- [[II Areas/02_Thesis/Thesis Structure & Chapter Outline\|Thesis Structure & Chapter Outline]]
- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]]
- [[I Projects/Paper - IEEE Transactions 2026\|Paper - IEEE Transactions 2026]]
- [[II Areas/01_Research/Techno-Economic Modeling of Grid Switching\|Techno-Economic Modeling of Grid Switching]]
