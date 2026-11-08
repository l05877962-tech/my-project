const slides = Array.from(document.querySelectorAll(".slide"));
const currentSlideLabel = document.getElementById("current-slide");
const previousButton = document.getElementById("previous-slide");
const nextButton = document.getElementById("next-slide");
const easternArabicDigits = new Intl.NumberFormat("ar");
let activeSlide = 0;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.hidden = !isActive;
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  currentSlideLabel.textContent = easternArabicDigits.format(activeSlide + 1);
}

previousButton.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton.addEventListener("click", () => showSlide(activeSlide + 1));

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    showSlide(activeSlide + 1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    showSlide(activeSlide - 1);
  }
});

showSlide(0);
