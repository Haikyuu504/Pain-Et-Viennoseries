document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menu-btn');
  
  if (!nav.contains(event.target) && !menuBtn.contains(event.target) && nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: 'smooth'
      });
      
      if (window.innerWidth < 768) {
        document.getElementById('nav').classList.remove('active');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.style.transition = 'opacity 0.3s';
    img.style.opacity = '0';
    
    img.onload = function() {
      this.style.opacity = '1';
    };
    
    if (img.complete) {
      img.style.opacity = '1';
    }
  });
});