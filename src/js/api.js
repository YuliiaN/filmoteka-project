import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b72e97d50f503cf310444389e0d21ec6';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPages = 1;
  }

  // метод для получения на первую страничку популярных запросов, принимает параметр page
  // https://developers.themoviedb.org/3/trending/get-trending

  async getMoviesByGenre(genre) {
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en&sort_by=popularity.desc&page=${this.page}&with_genres=${genre}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // метод для получения детальной информации про фильм (для модалки), принимает айди фильма
  // https://developers.themoviedb.org/3/movies/get-movie-details

  async getMovieDetails(id) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // the method for getting name of genres

  async getGenresName() {
    try {
      const {
        data: { genres },
      } = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      return genres;
    } catch (error) {
      console.log(error);
    }
  }

  // метод для получения фильмов из инпута, параметр query + page
  // https://developers.themoviedb.org/3/search/search-movies

  async getMovieByQuery(string) {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${string}&page=${this.page}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // метод для получения видосиков с ютуба, параметр id
  // https://developers.themoviedb.org/3/movies/get-movie-videos

  async getTrailerById(id) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
