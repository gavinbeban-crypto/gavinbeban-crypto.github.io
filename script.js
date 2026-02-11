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

// ===== Smooth + Highlight saat klik link ke #about =====
document.querySelectorAll('a[href="#about"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const aboutSection = document.getElementById("about");

    // Smooth scroll
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });

    // Efek highlight setelah sampai
    setTimeout(() => {
      aboutSection.classList.add("about-highlight");

      setTimeout(() => {
        aboutSection.classList.remove("about-highlight");
      }, 900);

    }, 500);
  });
});
// ===== Smooth + Highlight saat klik link ke #project =====
document.querySelectorAll('a[href="#project"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const projectSection = document.getElementById("project");

    // Smooth scroll
    projectSection.scrollIntoView({
      behavior: "smooth"
    });

    // Efek highlight setelah sampai
    setTimeout(() => {
      projectSection.classList.add("project-highlight");

      setTimeout(() => {
        projectSection.classList.remove("project-highlight");
      }, 900);

    }, 500);
  });
});

