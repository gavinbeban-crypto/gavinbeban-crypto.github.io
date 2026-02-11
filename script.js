function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const cardWidth = carousel.querySelector(".card").offsetWidth;

  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}

// Animasi fade-in
const animatedElements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
