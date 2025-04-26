// app.js

// Toggle navbar menu on small screens
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

navbarToggle.addEventListener('click', function () {
    navbarNav.classList.toggle('show');
});

// Enroll Now button click event
const enrollButtons = document.querySelectorAll('.btn-primary');

enrollButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const courseTitle = e.target.closest('.card').querySelector('.card-title').textContent;
        alert(`You have enrolled in the ${courseTitle} course!`);
    });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Example of dynamic content - Show a welcome message after page load
window.addEventListener('load', () => {
    const welcomeMessage = document.querySelector('.hero p');
    welcomeMessage.textContent = 'Ready to start your learning journey with us? Choose from a variety of courses.';
});
window.onscroll = function() {
  let scrollBtn = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.classList.add('show');
  } else {
      scrollBtn.classList.remove('show');
  }
};

document.querySelector('.scroll-to-top').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
