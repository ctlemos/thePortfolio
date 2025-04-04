/* DROPDOWN MENU */
if (window.matchMedia("(max-width: 821px)").matches) {
    document.addEventListener("DOMContentLoaded", () => {
        const dropdowns = document.querySelectorAll(".dropdown");
    
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener("click", (e) => {
            // Fecha outros dropdowns se houver mais que um
            dropdowns.forEach(d => {
              if (d !== dropdown) d.classList.remove("open");
            });
    
            // Toggle o dropdown clicado
            dropdown.classList.toggle("open");
    
            // Impede que cliques em links dentro fechem imediatamente
            e.stopPropagation();
          });
        });
    
        // Fecha o dropdown se clicares fora
        document.addEventListener("click", () => {
          dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
        });
    });
}

/* HAMBURGER MENU */
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