---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031200-competing-timescales-determine-the-triggering-regime/","title":"Competing Timescales Determine the Triggering Regime","tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Competing Timescales Determine the Triggering Regime","aliases":["Breakdown timescale competition","Regime map for laser triggering"],"type":"concept","status":"evergreen","context":"research","claims":["CL-02","CL-05","CL-06"],"topics":["topic/ltsg/timing","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/timing","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Competing Timescales Determine the Triggering Regime

## Core atomic concept

Laser-triggered breakdown is governed by ratios of characteristic times, not by one absolute “channel lifetime”. Different observables can be dominated by electron loss, avalanche growth, streamer transit, acoustic expansion, thermal diffusion or circuit response.

## Timescale map

Useful estimates include

$$
\tau_{ion}\sim[\alpha(E/N)\mu_eE]^{-1},\quad
\tau_{att}\sim\nu_a^{-1},\quad
\tau_D\sim\frac{r_c^2}{4D_e},
$$

$$
\tau_{str}\sim\frac{d}{v_{str}},\quad
\tau_{ac}\sim\frac{r_c}{c_s},\quad
\tau_{th}\sim\frac{r_c^2}{4D_{th}},\quad
\tau_{RLC}\sim\sqrt{LC}.
$$

Dimensionless ratios expose regimes, for example

$$Da_{ion/att}=\frac{\tau_{att}}{\tau_{ion}},\qquad
\Pi_D=\frac{\tau_{HV}}{\tau_D},\qquad
\Pi_{th}=\frac{\tau_{HV}}{\tau_{th}}.$$

$Da_{ion/att}>1$ suggests net electron multiplication can outrun attachment; $\Pi_D$ and $\Pi_{th}$ identify whether the applied HV samples electron or thermal memory.

## Experimental consequences

- Choose delay-scan points on logarithmic spacing around estimated crossovers, then refine adaptively.
- Plot outcomes against nondimensional ratios as well as raw delay.
- A multimodal delay distribution can indicate regime mixing; it should not be compressed into one mean.
- Use global sensitivity analysis to identify which uncertain timescale controls model output before adding chemistry.

## Connections

- **Up:** [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- **Side:** [[Electron Attachment Recombination and Diffusion Erase Plasma Memory\|Electron Attachment Recombination and Diffusion Erase Plasma Memory]] · [[Hydrodynamic Density Depression Creates Electrical Memory\|Hydrodynamic Density Depression Creates Electrical Memory]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]] · [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]]

## Anchor sources

- Rosenthal et al., multiscale hydrodynamics of the triggered gap, [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836).
- Morrow and Lowke, coupled streamer timescales, [doi:10.1088/0022-3727/30/4/017](https://doi.org/10.1088/0022-3727/30/4/017).

