---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031050-electron-attachment-recombination-and-diffusion-erase-plasma-memory/","title":"Electron Attachment Recombination and Diffusion Erase Plasma Memory","tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Electron Attachment Recombination and Diffusion Erase Plasma Memory","aliases":["Plasma channel decay","Electron loss timescales"],"type":"concept","status":"evergreen","context":"research","claims":["CL-02","CL-05","CL-06"],"topics":["topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Electron Attachment Recombination and Diffusion Erase Plasma Memory

## Core atomic concept

The electrically useful lifetime of a laser-created plasma channel is set by competing loss and source processes, not by the duration of visible emission. In air, attachment to oxygen can remove free electrons rapidly while negative ions, heat and density depression preserve different forms of memory.

## Reduced balance model

After the laser source ends, a spatially averaged first model is

$$
\frac{dn_e}{dt}=-(\nu_a+\nu_w)n_e-\beta_{ei}n_en_+-\beta_{eff}n_e^2+S_{det},
$$

where $\nu_a$ is attachment, $\nu_w$ represents diffusive/wall loss, $\beta_{ei}$ is an electron-ion recombination coefficient, $\beta_{eff}n_e^2$ is an optional effective quasi-neutral closure for unresolved recombination pathways, and $S_{det}$ is field- or collision-driven detachment. For diffusion across channel radius $r_c$,

$$\tau_D\sim\frac{r_c^2}{4D_e}.$$

If one quadratic recombination term dominates,

$$n_e(t)=\frac{n_{e0}}{1+\beta n_{e0}t},$$

which is not exponential. If first-order attachment dominates, $n_e\propto e^{-t/\tau_a}$. A measured multi-slope decay is therefore physically plausible.

## Experimental consequences

- Scan laser-to-HV delay logarithmically across expected electron, ion and hydrodynamic timescales.
- Interpret conductivity, interferometry and emission as different observables with different kernels.
- Check repetition-rate dependence; residual ions, metastables and heated gas can make shots non-independent.
- Fit competing decay models only over their justified intervals and propagate uncertainty into predicted trigger probability.

## Connections

- **Up:** [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]]
- **Side:** [[Hydrodynamic Density Depression Creates Electrical Memory\|Hydrodynamic Density Depression Creates Electrical Memory]] · [[Competing Timescales Determine the Triggering Regime\|Competing Timescales Determine the Triggering Regime]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]] · [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]]

## Anchor sources

- Hagelaar and Pitchford, electron rate coefficients from the Boltzmann equation, [doi:10.1088/0963-0252/14/4/011](https://doi.org/10.1088/0963-0252/14/4/011).
- Rosenthal et al., separation of plasma and hydrodynamic contributions, [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836).
