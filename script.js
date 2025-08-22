const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

fetch('projects.json')
  .then(r => r.json())
  .then(list => {
    const root = document.getElementById('projects');
    if (!root) return;

    list.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';

      const buttons = `
        <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap">
          ${p.repo_link ? `<a class="btn" href="${p.repo_link}" target="_blank" rel="noopener">Ver repositorio</a>` : ``}
          ${p.drive_link ? `<a class="btn btn-secondary" href="${p.drive_link}" target="_blank" rel="noopener">Ver evidencia en Drive</a>` : ``}
        </div>
      `;

      el.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="meta">${(p.stack||[]).join(' · ')}</div>
        ${buttons}
      `;
      root.appendChild(el);
    });
  })
  .catch(() => {
    const root = document.getElementById('projects');
    if (root) root.innerHTML = '<p style="color:var(--muted)">Agrega tus proyectos en <code>projects.json</code>.</p>';
  });
