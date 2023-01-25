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
let moviesCollection = [];

watchedBtn.addEventListener('click', getWatchedMovies);
queueBtn.addEventListener('click', getQueueMovies);
getWatchedMovies();

async function getWatchedMovies() {
  queueBtn.classList.remove(activeClass);
  watchedBtn.classList.add(activeClass);

  if (!localStorage.getItem(KEY_WATCHED)) {
    libraryGallery.innerHTML = '';
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
  }
}

async function getQueueMovies() {
  watchedBtn.classList.remove(activeClass);
  queueBtn.classList.add(activeClass);

  if (!localStorage.getItem(KEY_QUEUE)) {
    libraryGallery.innerHTML = '';
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
  }
}

// import ApiService from './api.js';
// import { KEY_WATCHED, KEY_QUEUE } from './into-local-storage.js';
// // import { addPreloader } from './preloader';
// // import { Notify, Loading } from 'notiflix';
// import { renderLibrary } from './templates/library-card.js';

// const libraryApi = new ApiService();
// export const libraryWatched = document.querySelector('.button__watched');
// export const libraryQueue = document.querySelector('.button__queue');
// let moviesCollection = [];
// const libraryGallery = document.querySelector('.gallery__list');

// libraryWatched.addEventListener('click', getWatchedMovies);
// libraryQueue.addEventListener('click', getQueueMovies);
// getWatchedMovies();

// async function getWatchedMovies() {
//   if (!localStorage.getItem(KEY_WATCHED)) {
//     libraryGallery.innerHTML = '';
//     return;
//   }
//   const data = JSON.parse(localStorage.getItem(KEY_WATCHED));
//   const responses = data.map(async item => {
//     const response = await libraryApi.getMovieDetails(item.id);

//     return response;
//   });

//   moviesCollection = await Promise.all(responses);
//   const arrMarkup = renderLibrary(moviesCollection);
//   libraryGallery.innerHTML = arrMarkup.join('');
// }

// async function getQueueMovies() {
//   if (!localStorage.getItem(KEY_QUEUE)) {
//     libraryGallery.innerHTML = '';
//     return;
//   }
//   const data = JSON.parse(localStorage.getItem(KEY_QUEUE));
//   const responses = data.map(async item => {
//     const response = await libraryApi.getMovieDetails(item.id);

//     return response;
//   });

//   moviesCollection = await Promise.all(responses);
//   const arrMarkup = renderLibrary(moviesCollection);
//   libraryGallery.innerHTML = arrMarkup.join('');
// }
