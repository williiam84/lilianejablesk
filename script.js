/* ================================
INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {

/* ================================
MENU MOBILE
================================ */
const nav = document.getElementById("nav");
window.toggleMenu = () => {
    if (nav) nav.classList.toggle("active");
};

/* ================================
SCROLL SUAVE
================================ */
window.scrollParaCursos = () => {
    const section = document.querySelector("#cursos");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ================================
MODAL CURSOS
================================ */
const modal = document.getElementById("modalDetalhes");
const ul = document.getElementById("modalLista");

window.abrirModal = (titulo, resumo, lista, duracao) => {
    if (!modal || !ul) return;

    document.body.style.overflow = "hidden";

    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalSubtitulo").innerText = resumo;
    document.getElementById("modalDuracao").innerText = duracao;

    ul.innerHTML = lista.map(item =>
        `<li><i class="fa-solid fa-check"></i> ${item}</li>`
    ).join("");

    modal.classList.add("ativo");
};

window.fecharModal = () => {
    document.body.style.overflow = "auto";
    modal?.classList.remove("ativo");
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.fecharModal();
});

/* ================================
WHATSAPP
================================ */
const numero = "554784469429";

window.enviarWhats = (curso) => {
    const msg = `Olá! Tenho interesse no curso ${curso}. Poderia me enviar mais informações?`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, "_blank");
};

window.agendarWhats = () => {
    const nome = document.getElementById("nome")?.value || "";
    const telefone = document.getElementById("telefone")?.value || "";
    const procedimento = document.getElementById("procedimento")?.value || "";
    const mensagemExtra = document.getElementById("mensagem")?.value || "";

    const texto =
`Olá! Vim pelo site.
Meu nome é ${nome}
Telefone: ${telefone}
Quero agendar: ${procedimento}
${mensagemExtra}`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");
};

/* ================================
FORM AGENDAMENTO
================================ */
window.abrirFormulario = () => {
    const form = document.getElementById("formAgendamento");
    if (!form) return;

    form.style.display = "block";
    requestAnimationFrame(() => form.classList.add("ativo"));
};

/* ================================
ANIMAÇÃO (OTIMIZADA)
================================ */
const elementos = document.querySelectorAll(".animavel");

if (elementos.length) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animar-entrada");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
}

/* ================================
FAQ
================================ */
document.querySelectorAll(".faq-pergunta").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("ativo");
    });
});

/* ================================
GALERIA (LIGHTBOX)
================================ */
const modalGaleria = document.getElementById("modalGaleria");
const imagemModal = document.getElementById("imagemModal");

document.querySelectorAll(".galeria-item img").forEach(img => {
    img.addEventListener("click", () => {
        if (!modalGaleria || !imagemModal) return;
        modalGaleria.style.display = "flex";
        imagemModal.src = img.src;
    });
});

document.querySelectorAll(".fechar-modal").forEach(btn => {
    btn.addEventListener("click", () => modalGaleria.style.display = "none");
});

modalGaleria?.addEventListener("click", (e) => {
    if (e.target === modalGaleria) modalGaleria.style.display = "none";
});

/* ================================
SLIDER DEPOIMENTOS (OTIMIZADO)
================================ */
const sliderDep = document.querySelector(".slides");
const slidesDep = document.querySelectorAll(".slides .slide");
const dotsContainer = document.querySelector(".dots");

let depoIndex = 0;
let intervaloDep;

if (sliderDep && slidesDep.length && dotsContainer) {

    slidesDep.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            depoIndex = i;
            updateDep();
        });

        dotsContainer.appendChild(dot);
    });

    function updateDep() {
        sliderDep.style.transform = `translateX(-${depoIndex * 100}%)`;
        dotsContainer.querySelectorAll(".dot")
            .forEach(d => d.classList.remove("active"));
        dotsContainer.children[depoIndex].classList.add("active");
    }

    function autoDep() {
        depoIndex = (depoIndex + 1) % slidesDep.length;
        updateDep();
    }

    intervaloDep = setInterval(autoDep, 5000);

    sliderDep.addEventListener("mouseenter", () => clearInterval(intervaloDep));
    sliderDep.addEventListener("mouseleave", () => intervaloDep = setInterval(autoDep, 5000));
}

/* ================================
SLIDER CURSO DESTAQUE
================================ */
const slidesCurso = document.querySelectorAll(".curso-slider .slide");
let cursoIndex = 0;

function atualizarCurso() {
    slidesCurso.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - cursoIndex)}%)`;
    });
}

if (slidesCurso.length) {
    atualizarCurso();

    setInterval(() => {
        cursoIndex = (cursoIndex + 1) % slidesCurso.length;
        atualizarCurso();
    }, 4000);
}

/* ================================
CARROSSEL SOBRE
================================ */
const carousel = document.getElementById("carouselSobre");

if (carousel) {
    let index = 0;
    const total = carousel.children.length;

    setInterval(() => {
        index = (index + 1) % total;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
}

});