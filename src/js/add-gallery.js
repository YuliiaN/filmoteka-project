import ApiService from './api.js';
import createCardFilm from './templates/main-card.js';

const addGalleryAPI = new ApiService();
const galleryList = document.querySelector('.gallery__list');
addMovies();

async function addMovies() {
  try {
    const response = await addGalleryAPI.getPopularMovies();
    const data = response.results;
    const collection = createCardFilm(data);
    galleryList.innerHTML = collection.join('');
  } catch (error) {
    console.log(error);
  }
}
