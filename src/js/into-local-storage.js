import ApiService from './api';
import { Notify } from 'notiflix';

const storageApi = new ApiService();
const buttonsContainer = document.querySelector('.btn-wrap');
const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
let moviesWatched = [];
let moviesQueue = [];

buttonsContainer.addEventListener('click', chooseButton);
checkStorageState();

function chooseButton(event) {
  const target = event.target;
  const type = target.dataset.button;
  const movie = {
    id: target.closest('.modal').dataset.id,
    // title: '',

    // async getTitleName() {
    //   const response = await storageApi.getMovieDetails(this.id);
    //   this.title = response.title;
    // },
  };

  switch (type) {
    case 'watched':
      moviesWatched.push(movie);
      saveToWatched();
      break;
    case 'queue':
      moviesQueue.push(movie);
      saveToQueue();
      break;
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
    if (hasDuplicate(moviesWatched)) {
      removeFromWatched(moviesWatched);
    }
  }

  if (localStorage.getItem(KEY_QUEUE)) {
    moviesQueue = JSON.parse(localStorage.getItem(KEY_QUEUE));
    if (hasDuplicate(moviesQueue)) {
      removeFromQueue(moviesQueue);
    }
  }
}

function hasDuplicate(arr) {
  const items = arr.map(item => item.id);
  const doubled = items.find(
    elem => items.indexOf(elem) !== items.lastIndexOf(elem)
  );
  return doubled;
}

function removeFromWatched(arr) {
  const arrValues = arr.map(item => item.id); // достает ЗНАЧЕНИЯ объектов

  const original = arrValues.indexOf(hasDuplicate(arr)); // удаляет первое появление айди
  arr.splice(original, 1);
  saveToWatched();

  const doubled = arrValues.lastIndexOf(hasDuplicate(arr)); // удаляет второе появление, как маркер удалить из хранилища
  arr.splice(doubled, 1);
  saveToWatched();
}

function removeFromQueue(arr) {
  const arrValues = arr.map(item => item.id); // достает ЗНАЧЕНИЯ объектов

  const original = arrValues.indexOf(hasDuplicate(arr)); // удаляет первое появление айди
  arr.splice(original, 1);
  saveToQueue();

  const doubled = arrValues.lastIndexOf(hasDuplicate(arr)); // удаляет второе появление, как маркер удалить из хранилища
  arr.splice(doubled, 1);
  saveToQueue();
}
