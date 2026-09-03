---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031030-space-charge-marks-the-avalanche-to-streamer-transition/","title":"Space Charge Marks the Avalanche to Streamer Transition","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/channel"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Space Charge Marks the Avalanche to Streamer Transition","aliases":["Avalanche-streamer transition","Raether-Meek criterion"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-04","CL-05","CL-06"],"topics":["topic/ltsg/breakdown","topic/ltsg/channel"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/channel"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Space Charge Marks the Avalanche to Streamer Transition

## Core atomic concept

A streamer begins when the avalanche's own space-charge field is no longer a small perturbation. The ionisation front then propagates through local field enhancement and nonlocal seed production; it is qualitatively different from multiplying electrons in a prescribed field.

## Mathematical formulation

The field must be solved self-consistently:

$$
\nabla\cdot(\epsilon\mathbf E)=\rho=e(n_+-n_e-n_-),
\qquad \mathbf E=-\nabla\phi.
$$

An order-of-magnitude Raether-Meek diagnostic is

$$
K=\int_0^{x_h}\alpha_{\mathrm{eff}}(E/N)\,ds\approx18\text{--}20,
$$

equivalent to roughly $10^8$ avalanche multiplication under idealised conditions. $K$ is not a material constant: geometry, diffusion, background ionisation, attachment and photoionisation change inception.

The fluid continuity system is

$$
\partial_t n_s+\nabla\cdot\boldsymbol\Gamma_s=S_s,
$$

coupled to Poisson's equation. The streamer head has the strongest field and steepest gradients, precisely where local-field and continuum approximations require validation.

## Observable consequences

- ICCD imaging should seek a propagating ionisation front, not merely integrated luminosity.
- Current onset, optical onset and voltage collapse need not coincide; their ordering is evidence for CL-06.
- A reduced model may use $K$ as an inception score but must calibrate its decision threshold on one dataset and validate it elsewhere.
- Streamer diameter and velocity are polarity- and voltage-dependent; spatial resolution must be reported.

## Connections

- **Up:** [[Townsend Avalanche Is Exponential but Not Yet a Streamer\|Townsend Avalanche Is Exponential but Not Yet a Streamer]]
- **Side:** [[Photoionization Enables Positive Streamer Propagation in Air\|Photoionization Enables Positive Streamer Propagation in Air]] · [[Electrode Geometry and Polarity Shape the Local Field\|Electrode Geometry and Polarity Shape the Local Field]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]] · [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]

## Anchor sources

- Morrow and Lowke, *Streamer propagation in air*, [doi:10.1088/0022-3727/30/4/017](https://doi.org/10.1088/0022-3727/30/4/017).
- Ebert et al., streamer similarity and morphology review, [doi:10.1029/2009JA014867](https://doi.org/10.1029/2009JA014867).
- Pancheshnyi, Nudnova and Starikovskii, pressure-scaled streamer experiment/simulation, [doi:10.1103/PhysRevE.71.016407](https://doi.org/10.1103/PhysRevE.71.016407).

