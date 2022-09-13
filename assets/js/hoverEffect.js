const hoverEffectImagesGallery = [
  "https://images.unsplash.com/photo-1541320823636-40247af897bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1523181729404-8a3b7b6f918d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1566688342604-dbe3e7357104?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1472835560847-37d024ebacdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
  "https://images.unsplash.com/photo-1566787020216-3e4f973ec5ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8",
];

const hoverEffectDisplacementImages = [
  "https://images.unsplash.com/photo-1608930361232-67c6350dab78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1603665301175-57ba46f392bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1548700819-892a76eed325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1544108182-8810058c3a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  "https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80",
];

let hoverEffectImages = [...document.querySelectorAll(".hover-img")];
let hoverEffectSlider = document.querySelector(".hover-slider-container");
let hoverEffectSliderWidth;
let hoverEffectImageWidth;
let hoverEffectCurrent = 0;
let hoverEffectTarget = 0;
let hoverEffectEase = 0.08;

hoverEffectImages.forEach((hoverEffectImage, index) => {
  new hoverEffect({
    parent: hoverEffectImage,
    intensity: 0.1,
    image1:
      "https://images.unsplash.com/photo-1626362073981-75205f952cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80",
    image2: hoverEffectImagesGallery[index],
    displacementImage: hoverEffectDisplacementImages[index],
    easing: Expo.easeOut,
    speedIn: 1.2,
    speedOut: 2.4,
  });
  hoverEffectImage.style.backgroundImage = `url(${hoverEffectImagesGallery[index]})`;
});

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const setTransform = (el, transform) => {
  el.style.transform = transform;
};

const init = () => {
  hoverEffectSliderWidth = hoverEffectSlider.getBoundingClientRect().width;
  hoverEffectImageWidth = hoverEffectSliderWidth / hoverEffectImages.length;
  document.body.style.height = `${
    hoverEffectSliderWidth - (window.innerWidth - window.innerHeight)
  }px`;
};

window.addEventListener("resize", init);

const hoverEffectAnimate = () => {
  hoverEffectCurrent = parseFloat(
    lerp(hoverEffectCurrent, hoverEffectTarget, hoverEffectEase)
  ).toFixed(2);
  hoverEffectTarget = window.scrollY;
  hoverEffectImageAnimate();
  setTransform(hoverEffectSlider, `translateY(-${hoverEffectCurrent}px)`);
  requestAnimationFrame(hoverEffectAnimate);
};

const hoverEffectImageAnimate = () => {
  let ratio = hoverEffectCurrent / hoverEffectImageWidth;
  let intersectionRatioValue;

  hoverEffectImages.forEach((hoverEffectImage, index) => {
    intersectionRatioValue = ratio - index * 0.7;
    setTransform(
      hoverEffectImage,
      `translateX(${intersectionRatioValue * 70}px)`
    );
  });
};

init();
hoverEffectAnimate();
