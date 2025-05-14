
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const current = el.innerText;
    const en = el.getAttribute('data-en');
    const gr = el.getAttribute('data-gr');
    el.innerText = current === en ? gr : en;
  });
}
