import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b72e97d50f503cf310444389e0d21ec6';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPages = 1;
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
