document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".logo_component");

  if (!marquee) {
    console.error("Marquee element not found.");
    return;
  }

  // Create the Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Marquee in view: starting animation.");
          marquee.style.animationPlayState = "running"; // Start animation
        } else {
          console.log("Marquee out of view: pausing animation.");
          marquee.style.animationPlayState = "paused"; // Pause animation
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe the section-logo container
  const section = document.querySelector(".section-logo");
  if (section) {
    observer.observe(section);
  } else {
    console.error("Section logo not found.");
  }
});