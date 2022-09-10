const parallaxImagesGallery = [
  "https://images.unsplash.com/photo-1541320823636-40247af897bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1523181729404-8a3b7b6f918d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1566787020216-3e4f973ec5ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
];

let parallaxImages = [...document.querySelectorAll(".parallax-img")];
let parallaxSlider = document.querySelector(".parallax-slider-container");
let parallaxSliderWidth;
let parallaxImageWidth;
let current = 0;
let target = 0;
let ease = 0.08;

parallaxImages.forEach((parallaxImage, index) => {
  parallaxImage.style.backgroundImage = `url(${parallaxImagesGallery[index]})`;
});

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const setTransform = (el, transform) => {
  el.style.transform = transform;
};

const init = () => {
  parallaxSliderWidth = parallaxSlider.getBoundingClientRect().width;
  parallaxImageWidth = parallaxSliderWidth / parallaxImages.length;
  document.body.style.height = `${
    parallaxSliderWidth - (window.innerWidth - window.innerHeight)
  }px`;
};

window.addEventListener("resize", init);

const parallaxAnimate = () => {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  parallaxImageAnimate();
  setTransform(parallaxSlider, `translateX(-${current}px)`);
  requestAnimationFrame(parallaxAnimate);
};

const parallaxImageAnimate = () => {
  let ratio = current / parallaxImageWidth;
  let intersectionRatioValue;

  parallaxImages.forEach((parallaxImage, index) => {
    intersectionRatioValue = ratio - index * 0.7;
    setTransform(parallaxImage, `translateX(${intersectionRatioValue * 70}px)`);
  });
};

init();
parallaxAnimate();
