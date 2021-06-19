import refs from "./refs.js";

const { modalEl, modalContentEl } = refs;

window.addEventListener('keydown', (e) => {
    console.log(e.code);
    if (e.code === 'Escape') {
        modalEl.classList.add('is-hidden');
        modalContentEl.innerHTML = '';
    }
});

modalEl.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    // if (e.target.id === 'modal') {

    modalEl.classList.add('is-hidden');
    modalContentEl.innerHTML = '';
    // }


});

