import React from "react";
import Header from "./Header";
import Banner from "../movies/Banner";
import MovieList from "../movies/MovieList";

export default function ContentMain() {
  return (
    <div className="content-page w-5/6 bg-slate-800 p-5">
      <Header />
      <Banner />
      <div className="movies-layout mb-10">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList type="now_playing" />
      </div>
      <div className="movies-layout mb-10">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated" />
      </div>
      <div className="movies-layout mb-10">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type="popular" />
      </div>
    </div>
  );
}
