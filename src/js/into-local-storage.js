import ApiService from './api';
import { Notify } from 'notiflix';

export const KEY_WATCHED = 'watched';
export const KEY_QUEUE = 'queue';
const storageApi = new ApiService();
const activeClassName = 'modal-btn-active';
let moviesWatched = [];
let moviesQueue = [];

checkStorageState();

export function chooseButton(event) {
  const target = event.target;
  const type = target.dataset.button;
  const movie = {
    id: target.closest('.modal').dataset.id,
  };

  switch (type) {
    case 'watched':
      const watchedIDs = moviesWatched.map(item => item.id);
      if (watchedIDs.includes(movie.id)) {
        const watchedInd = watchedIDs.indexOf(movie.id);
        moviesWatched.splice(watchedInd, 1);
        setRemoveNotify(movie.id);
        target.classList.remove(activeClassName);
        target.textContent = 'add to watched';
        saveToWatched();
        return;
      } else {
        setAddNotify(movie.id);
        target.classList.add(activeClassName);
        target.textContent = 'remove from watched';
        moviesWatched.push(movie);
        saveToWatched();
      }
      break;
    case 'queue':
      const queueIDs = moviesQueue.map(item => item.id);
      if (queueIDs.includes(movie.id)) {
        const queueInd = queueIDs.indexOf(movie.id);
        moviesQueue.splice(queueInd, 1);
        setRemoveNotify(movie.id);
        target.classList.remove(activeClassName);
        target.textContent = 'add to queue';
        saveToQueue();
        return;
      } else {
        setAddNotify(movie.id);
        target.classList.add(activeClassName);
        target.textContent = 'remove from queue';
        moviesQueue.push(movie);
        saveToQueue();
      }
  }
}

function saveToWatched() {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatched));
}

function saveToQueue() {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueue));
}

function checkStorageState() {
  if (!localStorage.length) {
    return;
  }

  if (localStorage.getItem(KEY_WATCHED)) {
    moviesWatched = JSON.parse(localStorage.getItem(KEY_WATCHED));
    if (!moviesWatched.length) {
      localStorage.removeItem(KEY_WATCHED);
    }
  }

  if (localStorage.getItem(KEY_QUEUE)) {
    moviesQueue = JSON.parse(localStorage.getItem(KEY_QUEUE));
    if (!moviesQueue.length) {
      localStorage.removeItem(KEY_QUEUE);
    }
  }
}

async function setAddNotify(id) {
  const response = await storageApi.getMovieDetails(id);
  const { title } = response;
  Notify.success(`You have added "${title}" to watch!`);
}

async function setRemoveNotify(id) {
  const response = await storageApi.getMovieDetails(id);
  const { title } = response;
  Notify.failure(`You've just deleted "${title}" from your library.`);
}
