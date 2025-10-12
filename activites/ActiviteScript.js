function changerLangue(select) {
    const langue = select.value;
    if (langue === "fr") {
        window.location.href = "activites.html"; // page française
    } else if (langue === "en") {
        window.location.href = "actifites_en.html"; // page anglaise
    }
}
