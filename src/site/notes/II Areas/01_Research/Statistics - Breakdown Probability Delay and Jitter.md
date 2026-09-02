---
{"dg-publish":true,"permalink":"/ii-areas/01-research/statistics-breakdown-probability-delay-and-jitter/","title":"Statistics - Breakdown Probability, Delay and Jitter","tags":["type/study","context/research","theme/statistics","theme/laser-triggering","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-02","updated":"2026-09-02","dg-note-properties":{"title":"Statistics - Breakdown Probability, Delay and Jitter","aliases":["LTSG Statistics","Breakdown Statistics"],"tags":["type/study","context/research","theme/statistics","theme/laser-triggering","status/evergreen"],"date":"2026-09-02","last_updated":"2026-09-02"}}
---


# Statistics - Breakdown Probability, Delay and Jitter

## Why a statistical model is part of the physics

Gas breakdown is stochastic because seed production, avalanche development, streamer branching, surface state and environmental conditions fluctuate. Reporting one “breakdown voltage” or only successful delays discards this structure. The statistical plan must be frozen before the confirmatory campaign in [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]].

## 1. Binary trigger outcome

For $n$ shots with $x$ successes, the point estimate is

$$\hat p=x/n.$$

Always report an interval (Wilson or exact binomial), especially near 0% or 100%. Twenty shots are adequate only for screening: observing 20/20 does not prove perfect reliability. Confirmatory reliability claims require substantially more shots or a deliberately modest confidence bound.

### Regression model

A useful shot-level model is

$$
\operatorname{logit}P(Y_i=1)=
\beta_0+\beta_1k_i+\beta_2\log E_i+\beta_3z_i+\beta_4\lambda_i+
\beta_{12}k_i\log E_i+b_{day}+b_{electrode},
$$

where $k=U_{app}/U_{50}$, $z$ is focus position and $b$ terms represent run/day or electrode random effects. Replace pulse energy with measured peak intensity or deposited-energy proxy when justified.

Use predicted probability and uncertainty rather than declaring a sharp threshold from sparse data.

## 2. Estimating $U_{50}$

An up-and-down/staircase procedure reduces shots spent far from the transition. Analyse the resulting sequence with a method appropriate to adaptive sampling; do not treat adaptively selected voltages as a simple balanced grid without checking assumptions.

Alternative models include logistic/probit probability versus voltage and a shifted Weibull distribution,

$$
F(U)=1-\exp\left[-\left(\frac{U-U_0}{\eta}\right)^m\right],\qquad U>U_0.
$$

Here $\eta$ is a scale and $m$ describes dispersion. Model choice is empirical; compare fit and predictive behaviour rather than assuming Weibull form by convention.

Determine $U_{50}$ separately when geometry, polarity, gas state or electrode conditioning changes. Propagate its uncertainty into the working coefficient $k$.

## 3. Delay data and censoring

If no breakdown occurs within the observation gate, the delay is right-censored at the gate time. It is not missing data and should not be deleted.

Define the survival function

$$S(t)=P(T>t).$$

Use Kaplan-Meier curves for transparent condition comparisons and a survival/AFT model when estimating factor effects. If prompt and delayed modes coexist, show the full distribution and consider a mixture model only when identifiable.

Recommended summaries:

- median delay and 10th/90th percentiles;
- trigger probability within one or more physically meaningful gates;
- mean and standard deviation only when the distribution supports them;
- number of censored/invalid/saturated shots separately.

## 4. Jitter

For comparability with switch literature, report sample standard deviation

$$s_t=\sqrt{\frac{1}{n-1}\sum_i(t_i-\bar t)^2}.$$

Also report a robust estimate,

$$\sigma_{MAD}=1.4826\operatorname{median}|t_i-\operatorname{median}(t)|,$$

plus a bootstrap confidence interval. Large disagreement between $s_t$ and $\sigma_{MAD}$ is evidence of tails, multimodality or outliers that require a physical explanation.

The measured variance contains instrument and physical contributions. Under an independence approximation,

$$\sigma_{meas}^2\approx\sigma_{physical}^2+\sigma_{timing}^2+\sigma_{algorithm}^2.$$

Do not subtract these terms unless they were independently estimated and the assumptions are justified. Otherwise state an instrument-limited upper bound.

## 5. Screening versus confirmation

### Screening

- approximately 20 shots per condition;
- sequential/adaptive factor selection;
- broad range of $k$, laser level and focus position;
- effect ranking and operating-window selection;
- exploratory p-values are not final claims.

### Confirmation

- predeclared primary comparisons and markers;
- at least 100 valid/censored shots per key condition as an initial target;
- randomisation within safe blocks;
- independent repeat on another day and after electrode service;
- report effect size, uncertainty and raw counts.

The number 100 is a planning floor, not a universal power calculation. Update sample size after pilot variance/event-rate estimates and define the minimum scientifically meaningful effect.

## 6. Blocking, drift and repeated measurements

Potential blocks/confounders:

- day/session and laboratory atmosphere;
- electrode pair and shots since conditioning;
- laser warm-up and alignment state;
- charging sequence and generator temperature;
- operator and diagnostic configuration.

Randomise conditions within a stable block where safe. Include block variables in the model. Plot responses in chronological shot order to expose drift that a condition-wise box plot can hide.

## 7. Multiple responses

Declare a small number of primary endpoints, for example:

1. trigger probability within the primary gate;
2. median electrical delay;
3. standard-deviation/robust jitter at the selected operating point.

Voltage reduction, current rise, optical geometry, EMP and radiation can be secondary endpoints. Correct or hierarchically organise multiple confirmatory tests; otherwise label them exploratory.

## 8. Quality and exclusion codes

Every shot receives one mutually exclusive outcome and any applicable quality flags:

- successful triggered breakdown;
- no breakdown within gate (censored);
- premature/self-breakdown before laser;
- laser misfire/energy outside allowed range;
- HV charge outside tolerance;
- diagnostic saturation/dropout;
- interlock/operator abort.

Physics failures must not be relabelled as technical failures. Predeclare tolerances for laser and HV deviation.

## 9. Reproducibility package

- immutable raw data;
- tidy shot-level table;
- calibration and timing tables;
- protocol and analysis version;
- scripts generating every figure/table;
- software environment/version lock;
- read-only confirmatory dataset snapshot;
- machine-readable claim-to-result map linked to [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix\|Claim Ledger & Evidence Matrix]].

## Related notes

- [[I Projects/LTSG Core Research Package 2026-2028\|LTSG Core Research Package 2026-2028]]
- [[II Areas/01_Research/Diagnostics - Timing EMP and Radiation\|Diagnostics - Timing EMP and Radiation]]
- [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- [[III Resources/Data_and_Simulations/Experimental Measurements Archive\|Experimental Measurements Archive]]
- [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix\|Claim Ledger & Evidence Matrix]]

