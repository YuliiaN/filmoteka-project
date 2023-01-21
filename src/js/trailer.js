const trailerRefs = {
  openModal: document.querySelectorAll('[data-modal-open-trailer]'),
  closeModal: document.querySelector('[data-modal-close-trailer]'),
  modalWindow: document.querySelector('[data-modal-trailer]'),
  gallery: document.querySelector('.gallery__list'),
  backdrop: document.querySelector('.js-backdrop-trailer'),
  body: document.querySelector('body'),
};

trailerRefs.gallery.addEventListener('click', onClickOpenModal);

function onClickOpenModal(event) {
  if (
    event.target.classList.contains('trailer-text') ||
    event.target.classList.contains('gallery__trailer')
  ) {
    toggleTrailerModal();
    onBodyToggle();
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
}

function onClickBackdropClose(event) {
  if (!event.target.classList.contains('trailer__video')) {
    trailerRefs.modalWindow.classList.add('is-hidden');
    onBodyToggle();
  }
}

function onEscClose(event) {
  if (event.code === 'Escape') {
    toggleTrailerModal();
    onBodyToggle();
  }
}
