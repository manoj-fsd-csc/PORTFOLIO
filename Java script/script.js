// JavaScript code to handle responsive behavior

// Function to toggle navigation menu on small screens
function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}

// Function to close navigation menu when a menu item is clicked
function closeMenu() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.remove('show');
        });
    });
}

// Call the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    closeMenu();
});
