import axios from "axios";
const searcMovies = async () => {
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTAzMWJiYWVhMDQ4Y2I0M2I5NzU2OTQ3ODJlOGM0YyIsInN1YiI6IjY0YTgwNTcxNjVjMjZjMDBjYTllOTg4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L9lELWP7Z-jwtuOrwWzVULdg09beTHIdPMMeBUqIkdE",
      },
    }
  );
  return response.data.results;
};

export default searcMovies;
