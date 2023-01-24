import createCardFilm from './templates/main-card';
import ApiService from './api';
import { Loading, Notify } from 'notiflix';
import { addPreloader } from './preloader.js';
import { PaginationButton } from './pagination';
import { scrollTop } from './button-up';

const inputEl = document.querySelector('.header__input');
const formEl = document.querySelector('.header__form');
const gallery = document.querySelector('.gallery__list');
const galleryMain = document.querySelector('.gallery');
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
        `We couldn't find a match on "${apiForInput.query}"" request.`
      );
      const pagination = document.querySelector('.pagination-buttons');
      if (pagination) {
        pagination.remove();
      }
    } else {
      Notify.success(`We have found ${response.total_results} options!`);
      const pagination = document.querySelector('.pagination-buttons');
      if (pagination) {
        pagination.remove();
      }

      const paginationButtonsChoice = new PaginationButton(
        response['total_pages']
      );
      paginationButtonsChoice.render(galleryMain);
      paginationButtonsChoice.onChange(async e => {
        scrollTop();
        apiForInput.page = e.target.value;
        addPreloader();
        const movies = await apiForInput.getMovieByQuery(apiForInput.query);
        const collection = createCardFilm(movies.results, genres);
        gallery.innerHTML = collection.join('');
        Loading.remove();
      });
    }
  } catch (error) {
    console.log(error);
  }
}
