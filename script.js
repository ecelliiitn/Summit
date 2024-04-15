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

  const speakers = document.querySelectorAll(".speaker");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {

        const containero = entry.target.classList.add('animate-speaker');

      }
    });
  });

  speakers.forEach(speaker => {
    observer.observe(speaker); // Observe each card
  });
});




const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
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
    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      const button = document.createElement('button');
      button.className = `gallery-controls-${control}`;
      button.innerText ;
      galleryControlsContainer.appendChild(button);
    });
  }

  useControls() {
    this.carouselControls.forEach(control => {
      const button = document.querySelector(`.gallery-controls-${control}`);
      button.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(button);
      });
    });
  }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();



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
