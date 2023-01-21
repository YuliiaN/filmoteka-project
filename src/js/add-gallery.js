import ApiService from './api.js';
import createCardFilm from './templates/main-card.js';

const galleryList = document.querySelector('.gallery__list');

const addGalleryAPI = new ApiService();

async function addMovies() {
  try {
    const { results } = await addGalleryAPI.getPopularMovies();
    console.log(results);
    // galleryList.innerHTML = createCardFilm({ results });
      console.log(createCardFilm({ results }));
    galleryList.insertAdjacentHTML('beforeend', createCardFilm({ results }));
  } catch (error) {
    console.log(error);
  }
}
addMovies();
