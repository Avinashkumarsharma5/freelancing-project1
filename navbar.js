// navbar.js

// Function to toggle the mobile menu when the navbar toggler button is clicked
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add event listener to toggle the collapse class when the navbar toggler is clicked
navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
});

// Optionally, add smooth scrolling to the sections for better UX
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Account for the fixed navbar height
            behavior: 'smooth'
        });
    });
});
