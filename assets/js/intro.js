const introImage = document.querySelector(".intro-image");
const slider = document.querySelector(".intro-slider");
const introText = document.querySelector(".intro-text");

const tl = new TimelineMax();

tl.fromTo(
  introImage,
  1.2,
  { height: "0%" },
  { height: "80%", ease: Power2.easeInOut }
)
  .fromTo(
    introImage,
    1.2,
    { width: "100%" },
    { width: "70%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "100%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    introText,
    0.5,
    { opacity: 0, x: "50" },
    { opacity: 1, x: "0" },
    "-=0.5"
  );
