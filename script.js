const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
fetch('projects.json')
  .then(r => r.json())
  .then(list => {
    const root = document.getElementById('projects');
    if (!root) return;
    list.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <h3><a href="${p.link}" target="_blank" rel="noopener">${p.title}</a></h3>
        <p>${p.summary}</p>
        <div class="meta">${(p.stack||[]).join(' · ')}</div>
      `;
      root.appendChild(el);
    });
  })
  .catch(()=>{
    const root = document.getElementById('projects');
    if (root) root.innerHTML = '<p style="color:var(--muted)">Agrega tus proyectos en <code>projects.json</code>.</p>';
  });
