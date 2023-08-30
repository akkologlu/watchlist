import axios from "axios";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTAzMWJiYWVhMDQ4Y2I0M2I5NzU2OTQ3ODJlOGM0YyIsInN1YiI6IjY0YTgwNTcxNjVjMjZjMDBjYTllOTg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9lELWP7Z-jwtuOrwWzVULdg09beTHIdPMMeBUqIkdE";
const discoverMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      params: {
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: TOKEN,
      },
    }
  );
  return response.data.results;
};

const searchMovies = async (term) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        include_adult: "false",
        language: "en-US",
        page: "1",
        query: term,
      },
      headers: {
        accept: "application/json",
        Authorization: TOKEN,
      },
    }
  );
  return response.data.results;
};
const discoverMoviesByGenres = async (genreId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
    {
      params: {
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: TOKEN,
      },
    }
  );
  return response.data.results;
};
const genreList = async () => {
  const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

  const params = {
    language: "en-US",
  };

  const headers = {
    accept: "application/json",
    Authorization: TOKEN,
  };

  try {
    const response = await axios.get(apiUrl, { params, headers });
    return response.data.genres;
  } catch (error) {
    console.error("Hata oluştu:", error);
    return [];
  }
};

const discoverMoviesById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      params: {
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: TOKEN,
      },
    }
  );
  return response.data.results;
};

export {
  discoverMovies,
  searchMovies,
  discoverMoviesByGenres,
  genreList,
  discoverMoviesById,
};
