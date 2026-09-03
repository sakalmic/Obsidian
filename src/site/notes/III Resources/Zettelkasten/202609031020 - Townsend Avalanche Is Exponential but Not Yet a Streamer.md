---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031020-townsend-avalanche-is-exponential-but-not-yet-a-streamer/","title":"Townsend Avalanche Is Exponential but Not Yet a Streamer","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Townsend Avalanche Is Exponential but Not Yet a Streamer","aliases":["Townsend avalanche","Effective ionisation integral"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-05"],"topics":["topic/ltsg/breakdown","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Townsend Avalanche Is Exponential but Not Yet a Streamer

## Core atomic concept

Before space charge strongly modifies the applied field, an electron avalanche grows approximately exponentially along its drift path. This linear stage explains strong sensitivity to $E/N$ and seed location, but it ceases to be valid at streamer inception.

## Mathematical formulation

For effective ionisation coefficient $\alpha_{\mathrm{eff}}=\alpha-\eta$,

$$
n_e(x)=n_{e0}\exp\!\left(\int_0^x\alpha_{\mathrm{eff}}(E/N)\,ds\right).
$$

A simplified self-sustained Townsend condition is

$$
\gamma_{se}\left[\exp\!\left(\int_0^d\alpha_{\mathrm{eff}}\,dx\right)-1\right]\ge1,
$$

where $\gamma_{se}$ is an effective secondary-emission coefficient. In a uniform equilibrium gap and with an empirical $\alpha/p=A\exp[-Bp/E]$, this produces the Paschen form. The derivation does **not** cover a transient laser-heated channel, non-uniform field, distributed preionisation or streamer space charge.

The avalanche multiplication factor

$$M=\exp\left(\int\alpha_{\mathrm{eff}}ds\right)$$

is therefore a useful reduced-model diagnostic, not a universal breakdown switch.

## Experimental consequences

- Model the actual field line and seed distribution rather than replacing the gap by $E=U/d$ when geometry is non-uniform.
- Determine $U_{50}$ experimentally for each geometry, polarity and conditioning state.
- A laser can improve triggering either by raising $n_{e0}$ or by modifying $\alpha_{\mathrm{eff}}$ through local $E/N$; the two mechanisms need different diagnostics.
- A visible avalanche/emission event is not yet evidence of a gap-spanning conductive channel.

## Connections

- **Up:** [[Optical Breakdown Mechanism in Air\|Optical Breakdown Mechanism in Air]]
- **Side:** [[Reduced Electric Field Governs Electron Kinetics\|Reduced Electric Field Governs Electron Kinetics]] · [[Space Charge Marks the Avalanche to Streamer Transition\|Space Charge Marks the Avalanche to Streamer Transition]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]

## Anchor sources

- Morrow and Lowke, *Streamer propagation in air*, [doi:10.1088/0022-3727/30/4/017](https://doi.org/10.1088/0022-3727/30/4/017).
- Hagelaar and Pitchford, electron transport and rates, [doi:10.1088/0963-0252/14/4/011](https://doi.org/10.1088/0963-0252/14/4/011).

