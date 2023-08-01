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
    <div className="min-h-screen">
      <div className="flex flex-col justify center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="w-11/12 border pl-16 text-3xl rounded-3xl p-2 m-5 bg-neutral-800 border-none h-24 text-white text-opacity-50 outline-none"
          />
        </form>
      </div>

      {results.length > 0 ? (
        <>
          {results.map((result) => {
            return <Movie movie={result} key={result.id} />;
          })}
        </>
      ) : (
        <p className="text-primary">Loading...</p>
      )}
    </div>
  );
}

export default Search;
