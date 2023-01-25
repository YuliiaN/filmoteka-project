import { Loading } from 'notiflix';
import { addPreloader } from './preloader';

const myLibrary = document.querySelector('.header__underline');
myLibrary.addEventListener('click', setLoader);

function setLoader() {
  addPreloader();
  Loading.remove(300);
}
