import ApiService from './api.js';
import renderModal from './templates/modal-card.js';

const galleryList = document.querySelector('.gallery__list');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const filmCard = document.querySelector('.js-modal-wrap');

const apiServiceModal = new ApiService();

let filmId;

async function openMainModal(event) {
  if (
    !event.target.classList.contains('gallery__trailer') &&
    !event.target.classList.contains('trailer-text')
  ) {
    toggleMainModal();
    filmId = event.target.closest('li').id;
    try {
      const response = await apiServiceModal.getMovieDetails(filmId);
      filmCard.innerHTML = renderModal(response);
    } catch (error) {
      console.log(error);
    }
  }
}

function toggleMainModal() {
  modal.classList.toggle('is-hidden');
}

galleryList.addEventListener('click', openMainModal);
closeModalBtn.addEventListener('click', toggleMainModal);
