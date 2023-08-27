// const slides = document.querySelector(".slides");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// let currentIndex = 0;

// prevButton.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + slides.children.length) % slides.children.length;
//   updateSlidePosition();
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % slides.children.length;
//   updateSlidePosition();
// });

// function updateSlidePosition() {
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Automatically advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentSlide);
