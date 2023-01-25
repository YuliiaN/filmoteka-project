import ApiService from './api.js';
import createCardFilm from './templates/main-card.js';
import { PaginationButton } from './pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { addPreloader } from './preloader.js';
import { scrollTop } from './button-up';

const addGalleryAPI = new ApiService();
const gallery = document.querySelector('.gallery');
const galleryList = document.querySelector('.gallery__list');
addMovies();

async function addMovies() {
  try {
    addPreloader();
    const response = await addGalleryAPI.getPopularMovies();
    const genres = await addGalleryAPI.getGenresName();
    Loading.remove(100);
    const data = response.results;
    const collection = createCardFilm(data, genres);
    galleryList.innerHTML = collection.join('');

    // Пагінація
    const paginationButtons = new PaginationButton(response['total_pages']);
    paginationButtons.render(gallery);
    paginationButtons.onChange(async e => {
      scrollTop();
      addGalleryAPI.page = e.target.value;
      addPreloader();
      const movies = await addGalleryAPI.getPopularMovies();
      Loading.remove(300);
      const collection = createCardFilm(movies.results, genres);
      galleryList.innerHTML = collection.join('');
    });
  } catch (error) {
    console.log(error);
  }
}
