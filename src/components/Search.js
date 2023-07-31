import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setResults } from "../store/slices/seachSlice";
import { searchMovies } from "../api";
import Movie from "./Movie";

function Search() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setSearch(event.target.search.value));
    const results = await searchMovies(event.target.search.value);
    dispatch(setResults(results));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" name="search" />
        <button>Search</button>
      </form>
      {results.length > 0 ? (
        <>
          {results.map((result) => {
            return <Movie movie={result} key={result.id} />;
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Search;
