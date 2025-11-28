const appleBtn = document.querySelector(".apple-btn");
const appleModal = document.getElementById("appleModal");
const closeApple = document.querySelector(".close-apple");

appleBtn.addEventListener("click", () => {
  appleModal.style.display = "flex";
});

closeApple.addEventListener("click", () => {
  appleModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === appleModal) {
    appleModal.style.display = "none";
  }
});
