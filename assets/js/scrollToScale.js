const background = document.querySelector(".scroll-to-scale-background");
const subject = document.querySelector(".scroll-to-scale-subject");
const scaleContainer = document.querySelector(".scroll-to-scale-container");
const scaleRect = container.getBoundingClientRect();

const scaleAnimate = (element, position) => {
  element.style.width = `calc(50% + ${position}%)`;
};

const scaleAnimateBackground = (element, position) => {
  element.style.width = `calc(80% + ${position}%)`;
};

document.addEventListener("scroll", function (e) {
  lastKnownScalePosition = window.scrollY;

  window.requestAnimationFrame(function () {
    scaleAnimateBackground(background, lastKnownScalePosition * +0.08);
    scaleAnimate(subject, lastKnownScalePosition * +0.05);
  });
});
