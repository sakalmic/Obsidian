---
{"dg-publish":true,"permalink":"/ii-areas/01-research/research-extensions-roadmap/","title":"Research Extensions Roadmap","tags":["type/study","context/research","theme/roadmap","status/planned"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-02","updated":"2026-09-02","dg-note-properties":{"title":"Research Extensions Roadmap","aliases":["LTSG Extensions","Dissertation Extensions"],"tags":["type/study","context/research","theme/roadmap","status/planned"],"date":"2026-09-02","last_updated":"2026-09-02"}}
---


# Research Extensions Roadmap

## Principle

Extensions must deepen the central causal chain rather than create unrelated side projects:

$$
\text{laser parameters}
\rightarrow \text{channel state}
\rightarrow \text{breakdown dynamics}
\rightarrow \text{switching waveform}
\rightarrow \text{EMP/radiation/recovery}.
$$

The core package is [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]. Each extension below has an activation gate and a distinct research output.

## E1 - Quantitative EMP fingerprinting

**Question:** Does laser triggering change EMP amplitude, bandwidth or polarization compared with self-breakdown and electrical triggering at matched stored energy?

**Added equipment:** calibrated D-dot/B-dot probes, broadband antennas, shielded/optically isolated acquisition, network/transfer-function characterisation.

**Novelty:** time-correlate source current, plasma-channel evolution and EMP; separate source physics from chamber/cable resonances.

**Activation gate:** stable core timing data and completed four-state pickup controls.

**Likely output:** dedicated EMP methods/results paper or a major dissertation chapter.

## E2 - Ionising-radiation field mapping

**Question:** Does laser preionisation alter the probability, position or dose of photon/electron emission from an impulse discharge?

**Added equipment:** passive TLD/RPL/film arrays; later a shielded fast scintillator. Neutron work is a separate sub-gate.

**Novelty:** compare spatial radiation maps for matched laser-triggered and self-breakdown conditions; correlate active photon events with streamer/current features.

**Activation gate:** radiation-protection approval, sufficient shot budget and EMP false-signal controls.

**Risk:** weak signal integrated over many shots; source attribution can remain ambiguous.

## E3 - Femtosecond/picosecond filament triggering

**Question:** Can an extended filament reduce jitter or working coefficient more effectively than a compact nanosecond focus?

**Variables:** pulse duration, chirp, peak power relative to critical self-focusing power, filament length/number, electrode intersection and timing.

**Literature anchor:** Luther 2001; Forestier 2012; Arantchouk 2013; Rosenthal 2020; Dehne 2024; Houard 2023.

**Activation gate:** access to an ultrashort system, a safe long optical path and filament diagnostics.

## E4 - High-repetition operation and memory effects

**Question:** How do residual heat, species, aerosols and electrode conditioning affect the next shot?

**Measurements:** trigger probability versus repetition rate, inter-shot delay, gas temperature/density proxy, ozone/NOx where appropriate, electrode wear and recovery voltage.

**Novelty:** link microscopic channel memory to practical recovery and lifetime.

**Activation gate:** single-shot core package is stable and automated data capture works reliably.

## E5 - Gas, pressure and environmentally preferable mixtures

**Question:** Which gas/pressure combinations minimise trigger energy and jitter while maintaining hold-off and recovery?

**Design:** air baseline first; then dry air, N2, noble-gas mixtures or other justified candidates. SF6 alternatives require a separate safety/environmental assessment.

**Activation gate:** sealed pressure-capable chamber, gas handling, leak test and approved safety procedure.

**Risk:** scope grows rapidly because transport and reaction coefficients change with composition.

## E6 - Electrode geometry, material and erosion

**Question:** Can field geometry be optimised for low jitter without concentrating erosion or producing unstable attachment?

**Measurements:** field simulation, attachment-point distribution, surface metrology, mass/roughness change, action integral $\int i^2dt$ and shot-history effect.

**Activation gate:** spare interchangeable electrodes and a reproducible conditioning protocol.

## E7 - Coupled plasma-circuit model

**Question:** Can a reduced plasma impedance model predict voltage collapse, current rise and transferred energy across circuit configurations?

**Model chain:** laser deposition → $n_e,T_g,N$ → conductivity/channel radius → dynamic plasma resistance → measured RLC circuit.

**Activation gate:** validated electrostatic/reduced channel model and measured circuit parasitics.

## E8 - Streamer-to-leader physics in longer gaps

**Question:** How does a laser-created path modify the transition from streamer corona to a thermally sustained leader?

**Measurements:** long-gap imaging, leader velocity, current pulses, channel temperature/density and polarity asymmetry.

**Activation gate:** longer-gap HV facility and optical access; only after the short-gap timing methodology is proven.

## E9 - Power-engineering demonstrator

**Question:** Can the controlled gap trigger a useful pulsed-power function with quantified reliability, lifetime and energy cost?

**Possible demonstrators:** triggered capacitor discharge, Marx-generator stage, crowbar/protection switch or synchronized pulsed source.

**Required metrics:** hold-off, trigger range, delay/jitter, current/charge, recovery, failure rate, electrode lifetime, laser wall-plug energy and system cost.

**Boundary:** this is not equivalent to interrupting grid AC fault current. A claim about a circuit breaker requires current interruption, dielectric recovery and system-level validation.

## E10 - Techno-economic and reliability assessment

**Question:** Under what validated technical envelope could optical triggering offer value over an electrical trigger or conventional pulsed-power switch?

**Inputs must come from experiments:** laser energy and repetition, maintenance interval, electrode life, false-trigger probability, missed-trigger probability, timing advantage, component cost and availability.

**Method:** total cost of ownership and reliability/sensitivity analysis. Do not calculate payback from assumed performance values presented as measurements.

## Prioritisation

| Priority | Extension | Rationale |
| ---: | --- | --- |
| 1 | E6 geometry/erosion | Low additional equipment; directly improves core validity. |
| 2 | E1 EMP pilot | Strong link to Cikhardt and measurement integrity. |
| 3 | E7 coupled model | Converts measurements into transferable understanding. |
| 4 | E9 pulsed-power demonstrator | Clear applied contribution after mechanism validation. |
| 5 | E2 radiation mapping | High novelty but needs specialist diagnostics and controls. |
| 6 | E4 high repetition | Valuable for application and recovery; requires automation. |
| 7 | E3 filament triggering | Scientifically strong, equipment-dependent. |
| 8 | E5 gases/pressure | Large parameter space and added safety burden. |
| 9 | E8 long gaps | Facility-intensive and broader than the minimum thesis. |
| 10 | E10 techno-economics | Meaningful only after technical inputs are measured. |

## Decision matrix for supervisor review

| Extension | Scientific value | Cost/complexity | Dependency | Candidate decision |
| --- | :---: | :---: | --- | --- |
| E1 EMP | High | Medium-high | Stable core + calibrated RF chain | Decide Feb 2028 |
| E2 radiation | High | High | Radiation group + detector access | Decide after survey |
| E3 filament | High | High | Ultrafast laser collaboration | Opportunity-driven |
| E4 repetition | Medium-high | Medium | Automation + recovery protocol | After WP4 |
| E6 erosion | Medium-high | Low-medium | Spare electrodes/metrology | Include early |
| E7 coupled model | High | Medium | WP1-WP4 data | Include |
| E9 demonstrator | High applied | High | Core validated | Stretch goal |
| E10 economics | Conditional | Medium | Real reliability/cost data | Late-stage only |

## Related notes

- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]
- [[II Areas/01_Research/Techno-Economic Modeling of Grid Switching\|Techno-Economic Modeling of Grid Switching]]
- [[II Areas/01_Research/High-Voltage Arc Quenching & Protection\|High-Voltage Arc Quenching & Protection]]

