---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031240-hierarchical-shot-level-models-separate-effects-from-drift/","title":"Hierarchical Shot-Level Models Separate Effects from Drift","tags":["type/permanent","context/research","topic/ltsg/statistics","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Hierarchical Shot-Level Models Separate Effects from Drift","aliases":["Mixed-effects breakdown model","Hierarchical shot model"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-02","CL-03","CL-04"],"topics":["topic/ltsg/statistics","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/statistics","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Hierarchical Shot-Level Models Separate Effects from Drift

## Core atomic concept

Shots from the same day, electrode pair or alignment state are correlated. Treating them as independent exaggerates effective sample size and can confuse drift with a laser effect. A hierarchical model separates within-block effects from between-block variability.

## Mathematical formulation

For trigger success,

$$
Y_{ij}\sim\operatorname{Bernoulli}(p_{ij}),
$$

$$
\operatorname{logit}p_{ij}=\beta_0+\beta_1k_{ij}
+\beta_2\log E_{ij}+\beta_3z_{ij}
+\beta_4k_{ij}\log E_{ij}+b_{day,j}+b_{electrode,j},
$$

with random effects such as

$$b_{day,j}\sim\mathcal N(0,\sigma_{day}^2).$$

For delays, the same grouping can enter a survival or accelerated-failure-time model. Random slopes may be needed when the laser effect itself changes across days, but their complexity must be supported by the number of independent blocks.

## Design consequences

- Randomise conditions within safe blocks; do not run every control first and every treatment last.
- Obtain independent days/electrodes, not only more shots within one session.
- Include shot number and shots-since-service to test conditioning trends.
- Report both population-average predictions and block-specific variability.
- Do not estimate many random-effect components from two or three blocks; use simpler fixed blocking or partial pooling with transparent priors.

## Connections

- **Up:** [[II Areas/01_Research/Statistics - Breakdown Probability Delay and Jitter\|Statistics - Breakdown Probability Delay and Jitter]]
- **Side:** [[Breakdown Voltage Is a Probability Distribution Not a Constant\|Breakdown Voltage Is a Probability Distribution Not a Constant]] · [[Electrode Conditioning Creates History Dependence\|Electrode Conditioning Creates History Dependence]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-03 - Channel state versus pulse energy\|CL-03 - Channel state versus pulse energy]]

## Anchor source

- Bates et al., *Fitting Linear Mixed-Effects Models Using lme4*, [doi:10.18637/jss.v067.i01](https://doi.org/10.18637/jss.v067.i01). The link function and outcome distribution must be adapted to the actual endpoint.

