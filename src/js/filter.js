import { addPreloader } from './preloader';
import createCardFilm from './templates/main-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { PaginationButton } from './pagination';
import { scrollTop } from './button-up';
import ApiService from './api';

const API = new ApiService();
const gallery = document.querySelector('.gallery');
const galleryList = document.querySelector('.gallery__list');
const filterButton = document.querySelector('.filter-button');
const formFilter = document.querySelector('.form-filter');

filterButton.addEventListener('click', () => {
  formFilter.classList.toggle('is-hidden');
});

formFilter.addEventListener('change', (e) => {
  addMovies(e.target.value);
});

async function addMovies(genre) {
  try {
    addPreloader();
    const response = await API.getMoviesByGenre(genre);
    const genres = await API.getGenresName();
    const data = response.results;
    const collection = createCardFilm(data, genres);
    galleryList.innerHTML = collection.join('');
    Loading.remove();

    // Пагінація
    const pagination = document.querySelector('.pagination-buttons');
    if (pagination) {
      pagination.remove();
    }
    const paginationButtons = new PaginationButton(response['total_pages']);
    paginationButtons.render(gallery);
    paginationButtons.onChange(async e => {
      scrollTop();
      API.page = e.target.value;
      addPreloader();
      const movies = await API.getPopularMovies();
      const collection = createCardFilm(movies.results, genres);
      galleryList.innerHTML = collection.join('');
      Loading.remove();
    });
  } catch (error) {
    console.log(error);
  }
}
