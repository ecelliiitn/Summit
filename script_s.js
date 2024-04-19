document.addEventListener('DOMContentLoaded', () => {
    // Wait for the DOM content to be fully loaded
    const speakers = document.querySelectorAll(".speaker");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // Check if the element is intersecting with the viewport
          entry.target.classList.add('animate-speaker');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Lower threshold for triggering the animation
    });
  
    speakers.forEach(speaker => {
      observer.observe(speaker); // Observe each card
    });
  });
  