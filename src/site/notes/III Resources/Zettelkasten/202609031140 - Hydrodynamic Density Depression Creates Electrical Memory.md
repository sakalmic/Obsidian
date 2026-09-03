---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031140-hydrodynamic-density-depression-creates-electrical-memory/","title":"Hydrodynamic Density Depression Creates Electrical Memory","tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Hydrodynamic Density Depression Creates Electrical Memory","aliases":["Low-density channel","Hydrodynamic plasma-channel memory"],"type":"concept","status":"evergreen","context":"research","claims":["CL-02","CL-03","CL-05","CL-06"],"topics":["topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/channel","topic/ltsg/timing","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Hydrodynamic Density Depression Creates Electrical Memory

## Core atomic concept

Laser energy deposited in air can outlive the free electrons as heat, pressure waves and a low-density channel. At fixed electric field, density reduction increases $E/N$ and can favour delayed breakdown after the luminous plasma has decayed.

## Mathematical formulation

The gas evolves through mass, momentum and energy conservation,

$$
\partial_t\rho+\nabla\cdot(\rho\mathbf u)=0,
$$

$$
\rho\frac{D\mathbf u}{Dt}=-\nabla p+\nabla\cdot\boldsymbol\tau,
$$

$$
\rho c_p\frac{DT}{Dt}=\nabla\cdot(k\nabla T)+Q_{laser}+\mathbf J\cdot\mathbf E-\cdots.
$$

After acoustic relaxation, a thermal-diffusion estimate is

$$\tau_{th}\sim\frac{r_c^2}{4D_{th}}.$$

The electrical coupling follows directly:

$$\frac{E}{N(t)}=\frac{E k_BT_g(t)}{p(t)}.$$

Thus a channel may become electrically more favourable even while $n_e$ falls.

## Experimental consequences

- Use interferometry or schlieren imaging if a quantitative density proxy is required; emission alone cannot establish density depression.
- Scan laser-to-HV delay over ns-to-ms ranges with logarithmic spacing.
- Include laser-only and voltage-only controls because electrode current can deepen the channel.
- Check whether the optimum delay follows electron lifetime, acoustic evolution or thermal diffusion.
- Record repetition rate and waiting time to detect cumulative heating.

## Connections

- **Up:** [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]]
- **Side:** [[Electron Attachment Recombination and Diffusion Erase Plasma Memory\|Electron Attachment Recombination and Diffusion Erase Plasma Memory]] · [[Reduced Electric Field Governs Electron Kinetics\|Reduced Electric Field Governs Electron Kinetics]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-06 - Reproducible optical and electrical stages\|CL-06 - Reproducible optical and electrical stages]] · [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]

## Anchor sources

- Rosenthal et al., *Dynamics of the femtosecond laser-triggered spark gap*, [doi:10.1364/OE.398836](https://doi.org/10.1364/OE.398836).
- Point et al., *Generation of long-lived underdense channels using femtosecond filamentation in air*, [doi:10.1088/0953-4075/48/9/094009](https://doi.org/10.1088/0953-4075/48/9/094009).
