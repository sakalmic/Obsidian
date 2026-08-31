---
{"dg-publish":true,"permalink":"/home/","tags":["gardenEntry"],"dg-note-properties":{}}
---


## 🗺️ Maps of Context (MOCs)

🩸 [[II Areas/01_Physical/01_MOC\|Physical]]
🧡 [[II Areas/02_Emotional/02_MOC\|Emotional]]
📗 [[II Areas/03_Intellectual/03_MOC\|Intellectual]]
🌐 [[II Areas/04_Social/04_MOC\|Social]]
✝️ [[II Areas/05_Spiritual/05_MOC\|Spiritual]]

## 🎛️ Projects and Tasks in Progress

> [!info]
> ```dataviewjs
> // 1. Icons & Priorities setup
> const tagIcons = { 
>      "#context/physical": "🩸", 
>      "#context/emotional": "🧡", 
>      "#context/intellectual": "🟩", 
>      "#context/social": "🌐", 
>      "#context/spiritual": "✝️" 
> };
> 
> const priorityLevels = [
>      { tag: "#priority/critical", title: "🔥 Critical" },
>      { tag: "#priority/high", title: "⚡ High" },
>      { tag: "#priority/normal", title: "📌 Normal" },
>      { tag: "#priority/low", title: "☕ Low" },
>      { tag: "#priority/lowest", title: "🧊 Lowest" },
>      { tag: "UNSET", title: "❗️ Not Set" }
> ];
> 
> // 3. Fetch Data
> let projects = dv.pages('"I Projects" and #type/project and #status/in-progress');
> 
> const contextTags = Object.keys(tagIcons);
> projects = projects.filter(p => p.file.tags && p.file.tags.some(tag => contextTags.includes(tag)));
> 
> let processedProjects = new Set(); 
> 
> // 4. Render by Priority
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
>                  const row = dv.el("div", `<span class="symbol-container"><span class="proj-arrow" style="color: #555555 !important; font-size: 1.1em !important;">▶</span></span>&nbsp;${linkHtml}${icons}`, { container, cls: "proj-row" });
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
>                  // Circle: 1.2em size with a -2px margin-left for balanced spacing
>                  dv.el("div", `<span class="symbol-container"><span style="color: #555555 !important; font-size: 1.2em !important; line-height: 0.6; margin-left: -2px !important;">●</span></span>&nbsp;${linkHtml}${icons}`, { container, cls: "no-task-row" });
>              }
>          });
>      }
> });
> ```
## 📝 Latest Notes

> [!note]
> ```dataview
> TABLE file.ctime as "Created"
> FROM -"TMP"
> WHERE file.name != this.file.name
> SORT file.ctime DESC
> LIMIT 10
> ```
---
## 🔗 Quick Links

```dataviewjs
let today = moment().format("YYYY-MM-DD");
dv.paragraph(`- **Dnes:** [[Daily/${today}|Dnešní deník (${today})]]`);
```
