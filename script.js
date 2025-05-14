
function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    const isEnglish = elements[0].textContent === elements[0].getAttribute('data-en');
    elements.forEach(el => {
        el.textContent = isEnglish ? el.getAttribute('data-gr') : el.getAttribute('data-en');
    });
}
