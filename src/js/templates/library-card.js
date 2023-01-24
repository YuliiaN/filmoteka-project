// export function renderLibrary(arr) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//   const libraryCard = arr.map(
//     ({ id, title, poster_path, genres, release_date }) => {
//       const date = new Date(release_date).getFullYear();
//       const filteredGenres = genres
//         .map(genre => genre.name)
//         .slice(0, 3)
//         .join(', ');
//       return `<li class="gallery__item" id="${id}">
//         <div class="gallery__film-box">
//           <img src="${IMG_URL}${poster_path}" alt="${title}" class="gallery__film-poster"/>
//           <button type="button" class="gallery__trailer">
//             <span class="trailer-text">Watch trailer</span>
//           </button>
//         </div>
//         <div class="gallery__title-box">
//           <h2 class="gallery__title-film">${title}</h2>
//           <h3 class="gallery__genre-film">${filteredGenres} | ${date}</h3>
//         </div>
//       </li>`;
//     }
//   );
//   return libraryCard;
// }

export function renderLibrary(arr) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const libraryCard = arr.map(
    ({ genres, id, poster_path, release_date, title }) => {
      const date = new Date(release_date).getFullYear();
      const filteredGenres = genres
        .map(genre => genre.name)
        .splice(0, 3)
        .join(', ');

      return `
      <li class="gallery__item" id="${id}">
        <div class="gallery__film-box">
          <img src="${IMG_URL}${poster_path}" alt="${title}" class="gallery__film-poster"/>
          <button type="button" class="gallery__trailer">
            <span class="trailer-text">Watch trailer</span>
          </button>
        </div>
        <div class="gallery__title-box">
          <h2 class="gallery__title-film">${title}</h2>
          <h3 class="gallery__genre-film">${filteredGenres} | ${date}</h3>
        </div>
      </li>`;
    }
  );

  return libraryCard;
}
