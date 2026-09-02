---
{"dg-publish":true,"permalink":"/ii-areas/02-thesis/thesis-structure-and-chapter-outline/","title":"Thesis Structure & Chapter Outline","tags":["type/chapter","context/thesis","status/in-progress"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-02","dg-note-properties":{"title":"Thesis Structure & Chapter Outline","aliases":["Thesis Structure","Chapter Outline"],"tags":["type/chapter","context/thesis","status/in-progress"],"status":"in-progress","date":"2026-09-01","last_updated":"2026-09-02"}}
---


# Thesis Structure & Chapter Outline

Current broad title: **Laser-Induced Plasma Structures for Protection and Switching in Electrical Power Engineering: Physical Dynamics and Techno-Economic Modeling**

Recommended experimentally centred working title: **Dynamics and Diagnostics of Laser-Triggered High-Voltage Pulsed Discharges**

*Author: Ing. Michal Sakala · Supervisor: doc. Ing. Jan Mikeš, Ph.D. · Czech Technical University in Prague, Faculty of Electrical Engineering*

---

## Monograph outline

### Chapter 1: Introduction & State of the Art

- **Objective:** Define the scientific problem of reproducible optically controlled high-voltage breakdown and distinguish it from the later application case.
- **Topics:** Triggered spark gaps; statistical/formative delay; nanosecond versus ultrashort triggering; long-gap/filament work; unresolved mechanism and metrology gaps.
- **LaTeX file:** `chapters/ch01_introduction.tex`
- **Status:** Draft

### Chapter 2: Theoretical & Physical Foundations of Plasma Switching

- **Objective:** Develop the mathematical and physical description of optical breakdown and discharge evolution in gaseous dielectrics.
- **Topics:** Focal intensity and uncertainty; multiphoton/tunnelling seed production; attachment, recombination and avalanche; $E/N$; Townsend/Paschen limits; streamer/leader formation; hydrodynamic density channels; delay/jitter statistics; circuit coupling.
- **Obsidian basis:** [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]].
- **LaTeX file:** `chapters/ch02_theory.tex`
- **Status:** Draft

### Chapter 3: Multiphysics Numerical Modeling (COMSOL)

- **Objective:** Build the smallest model capable of predicting a held-out core observable before extending complexity.
- **Topics:** Electrostatic field map; parameterised laser channel; electron balance and drift-diffusion; gas-density evolution; breakdown criterion; external-circuit reduction; calibration/validation split and sensitivity analysis. Full 3D chemistry is optional.
- **LaTeX file:** `chapters/ch03_modeling.tex`
- **Status:** In progress

### Chapter 4: Experimental Campaign, Diagnostics & Validation

- **Objective:** Deliver the core original contribution.
- **Topics:** IEC-aligned metrology; self-breakdown $U_{50}$; laser calibration; sequential screening; ≥100-shot confirmatory conditions; censored trigger failures; synchronized voltage/current/optical diagnostics; day/electrode reproducibility; model validation.
- **Plan:** [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]].
- **LaTeX file:** `chapters/ch04_experiments.tex`
- **Status:** In progress

### Chapter 5: EMP, Radiation and Other Activated Extensions

- **Objective:** Present only extensions that passed their activation gates and produced controlled evidence.
- **Topics:** Quantitative EMP comparison; passive radiation survey/mapping; time-resolved photon correlation; geometry/erosion; repetition/recovery; filament collaboration.
- **Obsidian basis:** [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]] and [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]].
- **Status:** Conditional

### Chapter 6: Pulsed-Power Application and Conditional Techno-Economics

- **Objective:** Evaluate an experimentally validated use case without conflating triggering with fault-current interruption.
- **Topics:** Demonstrator circuit, reliability, electrode lifetime, recovery, wall-plug laser cost, total cost of ownership and sensitivity analysis.
- **Rule:** keep as outlook if measured reliability/cost inputs are unavailable.
- **LaTeX file:** `chapters/ch05_technoeconomics.tex` (rename only when manuscript structure is frozen)
- **Status:** Conditional

### Chapter 7: Conclusions, Scientific Contributions & Outlook

- **Objective:** Synthesise the original contributions, provide recommendations for practice and define future research directions.
- **LaTeX file:** `chapters/ch06_conclusions.tex`
- **Status:** Planning

## Minimum-thesis boundary

Chapters 1-4 plus Chapter 7 form a defensible dissertation if the core hypotheses are tested with adequate metrology, statistics and independent repetition. Chapters 5-6 increase breadth but are not allowed to delay completion of the core evidence package.

---

## Related notes

- [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix\|Claim Ledger & Evidence Matrix]]
- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]
- [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]]
- [[II Areas/02_Thesis/02_MOC\|02_Dissertation MOC]]
- [[I Projects/Dissertation Manuscript\|Dissertation Manuscript]]
