import ApiService from './api.js';
import renderModal from './templates/modal-card.js';

const galleryList = document.querySelector('.gallery__list');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const filmCard = document.querySelector('.js-modal-wrap');

const apiServiceModal = new ApiService();

let filmId;

async function openModal(event) {
  if (
    !event.target.classList.contains('gallery__trailer') &&
    !event.target.classList.contains('trailer-text')
  ) {
    toggleModal();
    filmId = event.target.closest('li').id;

    try {
      const response = await apiServiceModal.getMovieDetails(filmId);
      console.log(response);
      //   const data = response.results;
      //   console.log(data);

      filmCard.innerHTML = renderModal(response);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('hello');
  }
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

galleryList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', toggleModal);
