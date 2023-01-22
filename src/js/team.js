(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-team]'),
    closeModalBtn: document.querySelector('[data-modal-close-team]'),
    modal: document.querySelector('[data-modal-team]'),
  };
  const backdrop = document.querySelector('.backdrop__modal-team');
  backdrop.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  window.addEventListener('keydown', closeModalByEscape);

  function closeModalByEscape(e) {
    if (e.code === 'Escape' && !refs.modal.classList.value.includes('is-hidden')) {
      toggleModal();
    }
  }


})();


