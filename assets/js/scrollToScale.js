const background = document.querySelector(".scroll-to-scale-background");
const subject = document.querySelector(".scroll-to-scale-subject");
const scaleContainer = document.querySelector(".scroll-to-scale-container");
const scaleRect = scaleContainer.getBoundingClientRect();

const scaleAnimateSubject = (element, position) => {
  if (position < 22.5) {
    element.style.width = `calc(35% + ${position}%)`;
  }
};

const scaleAnimateBackground = (element, position) => {
  if (position < 30.5) {
    element.style.width = `calc(80% + ${position}%)`;
  }
};

document.addEventListener("scroll", function (e) {
  lastKnownScalelPosition = window.scrollY;

  window.requestAnimationFrame(function () {
    scaleAnimateBackground(background, lastKnownScalelPosition * +0.08);
    scaleAnimateSubject(subject, lastKnownScalelPosition * +0.05);
  });
});
