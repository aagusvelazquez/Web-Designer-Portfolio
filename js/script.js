/**
 * autora: Agustina Velazquez
 * version: 1.0
 * fecha:  31/05/24
 * El siguiente script sirve a index.html
 */

/* ============ Animación de Tipeo ============ */
let typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer"],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true
});

/* ============ Aside ============ */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSelection = document.querySelectorAll(".section"),
    totalSection = allSelection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function addBackSection(num) {
    allSelection[num].classList.add("back-section");
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSelection[i].classList.remove("back-section");
    }
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSelection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navToglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navToglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navToglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSelection[i].classList.toggle("open");
    }
}

/* ============ Modal con Certificaciones ============ */
function mostrarCertificado(certificadoID) {
    const modal = document.getElementById(`product-modal-${certificadoID}`);
    modal.style.display = "block";
}

function cerrarModal(certificadoID) {
    const modal = document.getElementById(`product-modal-${certificadoID}`);
    modal.style.display = "none";
}

/* ============ Enviar correo de #contacto ============ */
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const btnEnviar = document.getElementById("btn-contact");
    btnEnviar.textContent = 'Enviando Mensaje...';
    const serviceID = 'default_service';
    const templateEnvio = 'template_e1odu0p';
    const templateRespuestaAuto = 'template_rczre8c';

    emailjs.sendForm(serviceID, templateEnvio, this)
        .then(() => {
            btnEnviar.textContent = 'Enviar Mensaje';
            Swal.fire({
                title: "¡Tu mensaje se ha enviado con éxito!",
                text: "Me comunicaré con vos a la brevedad.",
                icon: "success"
            });
            document.getElementById('contact-form').reset();
        }, (err) => {
            btnEnviar.textContent = 'Enviar Mensaje';
            alert(JSON.stringify(err));
            document.getElementById('contact-form').reset();
        });

    emailjs.sendForm(serviceID, templateRespuestaAuto, this)
        .then(() => {
            console.log("ENVIO EXITOSO DE RESPUESTA AUTOMATICA.")
        }, (err) => {
            alert(JSON.stringify(err));
        });
        
});