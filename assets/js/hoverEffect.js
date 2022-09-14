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
  "https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1497506928652-500166625d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80",
];

const hoverEffectImagesGallery2 = [
  "https://images.unsplash.com/photo-1516259670444-ad07068e14e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=479&q=80",
  "https://images.unsplash.com/photo-1567320743368-9db24e12ebf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=539&q=80",
  "https://images.unsplash.com/photo-1603929260784-262f38411fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
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
    intensity: 0.5,
    image1: hoverEffectImagesGallery2[index],
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
  setTransform(hoverEffectSlider, `translateX(-${hoverEffectCurrent}px)`);
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
