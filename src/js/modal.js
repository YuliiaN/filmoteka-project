import ApiService from './api.js';
import renderModal from './templates/modal-card.js';

const galleryList = document.querySelector('.gallery__list');
const modalBackdrop = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const filmCard = document.querySelector('.js-modal-wrap');

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
    } catch (error) {
      console.log(error);
    }
  }
}

function openMainModal() {
  modalBackdrop.classList.remove('is-hidden');

  closeModalBtn.addEventListener('click', onBtnCloseMainModal);
  document.addEventListener('keydown', onEscapeCloseMainModal);
  modalBackdrop.addEventListener('click', onBackdropCLoseMainModal);
}

function closeMainModal() {
  modalBackdrop.classList.add('is-hidden');

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

function onBackdropCLoseMainModal() {
  closeMainModal();
}

galleryList.addEventListener('click', showMainModal);
closeModalBtn.addEventListener('click', onBtnCloseMainModal);
document.addEventListener('keydown', onEscapeCloseMainModal);
modalBackdrop.addEventListener('click', onBackdropCLoseMainModal);
