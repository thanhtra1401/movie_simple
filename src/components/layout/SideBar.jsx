import React from "react";

import { ReactComponent as ReactLogo } from "../../assets/images/logomu.svg";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={`side-bar w-1/6 p-6 flex flex-col gap-4 relative`}>
      <div className="logo w-[100px] mb-10">
        <ReactLogo />
      </div>
      <div className="menu-sidebar flex flex-col gap-4">
        <span className="text-gray-400 text-xs">MENU</span>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "menu-item cursor-pointer text-primary"
              : "menu-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-house ml-4"></i>
          <span className="ml-2">Home</span>
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive
              ? "menu-item cursor-pointer text-primary"
              : "menu-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-user-group ml-4"></i>
          <span className="ml-2">Community</span>
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) =>
            isActive
              ? "menu-item cursor-pointer text-primary"
              : "menu-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-compass ml-4"></i>
          <span className="ml-2">Discover</span>
        </NavLink>
        <NavLink
          to="/awards"
          className={({ isActive }) =>
            isActive
              ? "menu-item cursor-pointer text-primary"
              : "menu-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-award ml-4"></i>
          <span className="ml-2">Awards</span>
        </NavLink>
      </div>

      <div className="library-sidebar flex flex-col gap-4">
        <span className="text-gray-400 text-xs">LIBRARY</span>
        <NavLink
          to="/recent"
          className={({ isActive }) =>
            isActive
              ? "library-item cursor-pointer text-primary"
              : "library-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-clock ml-4"></i>
          <span className="ml-2">Recent</span>
        </NavLink>
        <NavLink
          to="/recent"
          className={({ isActive }) =>
            isActive
              ? "library-item cursor-pointer text-primary"
              : "library-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-star ml-4"></i>
          <span className="ml-2">Top rated</span>
        </NavLink>
        <NavLink
          to="/recent"
          className={({ isActive }) =>
            isActive
              ? "library-item cursor-pointer text-primary"
              : "library-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-download ml-4"></i>
          <span className="ml-2">Downloaded</span>
        </NavLink>
      </div>

      <div className="categories-sidebar flex flex-col gap-4">
        <span className="text-gray-400 text-xs">CATEGORIES</span>
        <NavLink
          to="/tv-series"
          className={({ isActive }) =>
            isActive
              ? "categories-item cursor-pointer text-primary"
              : "categories-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-tv ml-4"></i>
          <span className="ml-2">TV series</span>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "categories-item cursor-pointer text-primary"
              : "categories-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-film ml-4"></i>
          <span className="ml-2">Movies</span>
        </NavLink>
        <NavLink
          to="/anime"
          className={({ isActive }) =>
            isActive
              ? "categories-item cursor-pointer text-primary"
              : "categories-item cursor-pointer"
          }
        >
          <i className="fa-solid fa-video ml-4"></i>
          <span className="ml-2">Anime</span>
        </NavLink>
      </div>

      <div className="general-sidebar flex flex-col gap-4">
        <span className="text-gray-400 text-xs">GENERAL</span>
        <div className="general-item cursor-pointer">
          <i className="fa-solid fa-gear ml-4"></i>
          <span className="ml-2">Setting</span>
        </div>
        <div className="general-item cursor-pointer">
          <i className="fa-solid fa-right-from-bracket ml-4"></i>
          <span className="ml-2">Logout</span>
        </div>
      </div>

      <div className="user ml-2">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=apYgDs9tYQiwn7pcDOGbNg"
          alt="user-avatar"
        />
      </div>
    </div>
  );
}
