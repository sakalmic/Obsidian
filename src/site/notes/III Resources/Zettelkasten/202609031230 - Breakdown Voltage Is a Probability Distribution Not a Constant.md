---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031230-breakdown-voltage-is-a-probability-distribution-not-a-constant/","title":"Breakdown Voltage Is a Probability Distribution Not a Constant","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/statistics"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Breakdown Voltage Is a Probability Distribution Not a Constant","aliases":["U50 breakdown voltage","Statistical breakdown voltage"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-04"],"topics":["topic/ltsg/breakdown","topic/ltsg/statistics"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/statistics"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Breakdown Voltage Is a Probability Distribution Not a Constant

## Core atomic concept

For a fixed configuration, breakdown voltage varies because seed availability, surface state, gas conditions and microscopic field enhancement vary. $U_{50}$ is the voltage at which the specified procedure predicts 50% breakdown probability; it is an estimand with uncertainty, not a deterministic material threshold.

## Probability models

A logistic response is

$$
P(B=1\mid U)=\operatorname{logit}^{-1}[\beta_0+\beta_1U],
\qquad U_{50}=-\beta_0/\beta_1.
$$

A three-parameter Weibull voltage model is

$$
F(U)=1-\exp\left[-\left(\frac{U-U_0}{\eta}\right)^m\right],\quad U>U_0.
$$

The working coefficient

$$k=U_{app}/U_{50}$$

inherits uncertainty from $U_{50}$; treating estimated $k$ as exact understates uncertainty in comparisons.

For $x$ successes in $n$ shots, $\hat p=x/n$ needs a Wilson or exact binomial interval. In particular, $n/n$ successes do not prove $p=1$.

## Experimental consequences

- Estimate $U_{50}$ separately for geometry, polarity and major conditioning state.
- Use a staircase/up-and-down design for efficiency, but analyse its adaptive sampling correctly.
- Compare logistic, probit and Weibull forms by predictive fit; do not select Weibull by tradition alone.
- Record chronological shot order to expose drift and conditioning.

## Connections

- **Up:** [[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]]
- **Side:** [[Hierarchical Shot-Level Models Separate Effects from Drift\|Hierarchical Shot-Level Models Separate Effects from Drift]] · [[Electrode Geometry and Polarity Shape the Local Field\|Electrode Geometry and Polarity Shape the Local Field]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-04 - Polarity and field geometry\|CL-04 - Polarity and field geometry]]

## Anchor sources

- NIST/SEMATECH, Wilson and exact binomial intervals, [Confidence intervals for a proportion](https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm).
- NIST/SEMATECH, [Weibull plot and distributional checking](https://www.itl.nist.gov/div898/handbook/eda/section3/edav.htm).
- IEC 60060-1:2025, high-voltage test techniques and statistical test procedures, [official record](https://webstore.iec.ch/en/publication/65088).

