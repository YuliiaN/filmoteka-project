import { Loading } from 'notiflix';

export function addPreloader() {
  Loading.pulse({ svgColor: 'rgb(236, 248, 5)' });
}
