/* =====================================================================
   <project-grid>  — builds the project boxes from window.PROJECTS.
   =====================================================================

   Usage:
     <project-grid></project-grid>          all projects
     <project-grid limit="3"></project-grid>  only the first 3 (homepage)

   The data lives in projects-data.js — load it BEFORE this script:
     <script src="assets/components/projects-data.js" defer></script>
     <script src="assets/components/projectGrid.js"   defer></script>
*/
class ProjectGrid extends HTMLElement {
  connectedCallback() {
    const projects = window.PROJECTS || [];
    const icons = window.PROJECT_ICONS || {};

    // Optional "limit" attribute, e.g. <project-grid limit="3">
    const limitAttr = parseInt(this.getAttribute("limit"), 10);
    const list = Number.isNaN(limitAttr) ? projects : projects.slice(0, limitAttr);

    const tagHtml = (tag) => `
      <div class="col-auto p-0">
        <span class="project-tag">
          <img src="${icons[tag.icon] || ""}" alt="${tag.label}" />
          ${tag.label}
        </span>
      </div>`;

    const cardHtml = (p) => `
      <div class="col-12 col-md-6 col-lg-4 item">
        <a href="${p.href}">
          <div class="card${p.featured ? " featured" : ""}">
            <h4>${p.name}</h4>
            <div class="row justify-content-center project-tags">
              ${(p.tags || []).map(tagHtml).join("")}
            </div>
            <img src="${p.image}" alt="${p.name}" />
          </div>
        </a>
      </div>`;

    this.innerHTML = `
      <div class="row justify-content-center text-center items">
        ${list.map(cardHtml).join("")}
      </div>`;
  }
}

customElements.define("project-grid", ProjectGrid);
