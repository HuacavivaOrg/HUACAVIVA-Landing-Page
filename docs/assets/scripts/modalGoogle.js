// modalGoogle.js
const googleBtn = document.getElementById("openGoogleModal");
const googleModal = document.getElementById("googleModal");
const closeBtn = googleModal.querySelector(".close");

googleBtn.addEventListener("click", () => {
  googleModal.style.display = "flex"; 
});

closeBtn.addEventListener("click", () => {
  googleModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === googleModal) {
    googleModal.style.display = "none";
  }
});

