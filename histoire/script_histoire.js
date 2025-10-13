function changerLangue(select) {
    const langue = select.value;
    if (langue === "fr") {
        window.location.href = "histoire.html"; // page française
    } else if (langue === "en") {
        window.location.href = "histoire_en.html"; // page anglaise
    }
}


document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            document.querySelectorAll('.panel').forEach(p => p.style.maxHeight = null); // Ferme les autres
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
