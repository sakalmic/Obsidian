---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031220-censored-breakdown-delays-require-survival-analysis/","title":"Censored Breakdown Delays Require Survival Analysis","tags":["type/permanent","context/research","topic/ltsg/statistics","topic/ltsg/timing"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Censored Breakdown Delays Require Survival Analysis","aliases":["Survival analysis of breakdown delay","Right-censored trigger delay"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-02"],"topics":["topic/ltsg/statistics","topic/ltsg/timing"],"tags":["type/permanent","context/research","topic/ltsg/statistics","topic/ltsg/timing"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Censored Breakdown Delays Require Survival Analysis

## Core atomic concept

A shot with no breakdown before the end of the observation gate contains information: $T>t_{gate}$. Deleting it conditions the analysis on success and biases delay downward, especially in weak-trigger conditions.

## Mathematical formulation

Define

$$S(t)=P(T>t),\qquad F(t)=1-S(t),\qquad h(t)=\frac{f(t)}{S(t)}.$$

For observations $(t_i,\delta_i)$ with event indicator $\delta_i$, a parametric likelihood is

$$
L(\theta)=\prod_i f(t_i\mid\theta)^{\delta_i}
S(t_i\mid\theta)^{1-\delta_i}.
$$

The trigger probability within a declared gate is simply

$$P(T\le t_{gate})=1-S(t_{gate}).$$

This unifies “success probability” and “delay” rather than treating them as unrelated outcomes.

## Model choices

- Kaplan-Meier: transparent nonparametric comparison.
- Cox proportional hazards: covariate effect without specifying baseline hazard, but requires proportional-hazard checking.
- Accelerated failure-time model: covariates stretch or contract the time scale; often physically interpretable.
- Mixture/cure model: only with enough data to distinguish a non-triggerable fraction from a long tail.

## Experimental consequences

- Predeclare the gate and ensure it is physically meaningful.
- Store censoring separately from technical invalidity.
- Report survival curves, gate-specific probability and quantiles with intervals.
- If hazards cross, a single hazard ratio is not an adequate summary.

## Connections

- **Up:** [[Statistical and Formative Time Lags Are Different Processes\|Statistical and Formative Time Lags Are Different Processes]]
- **Side:** [[Breakdown Voltage Is a Probability Distribution Not a Constant\|Breakdown Voltage Is a Probability Distribution Not a Constant]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]]

## Anchor source

- Cox, *Regression Models and Life-Tables*, [doi:10.1111/j.2517-6161.1972.tb00899.x](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).

