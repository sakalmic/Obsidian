---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031310-electrode-geometry-and-polarity-shape-the-local-field/","title":"Electrode Geometry and Polarity Shape the Local Field","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Electrode Geometry and Polarity Shape the Local Field","aliases":["Electric-field enhancement","Polarity and electrode geometry"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-04","CL-05"],"topics":["topic/ltsg/breakdown","topic/ltsg/model"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/model"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Electrode Geometry and Polarity Shape the Local Field

## Core atomic concept

Breakdown responds to the local field and its gradient, not only to average $U/d$. Electrode curvature, edges, apertures, surface defects and polarity determine where avalanches start and how streamers propagate.

## Mathematical formulation

Before appreciable space charge,

$$\nabla\cdot(\epsilon\nabla\phi)=0,\qquad \mathbf E=-\nabla\phi.$$

A field-enhancement factor is

$$\beta_E=\frac{E_{max}}{U/d}.$$

Once charge develops, Laplace's equation must be replaced by Poisson's equation. The relevant avalanche score along a field line is

$$K(\mathcal L)=\int_{\mathcal L}\alpha_{eff}[E(\mathbf r)/N],ds,$$

which combines geometry with gas kinetics. A geometry can have the same $U/d$ but a much larger $K$ near a sharp electrode.

## Polarity

Positive and negative streamers differ because electron drift is reversed relative to propagation and because positive propagation depends strongly on nonlocal electrons ahead of the front. Therefore polarity is an interaction term with focus position and channel topology, not just a sign convention.

## Experimental consequences

- Store CAD dimensions, tip radius, alignment tolerance, material and surface finish.
- Compute electrostatic $E/N$ maps before adding plasma chemistry.
- Determine a separate $U_{50}$ for every geometry/polarity.
- Register optical images to electrode coordinates; nominal focus position is insufficient.
- Test polarity-by-channel interactions rather than separate within-polarity significance tests.

## Connections

- **Up:** [[Space Charge Marks the Avalanche to Streamer Transition\|Space Charge Marks the Avalanche to Streamer Transition]]
- **Side:** [[Photoionization Enables Positive Streamer Propagation in Air\|Photoionization Enables Positive Streamer Propagation in Air]] · [[Electrode Conditioning Creates History Dependence\|Electrode Conditioning Creates History Dependence]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-04 - Polarity and field geometry\|CL-04 - Polarity and field geometry]] · [[II Areas/02_Thesis/Claims/CL-05 - Reduced predictive model\|CL-05 - Reduced predictive model]]

## Anchor sources

- Morrow and Lowke, *Streamer propagation in air*, [doi:10.1088/0022-3727/30/4/017](https://doi.org/10.1088/0022-3727/30/4/017).
- Ebert et al., polarity, diameter and similarity of streamers, [doi:10.1029/2009JA014867](https://doi.org/10.1029/2009JA014867).
- Forestier et al., polarity- and timing-dependent laser guiding, [doi:10.1063/1.3690961](https://doi.org/10.1063/1.3690961).

