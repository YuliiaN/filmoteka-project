import { Loading } from 'notiflix';

export function addPreloader() {
  Loading.pulse({ svgColor: '#ff6b08' });
}
