export default function createCardFilm(movies) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const cardFilm = movies.map(
    ({ id, title, poster_path, genres, release_date }) => {
      const date = new Date(release_date).getFullYear();

      return `<li class="gallery__item" id="${id}">
        <div class="gallery__film-box">
          <img src="${IMG_URL}${poster_path}" alt="${title}" class="gallery__film-poster" />
          <button type="button" class="gallery__trailer">
            <span class="trailer-text">Watch trailer</span>
          </button>
        </div>
        <div class="gallery__title-box">
          <h2 class="gallery__title-film">${title}</h2>
          <h3 class="gallery__genre-film">${genres} | ${date}</h3>
        </div>
      </li>`;
    }
  );

  return cardFilm;
}
