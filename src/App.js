import "./App.css";
import Discover from "./components/Discover";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/search" element={<div>Search</div>} />
      </Routes>
    </div>
  );
}

export default App;
