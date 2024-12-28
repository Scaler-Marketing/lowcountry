  document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector(".logo_component");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            marquee.style.animationPlayState = "running"; // Start animation
          } else {
            marquee.style.animationPlayState = "paused"; // Pause animation
          }
        });
      }, { threshold: 0.1 } // Adjust threshold for when to trigger
    );

    const section = document.querySelector(".section-logo");
    if (section) {
      observer.observe(section);
    }
  });
