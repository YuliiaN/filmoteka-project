import ApiService from './api.js';
import { renderLibrary } from './templates/library-card.js';
import { KEY_WATCHED, KEY_QUEUE } from './into-local-storage.js';
import { Loading } from 'notiflix';
import { addPreloader } from './preloader.js';

const addGalleryAPI = new ApiService();

const watchedBtn = document.querySelector('.library__button-watched');
const queueBtn = document.querySelector('.library__button-queue');
const libraryGallery = document.querySelector('.gallery__list');
const activeClass = 'library__button-active';
const nothingYetPic = document.querySelector('.nothing_yet');
let moviesCollection = [];

watchedBtn.addEventListener('click', getWatchedMovies);
queueBtn.addEventListener('click', getQueueMovies);
getWatchedMovies();

async function getWatchedMovies() {
  queueBtn.classList.remove(activeClass);
  watchedBtn.classList.add(activeClass);

  if (!localStorage.getItem(KEY_WATCHED)) {
    libraryGallery.innerHTML = '';
    nothingYetPic.classList.add('nothing_yet-visible');
    return;
  } else {
    addPreloader();
    const watchedId = JSON.parse(localStorage.getItem(KEY_WATCHED));
    const responses = watchedId.map(async item => {
      const response = await addGalleryAPI.getMovieDetails(item.id);
      return response;
    });
    moviesCollection = await Promise.all(responses);
    Loading.remove(300);
    const markup = renderLibrary(moviesCollection);
    libraryGallery.innerHTML = markup.join('');
    nothingYetPic.classList.remove('nothing_yet-visible');
  }
}

async function getQueueMovies() {
  watchedBtn.classList.remove(activeClass);
  queueBtn.classList.add(activeClass);

  if (!localStorage.getItem(KEY_QUEUE)) {
    libraryGallery.innerHTML = '';
    nothingYetPic.classList.add('nothing_yet-visible');
    return;
  } else {
    addPreloader();
    const queueId = JSON.parse(localStorage.getItem(KEY_QUEUE));
    const responses = queueId.map(async item => {
      const response = await addGalleryAPI.getMovieDetails(item.id);
      return response;
    });
    moviesCollection = await Promise.all(responses);
    Loading.remove(300);
    const markup = renderLibrary(moviesCollection);
    libraryGallery.innerHTML = markup.join('');
    nothingYetPic.classList.remove('nothing_yet-visible');
  }
}
