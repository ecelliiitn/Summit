const menubtn = document.querySelector(".nav-menu-btn");
const closebtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});

closebtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});

const text =document.querySelector(".text-content");
window.addEventListener("load",()=>{
    text.classList.add("text-active");
});

setTimeout(function() {
    document.querySelector('.loading-animation').style.display = 'none';
    
  }, 4000);



  document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
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
         containers.forEach((container)=>{
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




  