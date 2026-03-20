/* ================================
MENU MOBILE
================================ */
function toggleMenu() {
    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("active");
}


/* ================================
SCROLL SUAVE
================================ */
function scrollParaCursos() {
    const section = document.querySelector("#cursos");
    if (section) section.scrollIntoView({ behavior: "smooth" });
}


/* ================================
MODAL CURSOS
================================ */
function abrirModal(titulo, resumo, lista, duracao) {

    const modal = document.getElementById("modalDetalhes");
    const ul = document.getElementById("modalLista");

    if (!modal || !ul) return;

    document.body.style.overflow = "hidden";

    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalSubtitulo").innerText = resumo;
    document.getElementById("modalDuracao").innerText = duracao;

    ul.innerHTML = "";

    lista.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;

        ul.appendChild(li);

    });

    modal.classList.add("ativo");

}

function fecharModal() {

    document.body.style.overflow = "auto";

    const modal = document.getElementById("modalDetalhes");

    if (modal) modal.classList.remove("ativo");

}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
});


/* ================================
WHATSAPP CURSOS
================================ */
function enviarWhats(curso) {

    const numero = "554784469429";

    const mensagem =
        `Olá! Tenho interesse no curso ${curso}. Poderia me enviar mais informações?`;

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}


/* ================================
AGENDAMENTO
================================ */
function abrirFormulario() {

    const form = document.getElementById("formAgendamento");

    if (!form) return;

    form.style.display = "block";

    setTimeout(() => {
        form.classList.add("ativo");
    }, 10);

}

function agendarWhats() {

    const nome = document.getElementById("nome")?.value || "";
    const telefone = document.getElementById("telefone")?.value || "";
    const procedimento = document.getElementById("procedimento")?.value || "";
    const mensagemExtra = document.getElementById("mensagem")?.value || "";

    const numero = "554784469429";

    const texto =
`Olá! Vim pelo site.
Meu nome é ${nome}
Telefone: ${telefone}
Quero agendar um horário para ${procedimento}
${mensagemExtra}`;

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

}


/* ================================
ANIMAÇÃO AO ENTRAR NA TELA
================================ */
const elementosAnimaveis = document.querySelectorAll(".animavel");

if (elementosAnimaveis.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("animar-entrada");

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.2 });

    elementosAnimaveis.forEach(el => observer.observe(el));

}


/* ================================
FAQ
================================ */
document.querySelectorAll(".faq-pergunta").forEach(pergunta => {

    pergunta.addEventListener("click", () => {

        pergunta.parentElement.classList.toggle("ativo");

    });

});


/* ================================
GALERIA (LIGHTBOX)
================================ */
const imagensGaleria = document.querySelectorAll(".galeria-item img");
const modalGaleria = document.getElementById("modalGaleria");
const imagemModal = document.getElementById("imagemModal");
const fecharModalGaleria = document.querySelector(".fechar-modal");

imagensGaleria.forEach(img => {

    img.addEventListener("click", () => {

        if (!modalGaleria || !imagemModal) return;

        modalGaleria.style.display = "flex";

        imagemModal.src = img.src;

    });

});

if (fecharModalGaleria) {

    fecharModalGaleria.addEventListener("click", () => {

        modalGaleria.style.display = "none";

    });

}

if (modalGaleria) {

    modalGaleria.addEventListener("click", (e) => {

        if (e.target === modalGaleria) {

            modalGaleria.style.display = "none";

        }

    });

}


/* ================================
SLIDER DEPOIMENTOS (COM DOTS)
================================ */
const sliderDep = document.querySelector(".slides");
const slidesDep = document.querySelectorAll(".slides .slide");
const dotsContainer = document.querySelector(".dots");

let depoIndex = 0;

if (sliderDep && slidesDep.length && dotsContainer) {

    slidesDep.forEach((_, i) => {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {

            depoIndex = i;

            atualizarDepoimentos();

        });

        dotsContainer.appendChild(dot);

    });

    function atualizarDepoimentos() {

        sliderDep.style.transform = `translateX(-${depoIndex * 100}%)`;

        const dots = dotsContainer.querySelectorAll(".dot");

        dots.forEach(dot => dot.classList.remove("active"));

        dots[depoIndex].classList.add("active");

    }

    setInterval(() => {

        depoIndex++;

        if (depoIndex >= slidesDep.length) {

            depoIndex = 0;

        }

        atualizarDepoimentos();

    }, 5000);

}


/* ================================
SLIDER CURSO DESTAQUE
================================ */
const slidesCurso = document.querySelectorAll(".curso-slider .slide");

let cursoIndex = 0;

function mostrarCurso(index) {

    slidesCurso.forEach((slide, i) => {

        slide.style.transform = `translateX(${100 * (i - index)}%)`;

    });

}

if (slidesCurso.length > 0) {

    mostrarCurso(cursoIndex);

    setInterval(() => {

        cursoIndex++;

        if (cursoIndex >= slidesCurso.length) {

            cursoIndex = 0;

        }

        mostrarCurso(cursoIndex);

    }, 3000);

}


/* ================================
CARROSSEL SOBRE
================================ */
const carouselSobre = document.getElementById("carouselSobre");

let sobreIndex = 0;

if (carouselSobre) {

    const totalSlides = carouselSobre.children.length;

    setInterval(() => {

        sobreIndex++;

        if (sobreIndex >= totalSlides) {

            sobreIndex = 0;

        }

        carouselSobre.style.transform =
            `translateX(-${sobreIndex * 100}%)`;

    }, 4000);

}
let index = 0;
const slider = document.getElementById("sliderDepoimentos");
const slides = document.querySelectorAll("#sliderDepoimentos .slide");

function moverSlide(){
    index++;

    if(index >= slides.length){
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moverSlide, 4000);