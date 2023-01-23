import createCardFilm from './templates/main-card';
import ApiService from './api';
import { Notify, Loading } from 'notiflix';
import { addPreloader } from './preloader.js';

const inputEl = document.querySelector('.header__input');
const formEl = document.querySelector('.header__form');
const gallery = document.querySelector('.gallery__list');
const apiForInput = new ApiService();

formEl.addEventListener('submit', onFormSubmit);
async function onFormSubmit(event) {
  event.preventDefault();
  apiForInput.query = inputEl.value;
  try {
    addPreloader();
    const response = await apiForInput.getMovieByQuery(apiForInput.query);
    const genres = await apiForInput.getGenresName();
    Loading.remove();
    const data = response.results;
    const moviesCollection = createCardFilm(data, genres);
    gallery.innerHTML = moviesCollection.join('');
    formEl.reset();
    if (!data.length) {
      Notify.failure(
        `We couldn't find a match on "${apiForInput.query}"" request`
      );
      const pagination = document.querySelector('.pagination-buttons');
      pagination.innerHTML = '';
    } else {
      Notify.success(`We have found ${response.total_results} options!`);
    }
  } catch (error) {
    console.log(error);
  }
}
