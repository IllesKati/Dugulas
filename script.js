/*hamburger-menu*/

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


/*Accordion*/

document.getElementById('headingOne').addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});





