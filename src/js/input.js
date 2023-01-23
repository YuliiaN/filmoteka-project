import createCardFilm from './templates/main-card';
import ApiService from './api';
import { Notify } from 'notiflix';

const inputEl = document.querySelector('.header__input');
const formEl = document.querySelector('.header__form');
const gallery = document.querySelector('.gallery__list');
const api = new ApiService();

formEl.addEventListener('submit', onFormSubmit);
async function onFormSubmit(event) {
  event.preventDefault();
  api.query = inputEl.value;
  try {
    const response = await api.getMovieByQuery(api.query);
    const genres = await api.getGenresName();
    const data = response.results;
    const moviesCollection = createCardFilm(data, genres);
    gallery.innerHTML = moviesCollection.join('');
    formEl.reset();
    if (!data.length) {
      Notify.failure(`We couldn't find a match on "${api.query}"" request`);
      const pagination = document.querySelector('.pagination-buttons');
      pagination.innerHTML = '';
    } else {
      Notify.success(`We have found ${response.total_results} options!`);
    }
  } catch (error) {
    console.log(error);
  }
}
