function changerLangue(select) {
    const langue = select.value;
    if (langue === "fr") {
        window.location.href = "histoire.html"; // page française
    } else if (langue === "en") {
        window.location.href = "histoire_en.html"; // page anglaise
    }
}
