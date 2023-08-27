import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Watchlist from "./components/Watchlist";
import Search from "./components/Search";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className={`App ${isHome ? "home-bg" : "bg-color"}`}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
          //
          <Route path="/discover/movies/:movieId" element={<MovieDetail />} />
          <Route path="/search/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
