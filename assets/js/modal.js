const menu = document
  .querySelector(".header-btn")
  .addEventListener("click", toggle);
const modal = document.querySelector(".modal-container");
let show = 0;

function toggle() {
  if (show === 0) {
    modal.style.display = "flex";
    modal.style.animation = "fadeIn ease 0.5s";
    show = 1;
  } else {
    modal.style.animation = "fadeOut ease 0.5s";
    const closeModal = () => {
      modal.style.display = "none";
    };
    setTimeout(closeModal, 500);
    show = 0;
  }
}
