import axios from 'axios';

const API_KEY = 'b72e97d50f503cf310444389e0d21ec6';

async function getMovies() {
  try {
    const fetch = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    const data = await fetch.data;
    const collection = data.results;
    console.log(collection);

    const options = collection.map(item => item.title);
    console.log(options);
  } catch (error) {
    console.log(error);
  }
}

getMovies();

// getMovies()
//   .then(data => console.log)
//   .catch(err => console.log);
