---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609031320-electrode-conditioning-creates-history-dependence/","title":"Electrode Conditioning Creates History Dependence","tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/statistics"],"dgHomeLink":true,"noteIcon":"","updated":"2026-09-03","dg-note-properties":{"title":"Electrode Conditioning Creates History Dependence","aliases":["Spark-gap conditioning","Electrode erosion and memory"],"type":"concept","status":"evergreen","context":"research","claims":["CL-01","CL-02","CL-04"],"topics":["topic/ltsg/breakdown","topic/ltsg/statistics"],"tags":["type/permanent","context/research","topic/ltsg/breakdown","topic/ltsg/statistics"],"created":"2026-09-03","last_updated":"2026-09-03"}}
---


# Electrode Conditioning Creates History Dependence

## Core atomic concept

Every discharge can alter the next one through erosion, deposited material, adsorbates, local roughness and residual gas products. The shot sequence is therefore a stateful process; “identical shots” are not automatically exchangeable.

## State-space view

Let $s_i$ be an unobserved electrode/chamber state before shot $i$:

$$s_{i+1}=g(s_i,E_i,Q_i,W_i)+\omega_i,$$

$$P(B_i=1)=\operatorname{logit}^{-1}(\mathbf x_i^T\beta+\gamma s_i).$$

Practical proxies include shots since cleaning, accumulated charge

$$Q_{cum}=\sum_i\int |i_i(t)|dt,$$

and accumulated action

$$A_{cum}=\sum_i\int i_i^2(t)dt.$$

These do not fully represent erosion but make history testable.

## Experimental consequences

- Photograph electrodes and record mass/roughness where feasible before and after campaigns.
- Define conditioning, cleaning and replacement protocols.
- Keep chronological shot order and include shots-since-service in plots/models.
- Interleave conditions within stable blocks; do not confound treatment with ageing.
- Repeat the key result after service or with a second electrode pair.

## Connections

- **Up:** [[Breakdown Voltage Is a Probability Distribution Not a Constant\|Breakdown Voltage Is a Probability Distribution Not a Constant]]
- **Side:** [[Hierarchical Shot-Level Models Separate Effects from Drift\|Hierarchical Shot-Level Models Separate Effects from Drift]] · [[Electrode Geometry and Polarity Shape the Local Field\|Electrode Geometry and Polarity Shape the Local Field]]
- **Down:** [[II Areas/02_Thesis/Claims/CL-01 - Laser-assisted breakdown probability\|CL-01 - Laser-assisted breakdown probability]] · [[II Areas/02_Thesis/Claims/CL-02 - Delay and jitter response\|CL-02 - Delay and jitter response]]

## Anchor source

- Zhang et al., *Electrode Erosion and Lifetime Performance of a Compact and Repetitively Triggered Field Distortion Spark Gap Switch*, [doi:10.1109/TPS.2019.2954702](https://doi.org/10.1109/TPS.2019.2954702).

