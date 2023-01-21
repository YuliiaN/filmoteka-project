import ApiService from './api.js';

const galleryList = document.querySelector('.gallery__list');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');

galleryList.addEventListener('click', renderModal);
closeModalBtn.addEventListener('click', toggleModal);

function renderModal() {
  console.log('hello');
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
