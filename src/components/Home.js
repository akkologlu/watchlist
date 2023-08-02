import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="hero">
      <div className="h-screen flex justify-center sm:mt-32">
        <div className="flex flex-col justify-center h-96 mx-6 items-center mt-24 max-w-6xl sm:mx-16 md:space-y-16 space-y-8 text-center">
          <h1
            className="text-primary font-bold
        text-3xl font-merriweather-sans sm:text-5xl md:text-7xl "
          >
            Create Your Watchlist for Unforgettable Cinema Experiences
          </h1>
          <h2
            className="text-primary
        text-xl font-roboto sm:text-2xl md:text-3xl"
          >
            Welcome to{" "}
            <span className="text-secondary font-bold">Watchlyst</span>, where
            you can curate unforgettable cinematic experiences. Add your
            favorite movies, create lists, and never miss out on the latest
            releases. Managing your dream movie-watching journey has never been
            easier!
          </h2>
          <div className="flex flex-col text-primary justify-center w-full space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-10">
            <Link
              to="/discover"
              className="rounded-full bg-secondary py-4 px-8 shadow-lg duration-200 hover:opacity-80"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
