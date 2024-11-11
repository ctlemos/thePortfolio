document.addEventListener("DOMContentLoaded", function() {
    const navbarHamburger = document.getElementById('navHamburger');
    const navbarMenu = document.getElementById('mainNav');
    const menuItems = document.getElementById('menu-items');

    // Toggle menu on hamburger click
    navbarHamburger.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarHamburger.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    menuItems.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarHamburger.classList.remove('active');
    });
});