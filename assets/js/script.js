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