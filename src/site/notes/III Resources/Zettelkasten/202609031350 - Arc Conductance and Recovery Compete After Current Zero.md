---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031350-arc-conductance-and-recovery-compete-after-current-zero/","title":"Arc Conductance and Recovery Compete After Current Zero","tags":["type/permanent","context/research","topic/grid/arc-quenching","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Arc Conductance and Recovery Compete After Current Zero","aliases":["Mayr arc model","Arc recovery and TRV"],"type":"concept","status":"evergreen","context":"research","claims":["EX-APP-01"],"topics":["topic/grid/arc-quenching","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/grid/arc-quenching","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Arc Conductance and Recovery Compete After Current Zero

## Core atomic concept

Successful interruption requires arc conductance to decay faster than the recovering circuit can re-establish current, while dielectric strength rises faster than transient recovery voltage. Triggering an auxiliary spark gap can initiate commutation, but it does not by itself prove current interruption.

## Mathematical formulation

The classical Mayr black-box model describes arc conductance $g$ near current zero:

$$
\frac{1}{g}\frac{dg}{dt}=\frac{1}{\tau_M}
\left(\frac{ui}{P_0}-1\right),
$$

where $\tau_M$ is a thermal time constant and $P_0$ effective cooling power. Parameters are fitted effective quantities, not universal gas constants.

After current zero, two inequalities summarize interruption margin:

$$
\left.\frac{dU_{TRV}}{dt}\right|_{0^+}
<\left.\frac{dU_{diel}}{dt}\right|_{0^+},
$$

and the post-arc current/energy must remain below the thermal reignition boundary. The complete circuit determines $U_{TRV}$; the contact/plasma recovery determines $U_{diel}$.

For a commutation capacitor and inductance, a first estimate of injected current is

$$i_c(t)\approx I_c\sin(\omega_ct),\qquad
\omega_c=\frac{1}{\sqrt{L_cC_c}},$$

which must create an adequate artificial current zero in DC or accelerate current zero in an auxiliary branch.

## Evidence needed before an application claim

- measured current zero and post-zero current;
- TRV waveform and rate of rise;
- dielectric recovery/restrike probability;
- complete commutation-circuit energy balance;
- repetitive lifetime and comparison with a defined incumbent switch.

## Connections

- **Up:** [[Arc Quenching Dynamics in Hybrid Breakers\|Arc Quenching Dynamics in Hybrid Breakers]]
- **Side:** [[Plasma and External Circuit Form One Dynamical System\|Plasma and External Circuit Form One Dynamical System]]
- **Down:** [[II Areas/01_Research/High-Voltage Arc Quenching & Protection\|High-Voltage Arc Quenching & Protection]] · [[Techno-Economic Valuation of Ultrafast Grid Protection\|Techno-Economic Valuation of Ultrafast Grid Protection]]

## Anchor sources

- P. Ramus et al., *Transient recovery voltage analysis for various current breaking mathematical models*, [doi:10.2478/aee-2015-0034](https://doi.org/10.2478/aee-2015-0034).
- Bento, Bento and Cardoso, *A Review on Hybrid Circuit Breakers for DC Applications*, [doi:10.1109/OJIES.2023.3320900](https://doi.org/10.1109/OJIES.2023.3320900).
- IEC 62271-100:2021+AMD1:2024, [official record](https://webstore.iec.ch/en/publication/62785).

