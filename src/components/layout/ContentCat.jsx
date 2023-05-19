import React from "react";
import Header from "./Header";
import Banner from "../movies/Banner";
import { fetcher } from "../../config";
import MovieCard from "../movies/MovieCard";
import useSWR from "swr";

export default function ContentCat({ type }) {
  let url = "";
  switch (type) {
    case "movie":
      url = "https://api.themoviedb.org/3/movie/popular";
      break;
    default:
      break;
  }

  const { data } = useSWR(
    `${url}?api_key=0840440e64bb8ae71f82ccacd7cbd5c4`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="content-page w-full bg-slate-800 p-5">
      <Header contentCat={true} />
      <Banner />
      <div className="grid grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCard movie />
        ))}
      </div>
    </div>
  );
}
