import React from "react";
import { useSelector } from "react-redux";

function MovieDetail() {
  const { detail } = useSelector((state) => state.detail);
  console.log(detail);

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="text-primary flex flex-col items-center md:items-start my-24 w-9/12 space-x-7 md:flex-row space-y-10 md:space-y-0">
          <div className="w-3/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
              alt=""
            />
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h1 className="text-3xl md:text-7xl">{detail.title}</h1>
            </div>
            <div>{detail.overview}</div>

            <div>{detail.vote_average}</div>
            <div>{detail.release_date}</div>
            <div>{detail.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
