// authRedirect.js

function setupAuthRedirect(formSelector, targetPage) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita recargar la página
    window.location.href = targetPage; // redirige a la página indicada
  });
}

// Inicialización para login y registro
document.addEventListener("DOMContentLoaded", () => {
  setupAuthRedirect(".formulario-login", "app.html");     // login
  setupAuthRedirect(".formulario-register", "app.html");  // registro
});

document.querySelectorAll(".button-primary").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    window.location.href = target;
  });
});

// Bloque especial: manejo exclusivo para el botón del modal "Compartir Experiencia"
const newPostBtn = document.getElementById("new-post-btn");
if (newPostBtn) {
  newPostBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // evita que se mezcle con el listener general
    event.preventDefault();  // evita navegación

    const modal = document.getElementById("new-post-modal");
    const select = document.getElementById("post-huaca");

    // Reinicia las opciones del select
    select.innerHTML = '<option value="">Selecciona una Huaca</option>';
    state.huacas.forEach(h => {
      select.innerHTML += `<option value="${h.name}">${h.name}</option>`;
    });

    // Muestra el modal
    modal.classList.remove("hidden");
  });
}

