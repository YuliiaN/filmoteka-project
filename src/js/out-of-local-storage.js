import ApiService from './api.js';
import { renderLibrary } from './templates/library-card.js';
import { KEY_WATCHED, KEY_QUEUE } from './into-local-storage.js';

const addGalleryAPI = new ApiService();

const watchedBtn = document.querySelector('.button__watched');
const queueBtn = document.querySelector('.button__queue');
const libraryGallery = document.querySelector('.gallery__list');
let moviesCollection = [];

watchedBtn.addEventListener('click', getWatchedMovies);
queueBtn.addEventListener('click', getQueueMovies);
getWatchedMovies();

async function getWatchedMovies() {
  if (!localStorage.getItem(KEY_WATCHED)) {
    libraryGallery.innerHTML = '';
    return;
  } else {
    const watchedId = JSON.parse(localStorage.getItem(KEY_WATCHED));
    const responses = watchedId.map(async item => {
      const response = await addGalleryAPI.getMovieDetails(item.id);
      return response;
    });
    moviesCollection = await Promise.all(responses);
    const markup = renderLibrary(moviesCollection);
    libraryGallery.innerHTML = markup.join('');
  }
}

async function getQueueMovies() {
  if (!localStorage.getItem(KEY_QUEUE)) {
    libraryGallery.innerHTML = '';
    return;
  } else {
    const queueId = JSON.parse(localStorage.getItem(KEY_QUEUE));
    const responses = queueId.map(async item => {
      const response = await addGalleryAPI.getMovieDetails(item.id);
      return response;
    });
    moviesCollection = await Promise.all(responses);
    const markup = renderLibrary(moviesCollection);
    libraryGallery.innerHTML = markup.join('');
  }
}
