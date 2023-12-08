// Slide
let currentSlide = 0;
const slides = document.querySelectorAll(".boxInfo");
let itemsToShow = 4; 

function showSlide() {
  slides.forEach((slide, i) => {
    const isInRange = i >= currentSlide && i < currentSlide + itemsToShow;
    slide.style.display = isInRange ? "flex" : "none";
  });
}

function prevSlide() {
  currentSlide = Math.max(currentSlide - itemsToShow, 0);
  showSlide();
}

function nextSlide() {
  currentSlide = Math.min(currentSlide + itemsToShow, slides.length - itemsToShow);
  console.log(itemsToShow)
  showSlide();
}
console.log(slides)
showSlide();
