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

// Slide do Spoiler

let currentSlideSpoiler = 0;
const slidesSpoiler = document.querySelectorAll('.boxImgSpoiler');
const itemsToShowSpoiler = 4;
let intervalId;

function showSlideSpoiler() {
  slidesSpoiler.forEach((slide, i) => {
    const isVisible = i >= currentSlideSpoiler && i < currentSlideSpoiler + itemsToShowSpoiler;
    slide.style.display = isVisible ? 'flex' : 'none';
  });
}

function nextSlideSpoiler() {
  currentSlideSpoiler = (currentSlideSpoiler + 1) % (slidesSpoiler.length - itemsToShowSpoiler + 1);
  showSlideSpoiler();
}

function prevSlideSpoiler() {
  currentSlideSpoiler =
    (currentSlideSpoiler - 1 + (slidesSpoiler.length - itemsToShowSpoiler + 1)) %
    (slidesSpoiler.length - itemsToShowSpoiler + 1);
  showSlideSpoiler();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlideSpoiler();
  }, 3000); 
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

showSlideSpoiler();
startAutoSlide();

// Depoimentos