const carousel = document.querySelector(".carousel");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

const imageWidth = 240;

setInterval(function () {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  carousel.style.transform = `translateX(-${imageWidth}px)`;

  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
  }, 900);
}, 2000);
