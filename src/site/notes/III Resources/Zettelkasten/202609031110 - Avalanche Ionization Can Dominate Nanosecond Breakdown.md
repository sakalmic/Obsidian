---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031110-avalanche-ionization-can-dominate-nanosecond-breakdown/","title":"Avalanche Ionization Can Dominate Nanosecond Breakdown","tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/breakdown"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Avalanche Ionization Can Dominate Nanosecond Breakdown","aliases":["Inverse Bremsstrahlung avalanche","Cascade ionization"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-03","CL-05"],"topics":["topic/ltsg/channel","topic/ltsg/breakdown"],"tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/breakdown"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Avalanche Ionization Can Dominate Nanosecond Breakdown

## Core atomic concept

Once seed electrons exist during a sufficiently long laser pulse, collisional energy absorption and impact ionisation can multiply them exponentially. Nanosecond optical breakdown can therefore depend more strongly on seed availability and avalanche gain than on a pure multiphoton threshold.

## Reduced mathematical picture

During the pulse,

$$
\frac{dn_e}{dt}=W_{PI}(I)(N-n_e)+\nu_{av}(I,p)n_e
-\nu_a n_e-\beta n_e^2.
$$

Ignoring depletion and nonlinear losses over a short interval gives

$$
n_e(t)\approx\left[n_{e0}+\int_0^tW_{PI}(t')N
e^{-\int_0^{t'}G(s)ds}\,dt'\right]e^{\int_0^tG(s)ds},
$$

where $G=\nu_{av}-\nu_a$. This exposes two experimentally confounded contributions: the number of seeds and the integrated gain.

The collision frequency affects energy absorption; pressure can increase collision opportunities but also changes focusing, attachment and heat transfer. A monotonic pressure trend is not guaranteed across regimes.

## Experimental consequences

- Threshold data must state pulse duration and probability criterion.
- Test whether adding controlled preionisation changes threshold more than changing peak intensity at constant pulse energy.
- Use shot-resolved pulse energy and channel proxies because exponential gain amplifies input variability.
- Avoid interpreting an empirical wavelength trend as proof of a single microscopic mechanism.

## Connections

- **Up:** [[Keldysh Parameter Separates Strong-Field Ionization Regimes\|Keldysh Parameter Separates Strong-Field Ionization Regimes]]
- **Side:** [[Electron Attachment Recombination and Diffusion Erase Plasma Memory\|Electron Attachment Recombination and Diffusion Erase Plasma Memory]] · [[Peak Laser Intensity Requires Spatial Temporal and Uncertainty Definitions\|Peak Laser Intensity Requires Spatial Temporal and Uncertainty Definitions]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-03 - Channel state versus pulse energy\|CL-03 - Channel state versus pulse energy]]

## Anchor sources

- Gao et al., *Investigation of laser induced air breakdown thresholds at 1064, 532, 355, 266 and 248 nm*, [doi:10.1117/12.2539007](https://doi.org/10.1117/12.2539007).
- Hagelaar and Pitchford, calculation of electron-impact rates, [doi:10.1088/0963-0252/14/4/011](https://doi.org/10.1088/0963-0252/14/4/011).

