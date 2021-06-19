import axiosFetch from "./fetch/axiosFetch.js";
import pexelsFetch from "./fetch/clientFetch.js";
import classicFetch from './fetch/classicFetch.js';
import createGallery from "./createGallery.js";

import refs from "./refs.js";
const { formEl } = refs;



const key = '563492ad6f917000010000018440f741ec6d4f2f820955cbe8aa670b';
const perPage = 10;
const BASE_URL = 'https://api.pexels.com/';
// const query = 'horse';

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = e.target.elements.search.value.toLowerCase();
    const queryParams = `v1/search?query=${search}&per_page=${perPage}`;
    // axiosFetch(BASE_URL+queryParams, key, createGallery, formEl);
    pexelsFetch(key, search, perPage, createGallery, formEl);
    // classicFetch(key, BASE_URL + queryParams, createGallery, formEl);



})
