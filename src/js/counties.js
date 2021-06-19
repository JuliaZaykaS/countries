import refs from "./refs.js";
import searchItemTemplate from "../template/countrySearchItem.hbs";
import modalItemTemplate from "../template/modalCountryItem.hbs";
import countriesListTemplate from "../template/countriesListItem.hbs";
import arr from "../db/countries.json";

const { formEl, searchResultEl, countriesListEl, modalEl, modalContentEl } = refs;

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    let search = e.target.elements.search.value.toLowerCase();

    let country = arr.filter(elem => elem.name.toLowerCase().includes(search));

    let items = searchItemTemplate(country);

    searchResultEl.insertAdjacentHTML('afterbegin', items);

    // Теперь вешаем слушатель событий по клику на каждый найденный элемент

    [...searchResultEl.children].forEach(elem => {
        elem.addEventListener('click', (e) => {
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search);

            let items = modalItemTemplate(country);

            modalContentEl.insertAdjacentHTML('afterbegin', items);
            modalEl.classList.remove('is-hidden');
        })
    })
});

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