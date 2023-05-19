import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header({ contentCat = false, setQueries }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    setQueries(query);
  };
  const handleClick = () => {
    setQueries(query);
  };

  return (
    <header className="header flex items-center gap-x-5 text-white py-6 p-3 mb-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/tv-series"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        TV series
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
      <NavLink
        to="/anime"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Anime
      </NavLink>
      {contentCat ? (
        <div className="search flex-1 flex">
          <input
            type="text"
            className="w-full p-4 bg-black text-white outline-none rounded-l-lg"
            placeholder="Type here to search..."
            value={query}
            onChange={handleChange}
          />
          <button
            className="p-4 bg-primary text-white rounded-r-lg"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
