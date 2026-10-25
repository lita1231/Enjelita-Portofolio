
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Tombol menu atau navigasi tidak ditemukan.");
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
        });
    });
});
