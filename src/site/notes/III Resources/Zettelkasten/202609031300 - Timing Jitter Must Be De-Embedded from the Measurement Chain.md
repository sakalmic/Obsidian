---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031300-timing-jitter-must-be-de-embedded-from-the-measurement-chain/","title":"Timing Jitter Must Be De-Embedded from the Measurement Chain","tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/metrology"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Timing Jitter Must Be De-Embedded from the Measurement Chain","aliases":["Timing de-embedding","Instrument-limited jitter"],"type":"concept","status":"evergreen","context":"research","claims":["CL-02","CL-06"],"topics":["topic/ltsg/timing","topic/ltsg/metrology"],"tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/metrology"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Timing Jitter Must Be De-Embedded from the Measurement Chain

## Core atomic concept

Measured delay variability combines physical switching variability with timebase, trigger, sensor, cable and event-picking errors. A sub-nanosecond physical claim is credible only if the complete chain is independently characterised at substantially better resolution.

## Measurement model

$$
t_{meas}=t_{phys}+\Delta t_{sensor}+\Delta t_{cable}
+\Delta t_{scope}+\Delta t_{algorithm}.
$$

If zero-mean contributions are independent,

$$
\sigma_{meas}^2=\sigma_{phys}^2+\sum_j\sigma_j^2.
$$

This variance subtraction is invalid when errors are correlated, nonstationary or estimated from the same waveform. Use covariance or Monte Carlo propagation when the independence approximation fails.

Finite rise time couples voltage noise to timing error. For a threshold crossing,

$$
\sigma_t\approx\frac{\sigma_V}{|dV/dt|_{cross}}.
$$

Bandwidth limits the slope and can therefore increase apparent jitter. Threshold sensitivity and interpolation method belong in the analysis specification.

## Experimental consequences

- Inject a common fast calibration event into channels where electrically safe.
- Measure cable delays, probe impulse responses and oscilloscope timebase behaviour.
- Freeze $t_0$ and breakdown-marker algorithms before confirmatory analysis.
- Compare multiple reasonable markers; instability is a measurement limitation, not physical jitter.
- Report an instrument-limited upper bound if de-embedding is underdetermined.

## Connections

- **Up:** [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]
- **Side:** [[Measurement Uncertainty Must Propagate Through Derived Quantities\|Measurement Uncertainty Must Propagate Through Derived Quantities]] · [[Statistical and Formative Time Lags Are Different Processes\|Statistical and Formative Time Lags Are Different Processes]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]] · [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]]

## Anchor sources

- NIST, [Statistical Methods in Waveform Metrology](https://www.nist.gov/programs-projects/statistical-methods-waveform-metrology).
- Hale et al., traceable oscilloscope timing correction and uncertainty, *Metrologia* 55 (2018), [NIST manuscript](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=925591).
- JCGM 100:2008, [doi:10.59161/JCGM100-2008E](https://doi.org/10.59161/JCGM100-2008E).
