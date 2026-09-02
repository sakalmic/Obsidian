---
{"dg-publish":true,"permalink":"/ii-areas/01-research/diagnostics-timing-emp-and-radiation/","title":"Diagnostics - Timing, EMP and Radiation","tags":["type/study","context/research","theme/diagnostics","theme/emp","theme/radiation","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-02","updated":"2026-09-02","dg-note-properties":{"title":"Diagnostics - Timing, EMP and Radiation","aliases":["LTSG Diagnostics","EMP and Radiation Diagnostics"],"tags":["type/study","context/research","theme/diagnostics","theme/emp","theme/radiation","status/evergreen"],"date":"2026-09-02","last_updated":"2026-09-02"}}
---


# Diagnostics - Timing, EMP and Radiation

## Measurement philosophy

The experiment must distinguish the physics of the discharge from the response of the measuring system. Every channel is therefore treated as a measurement chain:

$$
x(t)\rightarrow \text{sensor}\rightarrow \text{cable}\rightarrow \text{attenuator/filter}\rightarrow \text{digitiser}\rightarrow \text{algorithm}.
$$

In frequency space,

$$V_{meas}(f)=H_{chain}(f)X(f)+N(f).$$

Claims about rise time, spectrum or absolute field require either a sufficiently flat chain over the band of interest or de-embedding with a documented transfer function $H_{chain}(f)$.

## 1. Common time base

### Required channels

- Laser timing photodiode: defines $t_0$.
- Gap voltage: identifies applied waveform and voltage collapse.
- Discharge current: confirms conductive breakdown and current rise.
- Optical emission: separates laser plasma from the subsequent discharge.
- Camera gate/trigger monitor: records the actual imaging time, not only the programmed delay.

### Timing audit

For each channel record:

- sensor model and serial number;
- bandwidth, rise time and polarity;
- cable type and measured length;
- attenuator/filter and termination;
- oscilloscope channel, range and sampling rate;
- measured fixed delay and uncertainty;
- saturation/clipping threshold.

Use one common calibration event to estimate relative channel delays. Sampling rate alone does not define timing accuracy; analogue bandwidth, trigger jitter, interpolation and signal-to-noise ratio also enter.

## 2. Breakdown markers

Use at least two independent markers:

1. **Voltage marker:** time at which the gap voltage crosses a declared fraction of its pre-breakdown value.
2. **Current marker:** time at which current crosses a declared threshold above baseline noise.

The primary marker must be frozen before confirmatory analysis. Repeat the calculation for reasonable alternative thresholds as a sensitivity check. Optical onset is a separate physical observable and should not silently replace electrical breakdown.

## 3. Optical diagnostics

### Minimal optical channel

A fast photodetector viewing the gap through an optical fibre can provide emission onset and integrated temporal structure while keeping the oscilloscope outside the highest-field region. Filter the laser wavelength when necessary to prevent the trigger pulse from being mistaken for discharge emission.

### Gated imaging

Use a matrix of gate delays and gate widths to reconstruct development statistically. A single ICCD frame is not a movie unless a multi-frame camera is used. At every delay acquire enough repeated shots to separate reproducible structure from stochastic branching.

Extract:

- channel centreline and continuity;
- apparent diameter after point-spread correction;
- streamer/leader front location;
- branch count or tortuosity;
- attachment point and electrode-root emission;
- uncertainty from thresholding and camera calibration.

### Spectroscopy

Time-resolved spectra can constrain excitation, temperature proxies and gas composition, but LTE assumptions must be justified. Stark broadening, Boltzmann plots or line ratios require instrument-function calibration, self-absorption checks and adequate spectral resolution.

## 4. EMP diagnostics

Cikhardt's habilitation shows that broadband EMP from rapidly evolving plasma can be both a severe interference source and a physics observable. Its spectrum can depend on source/plasma parameters, while the measured waveform is also shaped by resonances and the diagnostic environment.

### Sensor roles

- **D-dot probe:** nominally proportional to $dE/dt$ in its calibrated range; integration is needed for $E(t)$.
- **B-dot loop:** nominally proportional to $dB/dt$; loop area, orientation and common-mode rejection must be calibrated.
- **Broadband antenna:** useful for radiated field after antenna factor, cable loss and distance are considered.
- **Current/voltage probes:** necessary to correlate radiated/conducted EMP with charge transfer and circuit oscillations.

### Minimum EMP pilot

1. Run the four-state background matrix: all off; laser only; HV without breakdown; laser-triggered breakdown.
2. Add self-breakdown or conventional-trigger shots at matched electrical conditions.
3. Use two sensor positions and two orthogonal polarizations.
4. Record a configuration photograph and all metallic objects/cable routes.
5. Compare spectra only over the common calibrated bandwidth.
6. Test repeatability after moving one probe and returning it to the original position.

### Interpretation rules

- Separate conducted pickup from radiated coupling using shielding, fibre links and geometry controls.
- Do not interpret chamber peaks as source frequencies without a transfer-function or geometry test.
- Near-field/far-field assumptions are frequency dependent; a broadband pulse can span both regimes at one observation distance.
- Do not estimate total EMP power from one antenna using isotropic emission unless that assumption is explicitly treated as a bound.
- Preserve raw waveforms before filtering or numerical integration.

### Comparison question

The scientifically useful comparison is not simply “laser on versus laser off”. It is:

$$
\text{laser-triggered},\quad
\text{self-breakdown},\quad
\text{electrically triggered}
$$

at matched pre-breakdown voltage, stored energy, geometry and measurement-chain state. This tests whether laser triggering changes EMP beyond merely changing when the same circuit discharges.

## 5. Ionising-radiation diagnostics

Stepanova's dissertation demonstrates that laboratory high-voltage and high-current impulse generators can produce measurable photon/electron and, in some configurations, neutron components. It also demonstrates why passive detectors are valuable in an environment where intense electromagnetic interference can corrupt active electronics.

### Physical channels to consider

- Accelerated electrons impacting electrodes or surrounding material produce bremsstrahlung.
- Strong local fields near streamer/leader heads may accelerate electrons and produce short X-ray bursts.
- Photoneutron production requires photons above reaction-specific thresholds; representative atmospheric thresholds discussed by Stepanova are 10.55 MeV for $^{14}$N$(\gamma,n)$ and 15.7 MeV for $^{16}$O$(\gamma,n)$.
- Fast ions or interactions with construction materials can complicate source attribution in high-current plasma systems.

Detection of thermal neutrons alone does not identify the source mechanism or original spectrum.

### Staged radiation package

#### Stage R0 - Safety survey

- Passive photon dosimetry at background and near-gap positions.
- Survey-meter measurements performed under an approved radiation-protection procedure.
- No mechanistic claim; only establish whether further diagnostics are justified.

#### Stage R1 - Spatial passive map

- TLD/RPL or appropriate film along and around the gap.
- Background controls, blind identifiers and adequate detector count per position.
- Record total number of shots and electrical energy per shot.
- Test spatial non-homogeneity rather than assuming inverse-square behaviour from a point source.

#### Stage R2 - Time-resolved photons

- Shielded scintillator or other fast detector with fibre/remote readout.
- Lead/copper shielding and shadow-cone style controls as appropriate.
- Cross-correlate photon events with voltage collapse, current oscillation and optical phases.
- Verify EMP pickup using dummy loads, blocked detector or non-scintillating control channels.

#### Stage R3 - Neutron investigation

- Activate only after photon energy/mechanism and radiation-protection review justify it.
- Combine detectors with different energy responses; do not rely on one thermal-neutron channel.
- Include material inventory and transport simulations for source attribution.
- Calibrate or validate response in the intended energy range.

## 6. Lessons from Stepanova for experimental design

- Radiation fields can be strongly non-homogeneous along a long impulse discharge; detector position is a primary variable.
- A null result at one position, polarity or detector type does not imply absence of radiation.
- Increasing detector count can change whether a weak component reaches statistical significance.
- Passive detectors protect against EMP but integrate over shots and lose event timing.
- Active and passive diagnostics are complementary: active channels give timing, passive channels give robust integrated exposure.
- Polarity did not significantly change absorbed-dose distributions in one atmospheric-impulse study, while other discharge properties can show strong polarity dependence. Treat polarity effects as an empirical question for each observable.
- The absence of significant thermal-neutron enhancement for the tested switching impulse is an important boundary condition, not evidence that all neutron components are absent under all settings.

## 7. Uncertainty and false-signal controls

### Electrical/optical

- cable-delay uncertainty;
- bandwidth-limited rise time;
- quantisation and trigger interpolation;
- baseline drift and electromagnetic pickup;
- camera-gate timing and geometric calibration;
- shot-to-shot laser-energy variation.

### EMP

- antenna factor and orientation;
- cable loss and connector repeatability;
- saturation and nonlinear protection devices;
- common-mode pickup;
- reflections and environmental resonances;
- numerical integration drift.

### Radiation

- detector calibration and energy dependence;
- background subtraction and fading;
- mixed-field cross-sensitivity;
- positioning uncertainty;
- number of shots and shot-energy normalisation;
- EMP-induced false pulses in active detectors;
- neutron moderation and scattering by the laboratory.

## 8. Data products

Each shot should produce or reference:

- immutable shot ID and UTC/local timestamp;
- voltage/current/photodiode raw waveforms;
- processed markers with algorithm version;
- laser energy, wavelength, pulse duration and focus setting;
- environmental conditions;
- electrode geometry and shot count since service;
- image/spectrum file identifiers;
- trigger success/failure/censored state;
- diagnostic saturation and quality flags.

Campaign-level products include calibration files, sensor positions, uncertainty budget, analysis scripts, protocol version and a machine-readable condition table.

## 9. Activation gates for extensions

| Extension | Activate when | Stop or redesign when |
| --- | --- | --- |
| Quantitative EMP | Core waveforms are stable and optical fibre/isolation controls are available. | Signals change primarily with cable routing or saturate the chain. |
| Passive radiation map | Shot count and energy are sufficient for detection above background. | Background/control uncertainty dominates expected signal. |
| Time-resolved X-ray | EMP false-signal controls have passed. | Dummy/control channel reproduces candidate pulses. |
| Neutrons | Radiation safety, detector calibration and plausible production mechanism are documented. | Single-detector evidence cannot distinguish neutrons from photons/EMP. |

## Related notes

- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]]
- [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]]
- [[III Resources/Literature/LN - Cikhardt2026 - Electromagnetic and Particle Pulses\|LN - Cikhardt2026 - Electromagnetic and Particle Pulses]]
- [[III Resources/Literature/LN - Stepanova2026 - Ionising Radiation from Impulse Generators\|LN - Stepanova2026 - Ionising Radiation from Impulse Generators]]
- [[I Projects/Experimental Diagnostics Campaign\|Experimental Diagnostics Campaign]]

## Anchor sources

- J. Cikhardt, *Generation of electromagnetic and particle radiation pulses in high energy density plasma*, habilitation thesis, CTU FEE, 2026.
- D. Štěpánová, *Studium emise ionizujícího záření při vysokoenergetických atmosférických jevech v laboratorních podmínkách*, doctoral dissertation, CTU FNSPE, 2026.
- E. W. Rosenthal et al., [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836).
- [IEC 60060-1:2025](https://webstore.iec.ch/en/publication/65088).
- [IEC 60060-2:2025](https://webstore.iec.ch/en/publication/65089).
- [IEC 62475:2026](https://webstore.iec.ch/en/publication/67634) for high-current test definitions and measuring systems when that extension is activated.
