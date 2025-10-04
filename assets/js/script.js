const menuIcon = document.getElementById('menuIcon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuIcon.classList.remove('active');
        nav.classList.remove('active');
    });
});

  const counters = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const target = +counter.dataset.target;
            const step = target / 100;
            let count = 0;
            const update = () => {
              count += step;
              if (count < target) {
                counter.textContent = Math.floor(count);
                requestAnimationFrame(update);
              } else {
                counter.textContent = target;
              }
            };
            update();
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(document.querySelector('.stats'));