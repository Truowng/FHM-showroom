const menu = document
  .querySelector(".header-btn")
  .addEventListener("click", toggle);
const modal = document.querySelector(".modal-container");
let show = 0;

function toggle() {
  if (show === 0) {
    modal.style.display = "flex";
    modal.style.transform = "translateY(0%)";
    show = 1;
  } else {
    modal.style.transform = "translateY(-100%)";
    modal.style.transition = "all cubic-bezier(0.25, 0, 0, 1) 0.8s";
    show = 0;
  }
}
