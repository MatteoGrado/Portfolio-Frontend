const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (menuButton && nav) {
    const closeMenu = () => {
        nav.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
            closeMenu();
        }
    });
}
