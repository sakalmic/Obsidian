---
{"dg-publish":true,"permalink":"/iii-resources/zettelkasten/202609011000-optical-breakdown-mechanism-in-air/","title":"Optical Breakdown Mechanism in Air","tags":["type/permanent","context/research","theme/breakdown-physics","status/evergreen"],"dgHomeLink":true,"noteIcon":"","created":"2026-09-01","updated":"2026-09-01","dg-note-properties":{"title":"Optical Breakdown Mechanism in Air","aliases":["Zettel - Optical Breakdown Mechanism in Air","Optical Breakdown Mechanism in Air"],"tags":["type/permanent","context/research","theme/breakdown-physics","status/evergreen"],"date":"2026-09-01","last_updated":"2026-09-01"}}
---


# 💡 Optical Breakdown Mechanism in Air

## 🧠 Základní koncept
Laserem indukovaný optický průraz v atmosférickém vzduchu je prahový jev závislý na intenzitě elektrického pole optického záření. Pro nanosekundové lasery ($\lambda = 1064\text{ nm}$) nastává průraz při intenzitě $I_{th} \approx 10^{10} - 10^{11}\text{ W/cm}^2$.

---

## 🔬 Fyzikální mechanizmus
Proces probíhá ve dvou fázích:
1. **Multifotonová ionizace (MPI)**: Současná absorpce $k$ fotonů pro překonání ionizačního potenciálu molekul dusíku/kyslíku ($E_i \approx 12 - 15.6\text{ eV}$). Vytvoří počáteční volné "seed" elektrony.
2. **Kaskádní (lavinovitá) ionizace (Cascade / Avalanche Ionization)**: Volné elektrony absorbují fotony při srážkách s neutrálními atomy (inverzní brzdné záření - Inverse Bremsstrahlung) a po dosažení kinetické energie $\mathcal{E} > E_i$ ionizují další atomy nárazem:
$$
\frac{dn_e}{dt} = \nu_i n_e - \nu_a n_e - \nu_r n_e^2 - \nabla \cdot (\mathbf{u}_e n_e - D_e \nabla n_e)
$$
kde $\nu_i$ je frekvence ionizace, $\nu_a$ záchytu a $\nu_r$ rekombinace.

---

## 🔗 Zettelkasten propojení
- **Nadřazený koncept (Up)**: [[II Areas/01_Research/Laser-Induced Plasma Dynamics\|Laser-Induced Plasma Dynamics]] | [[II Areas/01_Research/01_MOC\|01_Research MOC]]
- **Aplikace (Down)**: [[II Areas/01_Research/Laser-Triggered Spark Gaps (LTSG)\|Laser-Triggered Spark Gaps (LTSG)]]
- **Vazba na disertaci**: [[II Areas/02_Thesis/Claim Ledger & Evidence Matrix#CL-02\|CL-02]] | [[II Areas/02_Thesis/Thesis Structure & Chapter Outline#Chapter 2\|Thesis Structure & Chapter Outline#Chapter 2]]
- **Zdrojová literatura**: [[III Resources/Literature/LN - Mikes2024 - Laser Spark Gaps\|LN - Mikes2024 - Laser Spark Gaps]]
