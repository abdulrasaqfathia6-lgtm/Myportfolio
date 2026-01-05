const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign")

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.add("active");
    })
})

  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x'); // switch to "X" icon when open
  });



// Loading screen fade-out
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-screen");
  loader.classList.add("hide");
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


