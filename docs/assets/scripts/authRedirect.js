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

