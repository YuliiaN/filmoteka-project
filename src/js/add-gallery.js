import ApiService from './api.js';
import createCardFilm from './templates/main-card.js';
import { PaginationButton } from './pagination';

const addGalleryAPI = new ApiService();
const gallery = document.querySelector('.gallery');
const galleryList = document.querySelector('.gallery__list');
addMovies();

async function addMovies() {
  try {
    const response = await addGalleryAPI.getPopularMovies();
    const data = response.results;
    const collection = createCardFilm(data);
    galleryList.innerHTML = collection.join('');

    // Пагінація
    const paginationButtons = new PaginationButton(response['total_pages'] );
    paginationButtons.render(gallery);
    paginationButtons.onChange(async e => {
      addGalleryAPI.page = e.target.value;
      const movies = await addGalleryAPI.getPopularMovies();
      const collection = createCardFilm(movies.results);
      galleryList.innerHTML = collection.join('');
    });
  } catch (error) {
    console.log(error);
  }
}
