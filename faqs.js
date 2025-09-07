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
document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                 document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.classList.remove('show');
                });
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            });
        });