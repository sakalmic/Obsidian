---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031010-electron-energy-distribution-determines-transport-coefficients/","title":"Electron Energy Distribution Determines Transport Coefficients","tags":["type/permanent","context/research","topic/ltsg/model","topic/ltsg/breakdown"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Electron Energy Distribution Determines Transport Coefficients","aliases":["Electron energy distribution function","EEDF and rate coefficients"],"type":"concept","status":"evergreen","context":"research","claims":["CL-05"],"topics":["topic/ltsg/model","topic/ltsg/breakdown"],"tags":["type/permanent","context/research","topic/ltsg/model","topic/ltsg/breakdown"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Electron Energy Distribution Determines Transport Coefficients

## Core atomic concept

Electron-impact rates in air cannot in general be inferred from a gas temperature. The plasma is strongly non-equilibrium: light electrons gain field energy faster than heavy species equilibrate, so the electron energy distribution function (EEDF) determines reaction rates.

## Mathematical formulation

The kinetic description is the Boltzmann equation,

$$
\frac{\partial f}{\partial t}+\mathbf v\cdot\nabla_{\mathbf x}f
-\frac{e\mathbf E}{m_e}\cdot\nabla_{\mathbf v}f=C[f],
$$

where $C[f]$ collects elastic and inelastic collisions. A reaction coefficient for cross-section $\sigma_j$ is

$$
k_j=\langle \sigma_jv\rangle
=\int_0^\infty \sigma_j(\varepsilon)v(\varepsilon)f_\varepsilon(\varepsilon)\,d\varepsilon.
$$

The two-term approximation used by BOLSIG+ is appropriate for many swarm calculations but is not automatically valid in highly anisotropic, rapidly changing streamer-head fields. A fluid model then closes particle flux as

$$\boldsymbol\Gamma_e=-\mu_e n_e\mathbf E-D_e\nabla n_e,$$

with coefficients derived consistently from one cross-section set.

## Experimental and modelling consequences

- Store the gas mixture, cross-section database version, solver settings and coefficient tables as model provenance.
- Perform sensitivity analysis across plausible air chemistry/cross-section sets; coefficient uncertainty propagates to inferred channel lifetime.
- Do not impose a Maxwellian EEDF without checking it. A quoted “electron temperature” may be only a convenient energy moment.
- Separate fitted effective coefficients from independently calculated coefficients in the parameter table for CL-05.

## Connections

- **Up:** [[Reduced Electric Field Governs Electron Kinetics\|Reduced Electric Field Governs Electron Kinetics]]
- **Side:** [[Electron Attachment Recombination and Diffusion Erase Plasma Memory\|Electron Attachment Recombination and Diffusion Erase Plasma Memory]] · [[Townsend Avalanche Is Exponential but Not Yet a Streamer\|Townsend Avalanche Is Exponential but Not Yet a Streamer]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]] · [[I Projects/COMSOL Plasma Simulation Model\|COMSOL Plasma Simulation Model]]

## Anchor source

- Hagelaar and Pitchford, *Solving the Boltzmann equation to obtain electron transport coefficients and rate coefficients for fluid models*, [doi:10.1088/0963-0252/14/4/011](https://doi.org/10.1088/0963-0252/14/4/011).

