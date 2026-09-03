---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031340-predictive-validation-must-be-separated-from-model-calibration/","title":"Predictive Validation Must Be Separated from Model Calibration","tags":["type/permanent","context/research","topic/ltsg/model","topic/ltsg/statistics"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Predictive Validation Must Be Separated from Model Calibration","aliases":["Calibration-validation separation","Held-out physical model validation"],"type":"concept","status":"evergreen","context":"research","claims":["CL-03","CL-05"],"topics":["topic/ltsg/model","topic/ltsg/statistics"],"tags":["type/permanent","context/research","topic/ltsg/model","topic/ltsg/statistics"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Predictive Validation Must Be Separated from Model Calibration

## Core atomic concept

A model calibrated and judged on the same shots measures fit, not predictive validity. CL-03 and CL-05 require an untouched condition, later session or predeclared validation partition that is not used for feature selection, parameter tuning or threshold choice.

## Mathematical criteria

For binary trigger predictions $p_i$, the Brier score is

$$BS=\frac1n\sum_i(p_i-y_i)^2.$$

Calibration asks whether observed frequency matches predicted probability; discrimination asks whether successes receive higher scores. Both are needed. For delay models, use held-out log likelihood, time-dependent calibration and prediction-interval coverage rather than only $R^2$.

Parameter sensitivity can be screened through normalized local derivatives

$$S_j=\frac{x_j}{y}\frac{\partial y}{\partial x_j},$$

and global variance decomposition when interactions/nonlinearity matter. Non-identifiable parameters should be fixed from independent evidence, reparameterised or reported as a set, not hidden behind one best fit.

## Validation hierarchy

1. held-out shots randomly sampled within a session — weakest against drift;
2. held-out operating conditions — tests interpolation/extrapolation;
3. later independent day/electrode state — tests reproducibility;
4. different geometry or laboratory — tests transferability.

## Workflow consequences

- Freeze outcome, metric, tolerance and validation data before opening results.
- Compare the physics-informed model against a simpler empirical baseline.
- Report calibration curves, residual structure and failure regions.
- Preserve a useful negative result: a bounded failure identifies missing physics or insufficient observability.

## Connections

- **Up:** [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]
- **Side:** [[Hierarchical Shot-Level Models Separate Effects from Drift\|Hierarchical Shot-Level Models Separate Effects from Drift]] · [[Measurement Uncertainty Must Propagate Through Derived Quantities\|Measurement Uncertainty Must Propagate Through Derived Quantities]]
- **Down:** [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix\|Claim Ledger & Evidence Matrix]]

## Anchor sources

- Brier, *Verification of forecasts expressed in terms of probability*, [doi:10.1175/1520-0493(1950)078%3C0001:VOFEIT%3E2.0.CO;2](https://doi.org/10.1175/1520-0493(1950)078%3C0001:VOFEIT%3E2.0.CO;2).
- JCGM 101:2008, propagation of distributions by Monte Carlo, [doi:10.59161/JCGM101-2008](https://doi.org/10.59161/JCGM101-2008).
