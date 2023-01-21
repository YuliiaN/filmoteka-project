export function createCardFilm(movies) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  // const { title, poster_path, original_title, release_date, genre_ids } = movies;
  const cardFilm = movies.map(({ title, poster_path, original_title, release_date, genre_ids }) => {
    return `<li class="gallery__item">
        <div class="gallery__film-box">
          <img src="${IMG_URL}${poster_path}" alt="${original_title}" />
          <button type="button" class="gallery__trailer">
            <span class="trailer-text">Watch trailer</span>
          </button>
        </div>
        <div class="gallery__title-box">
          <h2 class="gallery__title-film">${title}</h2>
          <h3 class="gallery__genre-film">${genre_ids.join('')} | ${release_date}</h3>
        </div>
      </li>`;
  });

  return cardFilm.join('');
}
