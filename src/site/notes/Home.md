---
title: Home
aliases:
  - Home
  - Dashboard
tags:
  - gardenEntry
  - type/moc
  - context/phd
date: 2026-09-01
last_updated: 2026-09-01
dg-publish: true
dg-home: true
dgHome: true
dg-home-link: true
dg-show-file-tree: true
dgShowFileTree: true
dg-render-dataview: true
---

# 🎓 Doktorské studium & Vědecký výzkum

> [!info] **Akademické informace**
> - **Autor**: Ing. Michal Sakala | **Školitel**: doc. Ing. Jan Mikeš, Ph.D.
> - **Pracoviště**: Katedra ekonomiky, manažerství a humanitních věd, FEL ČVUT v Praze
> - **Disertace**: *Laserem indukované plazmatické útvary pro ochranu a spínání v elektroenergetice: Fyzikální dynamika a technicko-ekonomické modelování*
> - **Obor**: Ekonomika energetiky a elektrotechniky (2024–2028)

---

## 🗺️ Akademické rozcestníky (Maps of Content)

| Oborová oblast | Popis | Rychlý odkaz |
| :--- | :--- | :---: |
| 🔬 **Výzkum & Metodologie** | Fyzika plazmatu, laserové spínání (LTSG), COMSOL simulace, diagnostika | [[01_MOC\|Otevřít 01_MOC]] |
| 📖 **Disertační práce** | Kapitoly disertace, Claim Ledger, hypotézy, vazba na LaTeX v `PhD/thesis` | [[02_MOC\|Otevřít 02_MOC]] |
| 📑 **Publikace & Konference** | Pipeline článků (IEEE, APL, ICOLSE), recenzní řízení, spoluautorství | [[03_MOC\|Otevřít 03_MOC]] |
| 🏛️ **Administrace & ISP** | ISP, KOS, státní doktorská zkouška / minimum, směrnice FEL, školitel | [[04_MOC\|Otevřít 04_MOC]] |
| 🎓 **Výuka & Vedení prací** | Pedagogická činnost, vedení cvičení, témata BP/DP | [[05_MOC\|Otevřít 05_MOC]] |
| 💰 **Granty & Financování** | SGS ČVUT, GAČR, finanční výkazy a cestovní příkazy | [[06_MOC\|Otevřít 06_MOC]] |

---

## 🎛️ Aktivní PhD projekty a úkoly v řešení

> [!abstract] **Projekty dle priorit**
> ```dataviewjs
> const tagIcons = { 
>      "#context/research": "🔬", 
>      "#context/thesis": "📖", 
>      "#context/publications": "📑", 
>      "#context/admin": "🏛️", 
>      "#context/teaching": "🎓", 
>      "#context/grants": "💰",
>      "#context/phd": "⚡"
> };
> 
> const priorityLevels = [
>      { tag: "#priority/critical", title: "🔥 Kritické deadliny (Critical)" },
>      { tag: "#priority/high", title: "⚡ Vysoká priorita (High)" },
>      { tag: "#priority/normal", title: "📌 Běžné projekty (Normal)" },
>      { tag: "#priority/low", title: "☕ Nízká priorita (Low)" },
>      { tag: "UNSET", title: "❗️ Bez nastavené priority" }
> ];
> 
> let projects = dv.pages('"I Projects" and #type/project and #status/in-progress');
> 
> let processedProjects = new Set(); 
> 
> priorityLevels.forEach(prio => {
>      let prioPages = projects.filter(p => {
>          if (processedProjects.has(p.file.path)) return false;
>          let tags = p.file.tags || [];
>          let hasPriority = tags.some(t => t.startsWith("#priority/"));
>          
>          if (prio.tag === "UNSET") { 
>              if (!hasPriority) { processedProjects.add(p.file.path); return true; } 
>              return false; 
>          }
>          if (tags.includes(prio.tag)) { 
>              processedProjects.add(p.file.path); 
>              return true; 
>          }
>          return false;
>      });
>      
>      if (prioPages.length > 0) {
>          dv.header(4, prio.title);
>          
>          prioPages.forEach(p => {
>              let icons = "";
>              for (let tag of p.file.tags) { if (tagIcons[tag]) icons += " " + tagIcons[tag]; }
>              
>              let linkedTasks = p.file.tasks.where(t => !t.completed);
>              
>              const container = dv.el("div", "", { cls: "proj-box" });
>              const linkHtml = `<a class="internal-link" href="${p.file.path}"><b>${p.file.name}</b></a>`;
>              
>              if (linkedTasks.length > 0) {
>                  const row = dv.el("div", `<span class="symbol-container"><span class="proj-arrow" style="color: #6366f1 !important; font-size: 1.1em !important;">▶</span></span>&nbsp;${linkHtml}${icons}`, { container, cls: "proj-row" });
>                  const bin = dv.el("div", "", { container, cls: "task-bin" });
>                  bin.style.display = "none"; 
>                  
>                  let taskMd = "";
>                  linkedTasks.forEach(t => {
>                      taskMd += `- [ ] ${t.text}\n`;
>                  });
>                  dv.paragraph(taskMd, { container: bin });
>                  
>                  row.addEventListener("click", (e) => {
>                      if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') return;
>                      const arrowSpan = row.querySelector(".proj-arrow");
>                      if (bin.style.display === "none") {
>                          bin.style.display = "block";
>                          arrowSpan.innerText = "▼";
>                      } else {
>                          bin.style.display = "none";
>                          arrowSpan.innerText = "▶";
>                      }
>                  });
>              } else {
>                  dv.el("div", `<span class="symbol-container"><span style="color: #10b981 !important; font-size: 1.2em !important; line-height: 0.6; margin-left: -2px !important;">●</span></span>&nbsp;${linkHtml}${icons}`, { container, cls: "no-task-row" });
>              }
>          });
>      }
> });
> ```

---

## 📑 Publikační Pipeline & Články

```dataview
TABLE 
    target_journal_conference as "Cílový časopis / Konference", 
    status as "Stav", 
    submission_deadline as "Deadline",
    authors as "Autoři"
FROM "I Projects" OR "II Areas/03_Publications"
WHERE contains(tags, "type/paper")
SORT submission_deadline ASC
```

---

## ⏳ Nadcházející akademické milníky a zkoušky

```dataview
TABLE 
    file.mtime as "Poslední úprava",
    tags as "Kategorie"
FROM "I Projects" OR "II Areas/04_Administration"
WHERE contains(tags, "type/project") OR contains(tags, "type/admin")
SORT file.name ASC
LIMIT 6
```

---

## 💡 Poslední Zettelkasten koncepty a literární poznámky

```dataview
TABLE 
    file.ctime as "Vytvořeno",
    tags as "Tagy"
FROM "III Resources"
WHERE file.name != this.file.name
SORT file.ctime DESC
LIMIT 8
```

---

## 🔗 Rychlé akademické akce

```dataviewjs
let today = moment().format("YYYY-MM-DD");
dv.paragraph(`- 📅 **Dnešní výzkumný deník:** [[Daily/${today}|Výzkumný záznam (${today})]]`);
dv.paragraph(`- 🔬 **Claim Ledger & Důkazní matice:** [[Claim Ledger & Evidence Matrix]]`);
dv.paragraph(`- 🤝 **Zápis ze schůzky se školitelem:** [[Supervisor Meetings Log]]`);
dv.paragraph(`- 📖 **Struktura dizertace (LaTeX sync):** [[Thesis Structure & Chapter Outline]]`);
```
