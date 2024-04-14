const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", () => {
  navigation.classList.add("active");
  // Check if the element exists before applying the backdrop-filter property
  const navBar = document.querySelector('header .nav-bar');
  if (navBar) {
    // Apply the backdrop-filter property
    navBar.style.backdropFilter = 'none';
  }
 });

closebtn.addEventListener("click", () => {
  navigation.classList.remove("active");
   // Check if the element exists before applying the backdrop-filter property
   const navBar = document.querySelector('header .nav-bar');
   if (navBar) {
     // Apply the backdrop-filter property
     navBar.style.backdropFilter = 'blur(10px)';
   }
});

// const text = document.querySelector(".text-content");
// window.addEventListener("load", () => {
//   text.classList.add("text-active");
// });

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



document.querySelectorAll('.nav-items a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    navigation.classList.remove("active");
    // Check if the element exists before applying the backdrop-filter property
   const navBar = document.querySelector('header .nav-bar');
   if (navBar) {
     // Apply the backdrop-filter property
     navBar.style.backdropFilter = 'blur(10px)';
   }
    const href = this.getAttribute('href');
    const isLastThreeSections = href === 'Blog1.html' || href === 'contact.html' || href === 'Sponsor.html';

    // Prevent default behavior only if the anchor is not for the last three sections
    if (!isLastThreeSections) {
      e.preventDefault();
    }
    // Get the ID of the target section
    
    const targetId = this.getAttribute('href').substring(1);

    // Find the target element by ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the scroll position, considering any fixed headers
      let headerHeight = document.querySelector('.title').offsetHeight; // Adjust this selector as needed
       // Check screen width
       const screenWidth = window.innerWidth;

       // Adjust header height based on screen width
       if (screenWidth < 768) {
         headerHeight -= 100; // Subtract 20 pixels for smaller screens
       }
      const scrollPosition = targetElement.offsetTop - headerHeight;
     

      // Scroll to the target section with smooth behavior
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
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



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}