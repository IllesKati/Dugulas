/*hamburger-menu*/

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburgerMenu.classList.toggle("active");
        });

        /* Mobilon a menupont valasztasa utan a menu csukodjon ossze,
           hogy a kivant szakasz (pl. "Arak" cim) lathato legyen.
           A hamburger is visszavalt + jelre, különben nyitott állapot
           mutatna a becsukott menu felett. */
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                hamburgerMenu.classList.remove("active");
            });
        });
    }
});





