import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setResults } from "../store/slices/seachSlice";
import { searchMovies, discoverMovies } from "../api";
import Movie from "./Movie";
import Loading from "./Loading";

function Search() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [discoverMoviesList, setDiscoverMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setSearch(event.target.search.value));
    const results = await searchMovies(event.target.search.value);
    dispatch(setResults(results));
    event.target.search.value = "";
  };

  const discoverFetch = async () => {
    setLoading(true);
    try {
      const discoverMovies1 = await discoverMovies();
      setDiscoverMoviesList(discoverMovies1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    discoverFetch();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="min-h-screen">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-10/12">
              <input
                type="text"
                placeholder="Search"
                name="search"
                className="w-full pl-8 text-3xl rounded-3xl  bg-neutral-800 border-none h-24 text-white text-opacity-50 outline-none"
              />
            </form>
          </div>

          {results.length > 0 ? (
            <>
              <div className="flex flex-wrap justify-center gap-9 px-10 py-5">
                {results.map((result, index) => {
                  return (
                    <div
                      key={result.id}
                      className="scale-100 hover:scale-125 ease-in duration-100 py-10 pl-15"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Movie
                        movie={result}
                        key={result.id}
                        showAddButton={hoverIndex === index}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap justify-center gap-9 px-10 py-5 pt-10">
              {discoverMoviesList.map((movie, index) => {
                return (
                  <div
                    key={movie.id}
                    className="scale-100 hover:scale-125 ease-in duration-100 py-10 pl-15"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Movie
                      movie={movie}
                      key={movie.id}
                      showAddButton={hoverIndex === index}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
