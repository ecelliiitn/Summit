const navigation = document.querySelector(".navigation");
const navBar = document.querySelector('header .nav-bar');
const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navItems = document.querySelectorAll('.nav-items a');

// Function to handle navigation state and backdrop filter
function toggleNavigation(active, blur) {
  navigation.classList.toggle("active", active);
  if (navBar) {
    navBar.style.backdropFilter = blur ? 'blur(10px)' : 'none';
  }
}

// Event listener for menu button
menubtn.addEventListener("click", () => {
  toggleNavigation(true, false);
});

// Event listener for close button
closebtn.addEventListener("click", () => {
  toggleNavigation(false, true);
});

// Event listener for navigation links
navItems.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    toggleNavigation(false, true);
    const href = this.getAttribute('href');
    const isLastThreeSections = href === 'Blog1.html' || href === 'contact.html' || href === 'Sponsor.html';
    if (!isLastThreeSections) {
      e.preventDefault();
    }
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let headerHeight = document.querySelector('.title').offsetHeight;
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        headerHeight -= 100;
      }
      const scrollPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
});


window.addEventListener('DOMContentLoaded', function() {
  var hasAnimationPlayed = sessionStorage.getItem('hasAnimationPlayed');
  
  if (!hasAnimationPlayed) {
      // Perform the animation if it hasn't been played before
      setTimeout(function() {
          document.querySelector('.loading-animation').style.display = 'none';
      }, 4000);
      // Set a flag in sessionStorage to indicate that the animation has been played
      sessionStorage.setItem('hasAnimationPlayed', true);
  } else {
      // If the animation has been played before, hide the loading animation immediately
      document.querySelector('.loading-animation').style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline');
  const containers = document.querySelectorAll('.container');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        const timelineLine = timeline.classList.add('animate-timeline');
        // Add class to trigger animation
        containers.forEach((container) => {
          const containerl = container.classList.add('animate-container');
        })
      }
    });
  });

  observer.observe(timeline);
});

document.addEventListener('DOMContentLoaded', () => {
  // Wait for the DOM content to be fully loaded
  const speakers = document.querySelectorAll(".about-section .about-us");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Check if the element is intersecting with the viewport
        entry.target.classList.add('animate-about-us');
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


const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryContainer1 = document.querySelector('.gallery-container1');
const galleryControlsContainer1 = document.querySelector('.gallery-controls1');
const galleryControls1 = ['previous', 'next'];
const galleryItems1 = document.querySelectorAll('.gallery-item1');

class Carousel {
  constructor(container, items, controls, galleryControlsContainero) {
    this.CarouselgalleryControlsContainero = galleryControlsContainero;
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.touchStartX = null;
    this.touchEndX = null;
    this.isMobile = this.detectMobile(); // Detect if the user is on a mobile device
  }

  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    })

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    })
  }

  setCurrentState(direction) {
    if (direction === 'previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls(e) {
    this.carouselControls.forEach(control => {
      const button = document.createElement('button');
      button.className = `gallery-controls${e}-${control}`;
      button.innerText; // Set button text
      this.CarouselgalleryControlsContainero.appendChild(button);
    });
    
  }

  useControls(e) {
    this.carouselControls.forEach(control => {
      const button = document.querySelector(`.gallery-controls${e}-${control}`);
      button.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }

  // Function to handle touch start
  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
  }

  // Function to handle touch end
  handleTouchEnd(event) {
    this.touchEndX = event.changedTouches[0].clientX;
    const touchDiff = this.touchStartX - this.touchEndX;
    const sensitivity = 50; // Adjust sensitivity as needed

    if (touchDiff > sensitivity) {
      // Swipe right to left (next)
      this.setCurrentState('next');
    } else if (touchDiff < -sensitivity) {
      // Swipe left to right (previous)
      this.setCurrentState('previous');
    }
  }

  // Function to initialize touch events only for mobile devices
  initTouchEvents() {
    if (this.isMobile) {
      this.carouselContainer.addEventListener('touchstart', this.handleTouchStart.bind(this));
      this.carouselContainer.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }
  }

  // Function to detect if the user is on a mobile device
  detectMobile() {
    return window.innerWidth <= 768; // Adjust threshold as needed
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls,galleryControlsContainer);
const exampleCarousel1 = new Carousel(galleryContainer1, galleryItems1, galleryControls1,galleryControlsContainer1);
exampleCarousel.setControls('');
exampleCarousel.useControls('');
exampleCarousel.initTouchEvents(); // Initialize touch events for sliding gesture only for mobile devices
exampleCarousel1.setControls('1');
exampleCarousel1.useControls('1');
exampleCarousel1.initTouchEvents();



// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  // Check if the clicked element is not a dropbtn
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    // Iterate over dropdowns to close those that are open
    Array.from(dropdowns).forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};
