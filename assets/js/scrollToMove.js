const scrollToMoveItemContainers = document.querySelectorAll(
  ".scroll-to-move-item-container"
);
const scrollToMoveItems = document.querySelectorAll(".scroll-to-move-item");
const imageGallery = [
  "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1619221891415-e5ec4890da3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80",
  "https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80",
];

scrollToMoveItems.forEach((scrollToMoveItem) => {
  scrollToMoveItem.style.backgroundImage = `url(${
    imageGallery[Math.floor(Math.random() * 10)]
  })`;
});

const first = document.querySelector(
  ".scroll-to-move-item-container:nth-of-type(1)"
);
const second = document.querySelector(
  ".scroll-to-move-item-container:nth-of-type(2)"
);
const third = document.querySelector(
  ".scroll-to-move-item-container:nth-of-type(3)"
);
const fourth = document.querySelector(
  ".scroll-to-move-item-container:nth-of-type(4)"
);
const container = document.querySelector(".scroll-to-move-wrapper");
const rect = container.getBoundingClientRect();

const animate = (element, position) => {
  element.style.transform = `translateX(calc(-500px + ${position}px))`;
};

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  window.requestAnimationFrame(function () {
    animate(first, lastKnownScrollPosition * -0.5);
    animate(second, lastKnownScrollPosition * +0.35);
    animate(third, lastKnownScrollPosition * -0.35);
    animate(fourth, lastKnownScrollPosition * +0.35);
  });
});
