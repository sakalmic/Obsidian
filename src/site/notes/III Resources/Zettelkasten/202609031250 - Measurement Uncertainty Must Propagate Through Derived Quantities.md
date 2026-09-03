---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031250-measurement-uncertainty-must-propagate-through-derived-quantities/","title":"Measurement Uncertainty Must Propagate Through Derived Quantities","tags":["type/permanent","context/research","topic/ltsg/metrology","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Measurement Uncertainty Must Propagate Through Derived Quantities","aliases":["Measurement uncertainty propagation","GUM uncertainty model"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-02","CL-03","CL-05","CL-06"],"topics":["topic/ltsg/metrology","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/metrology","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Measurement Uncertainty Must Propagate Through Derived Quantities

## Core atomic concept

Quantities such as $I_0$, $E/N$, $k$ and deposited energy are outputs of a measurement model. Their uncertainty depends on all inputs and their covariance; quoting only instrument accuracy is incomplete.

## Mathematical formulation

For $y=f(\mathbf x)$ and covariance matrix $\mathbf\Sigma_x$, first-order propagation is

$$u_c^2(y)=\mathbf J\mathbf\Sigma_x\mathbf J^T,
\qquad J_i=\frac{\partial f}{\partial x_i}.$$

For correlated inputs,

$$
u_c^2(y)=\sum_i c_i^2u^2(x_i)+2\sum_{i<j}c_ic_j u(x_i,x_j).
$$

Nonlinear, bounded or non-Gaussian models should use Monte Carlo propagation: sample inputs from justified distributions, evaluate $f$ for every sample and report the output distribution.

## Application examples

- $I_0\propto E_Lw_0^{-2}\tau^{-1}$: waist uncertainty is amplified.
- $E/N=Ek_BT/p$: pressure and temperature covariance can matter within a session.
- $k=U_{app}/U_{50}$: baseline-estimation uncertainty propagates into all treatment comparisons.
- $W=\int u(t)i(t)dt$: timing alignment and probe transfer functions are part of the uncertainty model.

## Workflow consequences

- Maintain an uncertainty budget with source, type, distribution, sensitivity coefficient and correlation.
- Distinguish repeatability, calibration uncertainty, drift and model-form uncertainty.
- Propagate uncertainty into effect estimates and predictive intervals, not only into raw measurements.
- State when uncertainty is bounded but not identified.

## Connections

- **Up:** [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- **Side:** [[Peak Laser Intensity Requires Spatial Temporal and Uncertainty Definitions\|Peak Laser Intensity Requires Spatial Temporal and Uncertainty Definitions]] · [[Timing Jitter Must Be De-Embedded from the Measurement Chain\|Timing Jitter Must Be De-Embedded from the Measurement Chain]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]] · [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]]

## Anchor sources

- JCGM 100:2008, [doi:10.59161/JCGM100-2008E](https://doi.org/10.59161/JCGM100-2008E).
- JCGM 101:2008, Monte Carlo propagation, [doi:10.59161/JCGM101-2008](https://doi.org/10.59161/JCGM101-2008).

