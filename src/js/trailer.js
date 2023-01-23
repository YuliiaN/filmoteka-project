import ApiService from './api';
import renderTrailerCard from './templates/trailer-card';

// comment

const trailerRefs = {
  openModal: document.querySelectorAll('[data-modal-open-trailer]'),
  closeModal: document.querySelector('[data-modal-close-trailer]'),
  modalWindow: document.querySelector('[data-modal-trailer]'),
  gallery: document.querySelector('.gallery__list'),
  backdrop: document.querySelector('.js-backdrop-trailer'),
  body: document.querySelector('body'),
  video: document.querySelector('.js-trailer__wrap'),
};
const trailerApi = new ApiService();
let trailerId;

trailerRefs.gallery.addEventListener('click', onClickOpenModal);

function onClickOpenModal(event) {
  if (
    event.target.classList.contains('trailer-text') ||
    event.target.classList.contains('gallery__trailer')
  ) {
    trailerId = event.target.closest('li').id;
    setVideo(trailerId).then(() => {
      /* ignored */
    });
    onBodyToggle();
    toggleTrailerModal();
    trailerRefs.closeModal.addEventListener('click', toggleTrailerModal);
    trailerRefs.backdrop.addEventListener('click', onClickBackdropClose);
    trailerRefs.body.addEventListener('keydown', onEscClose);
  }
}

function toggleTrailerModal() {
  trailerRefs.modalWindow.classList.toggle('is-hidden');
}

function onBodyToggle() {
  trailerRefs.body.classList.toggle('trailer-open');
  stopVideo();
}

function onClickBackdropClose(event) {
  if (!event.target.classList.contains('trailer__video')) {
    trailerRefs.modalWindow.classList.add('is-hidden');
    onBodyToggle();
  }
  removeBackdropListener();
}

function onEscClose(event) {
  if (event.code === 'Escape') {
    toggleTrailerModal();
    onBodyToggle();
  }
  removeEscListener();
}

function removeBackdropListener() {
  trailerRefs.backdrop.removeEventListener('click', onClickBackdropClose);
}

function removeEscListener() {
  trailerRefs.body.removeEventListener('keydown', onEscClose);
}

async function setVideo(id) {
  try {
    const response = await trailerApi.getTrailerById(id);
    const data = response.results;
    const trailer = data.find(item => item.type === 'Trailer');
    const key = trailer.key;
    const markup = renderTrailerCard(key);
    trailerRefs.video.innerHTML = markup;
    console.dir(trailerRefs.video);
    console.dir(trailerRefs);
  } catch (error) {
    console.log(error);
  }
}

function stopVideo() {
  trailerRefs.video.innerHTML = '';
}
