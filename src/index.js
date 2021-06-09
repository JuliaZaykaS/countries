import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import modal from "./css/modal.css";
import refs from "./js/refs.js";
import arr from "./db/countries.json";
import searchItemTemplate from "./template/countrySearchItem.hbs";
import modalItemTemplate from "./template/modalCountryItem.hbs";
import countriesListTemplate from "./template/countriesListItem.hbs";

// console.log('countries', arr);


const { formEl, searchResultEl, countriesListEl, modalEl, modalContentEl } = refs;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    let search = e.target.elements.search.value.toLowerCase();
    let country = arr.filter(elem => elem.name.toLowerCase().includes(search));
    // console.log(search);
    // console.log(country);
    let items = searchItemTemplate(country);
    // console.log(items);
    searchResultEl.insertAdjacentHTML('afterbegin', items);

    // Теперь вешаем слушатель событий по клику на каждый найденный элемент

    console.log([...searchResultEl.children]);
    [...searchResultEl.children].forEach(elem => {
        elem.addEventListener('click', (e) => {
            // console.log(e.target.textContent.trim());
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search);
            console.log(country);
            let items = modalItemTemplate(country);
            console.log(items);
            modalContentEl.insertAdjacentHTML('afterbegin', items);
            modalEl.classList.remove('is-hidden');
        })
    })


});

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

// Отрисовываем  список всех стран,
// при нажатии на любую открывается модалка с информацией о стране

window.addEventListener('DOMContentLoaded', () => {
    let items = countriesListTemplate(arr);
    countriesListEl.insertAdjacentHTML('afterbegin', items);
    [...countriesListEl.children].forEach((elem) => {
        elem.addEventListener('click', (e) => {
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search);
            let itemCountry = modalItemTemplate(country);
            modalContentEl.insertAdjacentHTML('afterbegin', itemCountry);
            modalEl.classList.remove('is-hidden');
        })

    })

    // должны отрисоваться все странцы по шаблону countrieslist,
    // передать массив arr, сохранить в переменную items,
    // полученную разметку вставить в countriesListEl,
    // на каждый элемент повесить слушатель событий, получить данные
    // и при открытии модалки отрисовывать
    // по textContent элемента сделать фильтр массива,
    // отфильстрованный массив передавать в modalItemTemplate для отрисовку

})





