function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

/* Scroll suave para cursos */
function scrollParaCursos() {
    document.querySelector('#cursos').scrollIntoView({
        behavior: 'smooth'
    });
}

/* ===== MODAL ===== */

function abrirModal(titulo, resumo, lista, duracao) {

    // Travar scroll do body
    document.body.style.overflow = "hidden";

    // Preencher dados
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalSubtitulo").innerText = resumo;
    document.getElementById("modalDuracao").innerText = duracao;

    const ul = document.getElementById("modalLista");
    ul.innerHTML = "";

    lista.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
        ul.appendChild(li);
    });

    // Abrir modal
    document.getElementById("modalDetalhes").classList.add("ativo");
}

function fecharModal() {
    document.body.style.overflow = "auto";
    document.getElementById("modalDetalhes").classList.remove("ativo");
}

/* Fechar modal ao pressionar ESC */
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        fecharModal();
    }
});
/* ===== SLIDER DEPOIMENTOS ===== */

const wrapper = document.getElementById("depoimentosWrapper");
const dotsContainer = document.getElementById("depoimentosDots");
const slides = document.querySelectorAll(".depoimento-card");

let currentIndex = 0;
let interval;

function criarDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => {
            currentIndex = index;
            atualizarSlider();
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function atualizarSlider() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll(".depoimentos-dots span")
        .forEach(dot => dot.classList.remove("active"));

    dotsContainer.children[currentIndex].classList.add("active");
}

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    atualizarSlider();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 5000);
}

criarDots();
atualizarSlider();
interval = setInterval(autoSlide, 5000);
function enviarWhats(curso) {
    const numero = "554784469429"; // COLOQUE O NÚMERO AQUI (com DDI 55)
    const mensagem = `Olá! Tenho interesse no curso ${curso}. Poderia me enviar mais informações?`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(link, "_blank");
}
enviarWhats();
// ===============================
// ANIMAÇÃO DE ENTRADA UNIVERSAL
// ===============================
const elementosAnimaveis = document.querySelectorAll(".animavel");

const observerUniversal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animar-entrada");
            observerUniversal.unobserve(entry.target); // anima uma vez
        }
    });
}, {
    threshold: 0.2 // entra quando 20% do elemento está visível
});

// Observa todos os elementos animáveis
elementosAnimaveis.forEach(el => observerUniversal.observe(el));

// FAQ toggle
document.querySelectorAll(".faq-pergunta").forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        const item = pergunta.parentElement;
        item.classList.toggle("ativo");
    });
});
const imagens = document.querySelectorAll(".galeria-item img");
const modal = document.getElementById("modalGaleria");
const imagemModal = document.getElementById("imagemModal");
const fechar = document.querySelector(".fechar-modal");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        imagemModal.src = img.src;
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});