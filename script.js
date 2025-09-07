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