---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031210-statistical-and-formative-time-lags-are-different-processes/","title":"Statistical and Formative Time Lags Are Different Processes","tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/statistics"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Statistical and Formative Time Lags Are Different Processes","aliases":["Statistical time lag","Formative time lag"],"type":"concept","status":"evergreen","context":"research","claims":["CL-02","CL-06"],"topics":["topic/ltsg/timing","topic/ltsg/statistics"],"tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/statistics"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Statistical and Formative Time Lags Are Different Processes

## Core atomic concept

Breakdown delay can be conceptually decomposed into a random wait for an effective initiating seed and a subsequent growth/propagation time:

$$t_d=t_s+t_f.$$

Laser preionisation can reduce $t_s$, while a spatially favourable ionised or low-density path can reduce $t_f$. The two mechanisms predict different delay-distribution shapes and different responses to laser-to-HV delay.

## Stochastic formulation

If effective seeds arrive as a Poisson process with rate $\lambda_s$, then

$$P(t_s>t)=e^{-\lambda_st},\qquad h_s(t)=\lambda_s.$$

Real data may have time-varying hazard because attachment and density evolve:

$$
h(t\mid\mathbf x)=h_0(t)\exp(\mathbf x^T\boldsymbol\beta).
$$

The formative component can be narrow near high overvoltage but broaden when avalanche, streamer or leader propagation becomes marginal. A mixture of prompt and delayed paths gives multimodality and violates a single-Gaussian jitter model.

## Experimental consequences

- Retain no-breakdown shots as right-censored at the observation-gate limit.
- Plot Kaplan-Meier survival and estimated hazard by condition.
- Test whether laser energy changes the early hazard, the later propagation time, or both.
- Do not claim a microscopic separation of $t_s$ and $t_f$ from one electrical marker alone; use synchronized optical evidence.

## Connections

- **Up:** [[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]]
- **Side:** [[Competing Timescales Determine the Triggering Regime\|Competing Timescales Determine the Triggering Regime]] · [[Censored Breakdown Delays Require Survival Analysis\|Censored Breakdown Delays Require Survival Analysis]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]] · [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]]

## Anchor sources

- Cox, *Regression Models and Life-Tables*, [doi:10.1111/j.2517-6161.1972.tb00899.x](https://doi.org/10.1111/j.2517-6161.1972.tb00899.x).
- Luther et al., femtosecond-triggered spark-gap timing, [doi:10.1063/1.1419036](https://doi.org/10.1063/1.1419036).

