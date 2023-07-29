import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/discover">Discover</NavLink>
      <NavLink to="/watchlist">Watchlist</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
}

export default Navbar;
