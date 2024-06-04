/**
 * autora: Agustina Velazquez
 * version: 1.0
 * fecha:  31/05/24
 * El siguiente script sirve a index.html
 */

/* ============ Toggle Stlye Switcher ============ */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Esconder el Selector de Estilos al hacer scroll
document.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");  
    };
});
/* ============ Colores de Tema ============ */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        };
    });
};

/* ============ Tema Claro y Oscuro ============ */
const dayNight = document.querySelector(".day-nigth");

dayNight.addEventListener("click", ()=> {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});