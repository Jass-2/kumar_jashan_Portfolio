export const initializeNavigation = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const hamburgerTablet = document.querySelector('#button-tablet');

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    if (hamburgerTablet && navMenu) {
        hamburgerTablet.addEventListener("click", () => {
            hamburgerTablet.classList.toggle("expanded");
            navMenu.classList.toggle("active-tablet");
        });
    }
};