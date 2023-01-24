import ApiService from './api.js';
import renderModal from './templates/modal-card.js';
import { KEY_WATCHED, KEY_QUEUE } from './into-local-storage.js';
import { chooseButton } from './into-local-storage.js';

const galleryList = document.querySelector('.gallery__list');
const modalBackdrop = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const filmCard = document.querySelector('.js-modal-wrap');
const bodyRef = document.querySelector('body');

const apiServiceModal = new ApiService();

let filmId;

async function showMainModal(event) {
  if (
    !event.target.classList.contains('gallery__trailer') &&
    !event.target.classList.contains('trailer-text')
  ) {
    openMainModal();
    filmId = event.target.closest('li').id;

    try {
      const response = await apiServiceModal.getMovieDetails(filmId);
      filmCard.innerHTML = renderModal(response);

      // modal buttons
      const buttonsContainer = document.querySelector('.btn-wrap');
      checkButtonsActivity(filmId);
      buttonsContainer.addEventListener('click', chooseButton);
    } catch (error) {
      console.log(error);
    }
  }
}

function openMainModal() {
  modalBackdrop.classList.remove('is-hidden');
  onBodyScroll();

  closeModalBtn.addEventListener('click', onBtnCloseMainModal);
  document.addEventListener('keydown', onEscapeCloseMainModal);
  modalBackdrop.addEventListener('click', onBackdropCLoseMainModal);
}

function closeMainModal() {
  modalBackdrop.classList.add('is-hidden');
  onBodyScroll();

  closeModalBtn.removeEventListener('click', onBtnCloseMainModal);
  document.removeEventListener('keydown', onEscapeCloseMainModal);
  modalBackdrop.removeEventListener('click', onBackdropCLoseMainModal);
}

function onEscapeCloseMainModal(event) {
  if (
    !event.target.classList.contains('is-hidden') &&
    event.code === 'Escape'
  ) {
    closeMainModal();
  }
}

function onBtnCloseMainModal() {
  closeMainModal();
}

function onBackdropCLoseMainModal(event) {
  if (event.target === event.currentTarget) {
    closeMainModal();
  }
}

function onBodyScroll() {
  bodyRef.classList.toggle('modal-open');
}

galleryList.addEventListener('click', showMainModal);

function checkButtonsActivity(id) {
  if (!localStorage.length) {
    return;
  }

  const watchedBtn = document.querySelector('.modal-btn-watched');
  const queueBtn = document.querySelector('.modal-btn-queue');
  if (localStorage.getItem(KEY_WATCHED)) {
    const data = JSON.parse(localStorage.getItem(KEY_WATCHED));
    data.forEach(item => {
      if (item.id === id) {
        watchedBtn.classList.add('modal-btn-active');
        watchedBtn.textContent = 'remove from watched';
      }
    });
  }
  if (localStorage.getItem(KEY_QUEUE)) {
    const data = JSON.parse(localStorage.getItem(KEY_QUEUE));
    data.forEach(item => {
      if (item.id === id) {
        queueBtn.classList.add('modal-btn-active');
        queueBtn.textContent = 'remove from queue';
      }
    });
  }
}
