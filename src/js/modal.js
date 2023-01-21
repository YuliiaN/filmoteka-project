import ApiService from './api.js';

const galleryList = document.querySelector('.gallery__list');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');

const apiServiceModal = new ApiService();

galleryList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', toggleModal);

function openModal(event) {
  if (
    event.target.classList.contains('gallery__trailer') ||
    event.target.classList.contains('trailer-text')
  ) {
    console.log(event.target.classList.value + 'hello');
  } else {
    toggleModal();
  }
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
