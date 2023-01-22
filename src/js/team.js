(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-team]'),
    closeModalBtn: document.querySelector('[data-modal-close-team]'),
    modal: document.querySelector('[data-modal-team]'),
  };
  refs.modal.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    if (Object.values(refs).includes(e.target)) {
      refs.modal.classList.toggle('is-hidden');
    }
  }

  window.addEventListener('keydown', closeModalByEscape);

  function closeModalByEscape(e) {
    if (e.code === 'Escape' && !refs.modal.classList.value.includes('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();


