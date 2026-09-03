---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031040-photoionization-enables-positive-streamer-propagation-in-air/","title":"Photoionization Enables Positive Streamer Propagation in Air","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Photoionization Enables Positive Streamer Propagation in Air","aliases":["Streamer photoionization","Nonlocal ionization source"],"type":"concept","status":"evergreen","context":"research","claims":["CL-04","CL-05"],"topics":["topic/ltsg/breakdown","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Photoionization Enables Positive Streamer Propagation in Air

## Core atomic concept

Positive streamers propagate against electron drift and therefore require electrons ahead of the ionisation front. In air, ultraviolet emission from excited nitrogen and absorption by oxygen provide an important nonlocal source. This makes oxygen fraction, pressure and preionisation history physical control variables, not minor metadata.

## Mathematical formulation

The electron source is decomposed as

$$S_e=S_{impact}+S_{ph}+S_{det}-S_{att}-S_{rec}.$$

A generic nonlocal photoionisation term is

$$
S_{ph}(\mathbf r)=\int_V I(\mathbf r')
\frac{f(|\mathbf r-\mathbf r'|)}{4\pi|\mathbf r-\mathbf r'|^2}\,dV',
$$

where $I$ is an emitting-state source and $f$ is an absorption kernel. Helmholtz approximations replace this costly integral by several screened-Poisson equations; the approximation and absorption lengths must be documented.

## Consequences for the experiment

- Positive and negative polarity are different physical regimes; do not pool them before testing an interaction.
- Humidity and oxygen concentration affect attachment and photon transport, so “air” must be operationally described.
- Repetition rate can leave residual ions/electrons that compete with photoionisation; randomised delays and adequate clearing time reduce memory confounding.
- A model that omits $S_{ph}$ may still fit one geometry by compensating other parameters, but its extrapolation to polarity or pressure can fail.

## Connections

- **Up:** [[Space Charge Marks the Avalanche to Streamer Transition\|Space Charge Marks the Avalanche to Streamer Transition]]
- **Side:** [[Electron Attachment Recombination and Diffusion Erase Plasma Memory\|Electron Attachment Recombination and Diffusion Erase Plasma Memory]] · [[Electrode Geometry and Polarity Shape the Local Field\|Electrode Geometry and Polarity Shape the Local Field]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-04 - Polarity and field geometry\|CL-04 - Polarity and field geometry]] · [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]

## Anchor sources

- Morrow and Lowke, air streamer model including photoionisation, [doi:10.1088/0022-3727/30/4/017](https://doi.org/10.1088/0022-3727/30/4/017).
- Pancheshnyi, *Role of electronegative gas admixtures in streamer start, propagation and branching phenomena*, [doi:10.1088/0963-0252/14/4/002](https://doi.org/10.1088/0963-0252/14/4/002).

