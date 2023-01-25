export default function renderModal({
  title,
  poster_path,
  genres,
  vote_average,
  vote_count,
  popularity,
  id,
  original_title,
  overview,
}) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const genresNames = genres.map(genre => genre.name);
  const modalWindow = document.querySelector('.modal');
  modalWindow.setAttribute('data-id', id);

  return `
    <div class="poster-wrap">
      <img src="${IMG_URL}${poster_path}" alt="${title}" class="modal-poster"/>
    </div>

    <div class="modal-info">
      <h2 class="modal-title">${title}</h2>

      <div class="info-wrap">
          <ul class="info-list">
            <li class="info-item">
              <p class="info-text left">Vote / Votes</p>
              <p class="info-text right">
                <span class="span-vote">${vote_average}</span>
                <span class="span-slash">/</span>
                <span class="span-votes">${vote_count}</span>
              </p>
            </li>

            <li class="info-item">
              <p class="info-text left">Popularity</p>
              <p class="info-text right">${popularity}</p>
            </li>

            <li class="info-item">
              <p class="info-text left">Original Title</p>
              <p class="info-text right upper">${original_title}</p>
            </li>

            <li class="info-item">
              <p class="info-text left">Genre</p>
              <p class="info-text right">${Object.values(genresNames).join(
                ', '
              )}</p>
            </li>
          </ul>
        </div>

      <h3 class="about">About</h3>
      <p class="annotation">
        ${overview}
      </p>
      <div class="btn-wrap">
      <button
        class="modal-btn-watched modal-btn"
        type="button"
        data-button="watched"
      >
        add to watched
      </button>
      <button
        class="modal-btn-queue modal-btn"
        type="button"
        data-button="queue"
      >
        add to queue
      </button>
    </div>
    </div>`;
}
