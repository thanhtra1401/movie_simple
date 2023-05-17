import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header flex items-center gap-x-5 text-white py-10  mb-5">
      <NavLink
        to="/tvseries"
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
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Anime
      </NavLink>
    </header>
  );
}
