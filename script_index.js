const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
let index = 0;
const total = images.length;
let autoSlide;

function showSlide(i) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    index = (i + total) % total;
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 10000); // 10 secondes
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Démarrage automatique
startAutoSlide();


function changerLangue(select) {
    const langue = select.value;
    if (langue === "fr") {
        window.location.href = "index.html"; // page française
    } else if (langue === "en") {
        window.location.href = "index_en.html"; // page anglaise
    }
}
