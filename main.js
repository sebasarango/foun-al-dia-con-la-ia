
const CONFIG = window.FOUN_CONFIG || {};
const PREVIEW_MODE = Boolean(CONFIG.previewMode);

function formatDate(value) {
  if (!value) return "Fecha por definir";
  const d = new Date(value + "T12:00:00");
  return new Intl.DateTimeFormat("es-CO", { day:"numeric", month:"long", year:"numeric" }).format(d);
}

function sessionIsAvailable(session) {
  if (!session) return false;
  if (!session.releaseDate) return false;
  const now = new Date();
  const release = new Date(session.releaseDate + "T00:00:00");
  return now >= release;
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

document.querySelectorAll(".copy-prompt").forEach(button => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    const text = target.innerText.trim();
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position="fixed"; ta.style.opacity="0";
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    button.textContent = "✓ Prompt copiado";
    setTimeout(() => button.textContent = original, 2200);
  });
});

const routePage = document.querySelector("[data-route-page]");
if (routePage) {
  const routeId = routePage.dataset.routePage;
  const route = CONFIG.routes?.[routeId];
  const list = document.getElementById("route-session-list");
  if (route && list) {
    route.sessions.forEach((sid, index) => {
      const s = CONFIG.sessions[sid];
      const available = sessionIsAvailable(s);
      const card = document.createElement("article");
      card.className = `session-card ${available ? "available" : "locked"}`;
      const statusHtml = available
        ? `<span class="status status-available">● Disponible</span>`
        : `<span class="status status-locked">🔒 Próximamente</span><span>${formatDate(s.releaseDate)}</span>`;
      const actionHtml = available
        ? `<a href="${sid}.html" class="session-action">Explorar sesión <span>→</span></a>`
        : PREVIEW_MODE
          ? `<a href="${sid}.html" class="session-action">Vista previa <span>→</span></a>`
          : `<span class="session-action disabled">Aún no disponible</span>`;
      card.innerHTML = `
        <div class="session-number">${String(index+1).padStart(2,"0")}</div>
        <div class="session-content">
          <span class="session-type">${s.type}</span>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          <div class="session-meta">${statusHtml}<span>${s.audience}</span></div>
        </div>
        ${actionHtml}`;
      list.appendChild(card);
    });
  }
}

const sessionPage = document.querySelector("[data-session-page]");
if (sessionPage) {
  const sid = sessionPage.dataset.sessionPage;
  const s = CONFIG.sessions?.[sid];
  const available = sessionIsAvailable(s);
  const content = document.getElementById("session-content");
  const locked = document.getElementById("locked-session-message");

  if (s && !available && !PREVIEW_MODE) {
    content.hidden = true;
    locked.hidden = false;
    document.getElementById("locked-session-title").textContent = s.title;
    document.getElementById("locked-session-date").textContent =
      s.releaseDate ? `Podrás acceder a partir del ${formatDate(s.releaseDate)}.` : "La fecha de habilitación será anunciada próximamente.";
  }

  const continueBox = document.getElementById("continue-options");
  if (s && continueBox) {
    const entries = Object.entries(s.next || {});
    if (sid === "general-2") {
      // Sesión compartida: mostrar ambas rutas.
      continueBox.innerHTML = `
        <div><span class="session-type">DOCENTES</span><strong>Continúa con tu ruta</strong><a href="docentes.html">Ir a ruta Docentes →</a></div>
        <div><span class="session-type">ADMINISTRATIVOS</span><strong>Continúa con tu ruta</strong><a href="administrativos.html">Ir a ruta Administrativos →</a></div>`;
    } else if (entries.length) {
      const [routeId, nextId] = entries[0];
      const next = CONFIG.sessions[nextId];
      const nextAvailable = sessionIsAvailable(next);
      const label = CONFIG.routes[routeId]?.label || routeId;
      continueBox.innerHTML = `
        <div>
          <span class="session-type">${label}</span>
          <strong>${next ? next.title : "Siguiente sesión"}</strong>
          ${nextAvailable || PREVIEW_MODE
            ? `<a href="${nextId}.html">${nextAvailable ? "Continuar" : "Vista previa"} →</a>`
            : `<span>🔒 ${formatDate(next?.releaseDate)}</span>`}
        </div>
        <div><span class="session-type">RUTA</span><strong>Volver al recorrido</strong><a href="${routeId}.html">Ver ruta →</a></div>`;
    } else {
      const routeId = s.routes?.[0];
      continueBox.innerHTML = `
        <div><span class="session-type">FIN DE LA RUTA</span><strong>Has llegado a la última sesión</strong><a href="${routeId}.html">Volver a la ruta →</a></div>`;
    }
  }
}
