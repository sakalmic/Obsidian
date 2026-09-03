---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031000-reduced-electric-field-governs-electron-kinetics/","title":"Reduced Electric Field Governs Electron Kinetics","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Reduced Electric Field Governs Electron Kinetics","aliases":["Reduced electric field","E over N similarity"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-04","CL-05"],"topics":["topic/ltsg/breakdown","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Reduced Electric Field Governs Electron Kinetics

## Core atomic concept

In a weakly ionised gas, the electron energy distribution and therefore ionisation, attachment, drift and diffusion are governed more directly by the **reduced electric field** $E/N$ than by electric field $E$ alone. $N=p/(k_B T_g)$ is the neutral number density. The Townsend unit is

$$1\ \mathrm{Td}=10^{-21}\ \mathrm{V\,m^2}.$$

Two experiments at different pressure or temperature are not dynamically comparable merely because they use the same voltage and gap. They are closer to electron-kinetic similarity when $E/N$, gas composition and reduced geometry are matched.

## Mathematical formulation

For an approximately uniform gap,

$$
\frac{E}{N}\approx \frac{U/d}{p/(k_B T_g)}
=\frac{U k_B T_g}{pd}.
$$

Transport and reaction coefficients are functions of the electron energy distribution $f(\varepsilon)$:

$$
\mu_e=\mu_e(E/N),\quad D_e=D_e(E/N),\quad
k_j=\int_0^\infty \sigma_j(\varepsilon)v(\varepsilon)f(\varepsilon)\,d\varepsilon.
$$

Townsend similarity predicts characteristic lengths $\ell\propto N^{-1}$, charge densities $n_e\propto N^2$ and comparable velocities at fixed $E/N$, but electrode boundaries, three-body reactions, gas heating and photoionisation introduce departures.

## Experimental consequences

- Log $p$, $T_g$ and humidity for every shot block; compute $N$ rather than using nominal laboratory pressure.
- Compare polarity and geometry at matched separately measured working coefficient **and** report the simulated local $E/N$ distribution.
- A density depression $N(t)<N_0$ raises $E/N$ at unchanged applied field, providing a mechanism for delayed laser assistance.
- Use swarm/Boltzmann data for coefficients; do not fit independent arbitrary values when a defensible cross-section set exists.

## Model validity boundary

$E/N$ parameterisation assumes a local-field or local-mean-energy closure. It becomes questionable when the electron energy relaxation length is not small relative to the field-gradient scale, particularly near a streamer head or a sharply enhanced electrode tip.

## Connections

- **Up:** [[II Areas/01_Research/Theory - Laser-Triggered Breakdown and Switching\|Theory - Laser-Triggered Breakdown and Switching]]
- **Side:** [[Electron Energy Distribution Determines Transport Coefficients\|Electron Energy Distribution Determines Transport Coefficients]] · [[Hydrodynamic Density Depression Creates Electrical Memory\|Hydrodynamic Density Depression Creates Electrical Memory]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]] · [[II Areas/02_Thesis/Claims/CL-04 - Polarity and field geometry\|CL-04 - Polarity and field geometry]]

## Anchor sources

- Hagelaar and Pitchford, *Solving the Boltzmann equation to obtain electron transport coefficients and rate coefficients for fluid models*, [doi:10.1088/0963-0252/14/4/011](https://doi.org/10.1088/0963-0252/14/4/011).
- Ebert et al., *Review of recent results on streamer discharges and discussion of their relevance for sprites and lightning*, [doi:10.1029/2009JA014867](https://doi.org/10.1029/2009JA014867).

