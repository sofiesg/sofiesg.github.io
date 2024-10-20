document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides");
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Position slides vertically for scrolling behavior
    slides.forEach((slide, idx) => {
      slide.style.transform = `translateY(${(idx - currentSlide) * 100}vh)`;
    });
  }

  // Listen for scroll events
  let scrollTimeout;
  window.addEventListener("wheel", (event) => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (event.deltaY > 0) {
        // Scroll down
        showSlide(currentSlide + 1);
      } else {
        // Scroll up
        showSlide(currentSlide - 1);
      }
    }, 100);
  });

  // Initialize by showing the first slide
  showSlide(currentSlide);
});
