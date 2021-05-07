const openModal = document.querySelector("#burger-button");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector(".header__modal-nav");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
