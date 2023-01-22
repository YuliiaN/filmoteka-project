export default function renderModal({
  title,
  poster_path,
  genres,
  vote_average,
  vote_count,
  popularity,
  original_title,
  overview,
}) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const genresNames = genres.map(genre => genre.name);
  return `
    <div class="modal-poster">
      <img src="${IMG_URL}${poster_path}" alt="${title}" />
    </div>

    <div class="modal-info">
      <h2 class="modal-title">${title}</h2>

      <div class="info-wrap">
        <ul class="info-list">
          <li class="info-item-left">
            <p class="text-left">Vote / Votes</p>
          </li>
          <li class="info-item-left">
            <p class="text-left">Popularity</p>
          </li>
          <li class="info-item-left">
            <p class="text-left">Original Title</p>
          </li>
          <li class="info-item-left">
            <p class="text-left">Genre</p>
          </li>
        </ul>
        <ul class="info-list">
          <li class="info-item-right">
            <p class="text-right">
              <span class="span-vote">${vote_average}</span>
              <span class="span-slash">/</span>
              <span class="span-votes">${vote_count}</span>
            </p>
          </li>
          <li class="info-item-right">
            <p class="text-right">${popularity}</p>
          </li>
          <li class="info-item-right">
            <p class="text-right upper">${original_title}</p>
          </li>
          <li class="info-item-right">
            <p class="text-right">${Object.values(genresNames).join(', ')}</p>
          </li>
        </ul>
      </div>

      <h3 class="about">About</h3>
      <p class="annotation">
        ${overview}
      </p>
    
    <div class="btn-wrap">
      <button class="modal-btn-watched" type="button">add to Watched</button>
      <button class="modal-btn-queue" type="button">add to queue</button>
    </div>
    </div>`;
}
