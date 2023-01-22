const upwardBtn = document.querySelector('.upward');
window.addEventListener('scroll', () => {
  upwardBtn.classList.toggle('upward-active', window.scrollY > 500);
});
upwardBtn.addEventListener('click', scrollTop);

function scrollTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
    },
  );
}