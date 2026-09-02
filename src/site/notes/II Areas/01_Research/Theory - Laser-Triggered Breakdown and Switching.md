---
{"dg-publish":true,"permalink":"/ii-areas/01-research/theory-laser-triggered-breakdown-and-switching/","title":"Theory - Laser-Triggered Breakdown and Switching","tags":["type/study","context/research","theme/physics/optical-breakdown","theme/physics/plasma-dynamics","theme/engineering/ltsg","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-02","updated":"2026-09-02","dg-note-properties":{"title":"Theory - Laser-Triggered Breakdown and Switching","aliases":["LTSG Theory","Laser-Triggered Breakdown Theory"],"tags":["type/study","context/research","theme/physics/optical-breakdown","theme/physics/plasma-dynamics","theme/engineering/ltsg","status/evergreen"],"date":"2026-09-02","last_updated":"2026-09-02"}}
---


# Theory - Laser-Triggered Breakdown and Switching

## 1. Multiscale picture

A laser-triggered spark gap is not governed by a single threshold. It is a sequence of coupled processes whose dominant mechanism depends on laser pulse duration, wavelength, deposited energy, electric field, electrode geometry, gas state and the delay between laser excitation and voltage application.

$$
\text{laser propagation}
\rightarrow \text{seed electrons and heating}
\rightarrow \text{electron loss or avalanche}
\rightarrow \text{space charge / streamer}
\rightarrow \text{leader or conductive channel}
\rightarrow \text{main current pulse}.
$$

The dissertation should therefore distinguish at least four timescales:

- optical excitation and ionisation: fs-ns;
- electron attachment, recombination and early heating: ns-tens of ns;
- hydrodynamic density-channel evolution and streamer formation: tens of ns-µs;
- leader/arc formation, circuit commutation and recovery: µs-ms depending on the circuit.

## 2. Laser field and focal intensity

For a spatially Gaussian beam and a temporally Gaussian pulse, a useful first estimate of peak intensity is

$$
I_0 \approx \frac{2E_L}{\pi w_0^2\tau_{eff}},
$$

where $E_L$ is measured pulse energy, $w_0$ is the $1/e^2$ intensity radius and $\tau_{eff}$ depends on the temporal-width convention. Every reported intensity must state the assumed spatial and temporal profile. A nominal pulse energy without measured waist and duration is insufficient.

For a diffraction-limited Gaussian beam,

$$
w_0 \approx \frac{M^2\lambda f}{\pi w_{in}}, \qquad
z_R=\frac{\pi w_0^2}{M^2\lambda},
$$

which makes the trade-off explicit: a smaller waist increases peak intensity but shortens the high-intensity interaction length. This motivates comparison of Gaussian focusing with axicons/Bessel-like beams or filamentation as an extension rather than assuming that the highest local intensity gives the best switch.

## 3. Seed ionisation: multiphoton, tunnelling and impurities

The minimum multiphoton order is approximately

$$K=\left\lceil\frac{U_i}{h\nu}\right\rceil,$$

and a simplified multiphoton source scales as

$$S_{MPI}=\sigma_K I^K N_0.$$

This strong nonlinearity explains why small fluctuations of intensity, focus or contamination can produce large changes in breakdown probability near threshold.

The Keldysh parameter provides a regime indicator,

$$
\gamma_K=\frac{\omega\sqrt{2m_eU_i}}{eE_L},
$$

with $\gamma_K\gg1$ associated with multiphoton-like ionisation and $\gamma_K\ll1$ with tunnelling-like ionisation. It is a guide, not a complete gas-breakdown model: nanosecond pulses, collisions, aerosols, impurities, excited states and avalanche growth can dominate the observed threshold.

Under comparable nanosecond conditions, Gao et al. reported wavelength-dependent air-breakdown thresholds from 1064 to 248 nm and a trend broadly consistent with a $\lambda^2$ scaling in their apparatus. Their measured range, $3.2\times10^{10}$-$5.1\times10^{11}$ W cm$^{-2}$, must not be imported as a universal threshold because focusing, pulse width, probability definition and particulate content change the result.

## 4. Electron balance and reduced electric field

A reduced electron-density model is

$$
\frac{\partial n_e}{\partial t}
=S_{photo}
+\alpha(E/N)\mu_e|E|n_e
-\eta(E/N)n_e
-\beta n_e^2
-\nabla\cdot\Gamma_e,
$$

with electron flux

$$
\Gamma_e=-\mu_e n_e\mathbf{E}-D_e\nabla n_e.
$$

The terms represent photoionisation/multiphoton seed production, impact-ionisation growth, attachment, recombination and transport losses. Coefficients should be parameterised by the reduced field $E/N$ rather than by $E$ alone whenever local-field assumptions are valid.

The electric field follows from

$$
\mathbf E=-\nabla\phi,\qquad
\nabla\cdot(\epsilon\nabla\phi)=-\rho,
$$

where the space charge $\rho$ becomes essential as an avalanche transitions into a streamer.

## 5. Townsend, Paschen and streamer inception

For a uniform field and a simplified Townsend picture, self-sustained breakdown occurs when

$$
\int_0^d \alpha_{eff}(E/N)\,dx
\ge \ln\left(1+\frac{1}{\gamma_{se}}\right),
$$

where $\alpha_{eff}=\alpha-\eta$ and $\gamma_{se}$ is the effective secondary-emission coefficient.

The familiar Paschen form,

$$
V_b=\frac{Bpd}{\ln(Apd)-\ln\!\left[\ln\left(1+1/\gamma_{se}\right)\right]},
$$

is useful as a baseline for approximately uniform fields and equilibrium gas conditions. It should not be treated as a predictive law for a strongly non-uniform, transient or laser-heated channel. The dissertation should experimentally determine $U_{50}$ for each geometry instead of substituting a handbook value.

When avalanche space charge appreciably distorts the background field, the Townsend description gives way to streamer dynamics. A frequently used Raether-Meek order-of-magnitude condition is

$$\int\alpha_{eff}\,dx\sim18-20,$$

but the actual transition depends on seed distribution, photoionisation, attachment and geometry. The quantity is therefore best used as a model diagnostic, not as a hard universal constant.

## 6. Statistical and formative delay

Breakdown delay can be separated conceptually as

$$t_d=t_s+t_f,$$

where $t_s$ is the statistical time required for an effective initiating electron or seed configuration to appear and $t_f$ is the formative time for avalanche, streamer and conductive-channel development.

Laser preionisation can reduce $t_s$ by supplying seed electrons at a known time and can reduce $t_f$ by placing those seeds along a favourable path. At high working coefficient, the formative process can be prompt and jitter very small. At lower working coefficient, attachment, diffusion, hydrodynamic evolution or leader propagation may dominate, producing long-tailed or multimodal delay distributions.

This is why the following must be reported separately:

- trigger probability within a declared time gate;
- median and quantiles of $t_d$;
- standard-deviation jitter for comparison with literature;
- robust jitter and censoring/failure fraction;
- the exact voltage and current marker definitions.

Luther et al. demonstrated that a small pressurised millimetre-scale air gap could reach a reported timing standard deviation of 37 ps under femtosecond triggering. Arantchouk et al. reported 0.2-0.4 ns jitter while switching >10 kA in an atmospheric-air centimetre-scale system. These results establish feasibility under their conditions; they are not performance guarantees for the present nanosecond-laser setup.

## 7. Hydrodynamic density channel

Ultrafast plasma electrons may recombine or attach within nanoseconds, while the deposited energy remains in the gas and launches an acoustic/shock response. A characteristic thermal diffusion time is

$$
\tau_{th}\sim\frac{r_0^2}{4D_{th}},
$$

where $r_0$ is the heated-channel radius and $D_{th}$ is thermal diffusivity. The resulting on-axis density depression increases local $E/N$ at fixed $E$, creating a longer-lived path favourable to breakdown.

Rosenthal et al. compared plasma-producing and nearly plasma-free femtosecond excitation and found that cumulative electrode-driven deepening of the laser-initiated density depression dominated the evolution toward breakdown. This motivates a key control experiment: separate the contribution of initial charge from the contribution of deposited heat/density reduction whenever the available laser system permits it.

## 8. Filamentation and extended channels

For ultrashort pulses above the critical power for self-focusing, the competition between Kerr self-focusing, diffraction and plasma defocusing can form filaments. A filament provides an extended, weakly ionised channel rather than a single compact focus.

Experimental anchors include:

- Forestier et al.: long-gap triggering/guiding, strong polarity dependence and up to 55% reduction of breakdown field for one tested positive-polarity configuration; the laser-voltage timing was critical.
- Arantchouk et al.: atmospheric-air switching above 10 kA with reported 0.2-0.4 ns jitter in an optimised operating region.
- Houard et al.: a field demonstration in which a high-repetition ultrashort laser guided an upward lightning leader over tens of metres near the Säntis tower.
- Dehne et al.: picosecond filament-guided electrical discharges at 1 kHz, relevant to the future high-repetition-rate branch.

Filament work is an extension because it requires a different laser regime and introduces nonlinear propagation, beam-safety and long-path diagnostics beyond the minimum package.

## 9. Circuit dynamics after breakdown

Once the gap becomes conductive, the observable current is governed jointly by plasma impedance and the external circuit. A minimal series RLC model is

$$
L\frac{di}{dt}+Ri+\frac{1}{C}\int i\,dt=0,
$$

with initial stored energy

$$W_0=\frac{1}{2}CU_0^2.$$

The measured delay and current rise time can be corrupted by stray inductance, return-path geometry, probe transfer functions and trigger-path delays. Plasma conclusions should therefore not be drawn from current rise time until the equivalent circuit and diagnostic response are documented.

Useful switching quantities include peak current, $di/dt$, voltage-collapse time, transferred charge $Q=\int i\,dt$, deposited energy $\int ui\,dt$, action integral $\int i^2dt$, and recovery voltage after the pulse.

## 10. Polarity, geometry and material

Polarity effects arise because positive and negative streamers/leaders have different inception and propagation behaviour. Field enhancement at tips, triple points, apertures and electrode edges can dominate the nominal average field. Electrode erosion then changes the field statistically over shot history.

Mandatory controls are therefore:

- map or simulate the electrostatic field before plasma modelling;
- document radius, surface finish, material and conditioning history;
- randomise or block by electrode age;
- repeat critical conditions after electrode replacement;
- do not pool polarities without first testing an interaction.

## 11. What the model should and should not claim

### Minimum credible model

- measured laser source term or parameterised initial channel;
- electron balance with attachment/recombination;
- electrostatic field and $E/N$;
- reduced gas-temperature/density evolution;
- a declared breakdown or streamer-inception criterion;
- calibration/validation split and sensitivity analysis.

### Later model extensions

- two-temperature plasma and detailed air chemistry;
- photoionisation and nonlocal electron energy distribution;
- streamer-to-leader transition;
- compressible gas dynamics and shock propagation;
- full external-circuit coupling;
- 3D channel branching and filament bundles.

## 12. Interpretation safeguards

> [!warning] Common category errors
> - A visible luminous channel is not automatically a high-conductivity channel.
> - A lower breakdown voltage does not prove that seed-electron density is the dominant mechanism.
> - A current waveform is not solely a plasma property; it includes the complete circuit.
> - A single successful shot is not a reliability result.
> - A measured spectrum is not automatically source emission; diagnostic transfer functions and chamber resonances matter.
> - Literature jitter values are not comparable unless delay markers, bandwidth and sample count are comparable.

## Related notes

- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]
- [[II Areas/01_Research/Laser-Triggered Spark Gaps (LTSG)\|Laser-Triggered Spark Gaps (LTSG)]]
- [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]]
- [[II Areas/01_Research/Research Extensions Roadmap\|Research Extensions Roadmap]]
- [[III Resources/Literature/LN - Cikhardt2026 - Electromagnetic and Particle Pulses\|LN - Cikhardt2026 - Electromagnetic and Particle Pulses]]
- [[III Resources/Literature/LN - Stepanova2026 - Ionising Radiation from Impulse Generators\|LN - Stepanova2026 - Ionising Radiation from Impulse Generators]]

## Anchor references

- B. M. Luther et al., *Femtosecond laser triggering of a sub-100 picosecond jitter high-voltage spark gap*, [doi:10.1063/1.1419036](https://doi.org/10.1063/1.1419036).
- L. Arantchouk et al., *A simple high-voltage high current spark gap with subnanosecond jitter triggered by femtosecond laser filamentation*, [doi:10.1063/1.4802927](https://doi.org/10.1063/1.4802927).
- B. Forestier et al., *Triggering, guiding and deviation of long air spark discharges with femtosecond laser filament*, [doi:10.1063/1.3690961](https://doi.org/10.1063/1.3690961).
- E. W. Rosenthal et al., *Dynamics of the femtosecond laser-triggered spark gap*, [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836).
- Z. Gao et al., *Investigation of laser induced air breakdown thresholds at 1064, 532, 355, 266 and 248 nm*, [doi:10.1117/12.2539007](https://doi.org/10.1117/12.2539007).
- A. Houard et al., *Laser-guided lightning*, [doi:10.1038/s41566-022-01139-z](https://doi.org/10.1038/s41566-022-01139-z).
- K. Dehne et al., *Picosecond laser filament-guided electrical discharges in air at 1 kHz repetition rate*, [doi:10.1364/OE.506547](https://doi.org/10.1364/OE.506547).

