import React, { useEffect, useState } from "react";
import Header from "./Header";

import MovieCard from "../movies/MovieCard";
import useSWR from "swr";

import { fetcher, apiUrl } from "../../config";
// import { GetMovieList, GetMovieSearch } from "../../getData";

import useDebounce from "../../hooks/useDebounce";
import Paginatiton from "../pagination/Paginatiton";

export default function ContentMovies() {
  const [queries, setQueries] = useState("");
  // const [res, setRes] = useState(GetMovieList("popular"));
  const queriesDebounce = useDebounce(queries, 500);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(apiUrl.getMovieList("now-playing", page));

  const { data, isLoading } = useSWR(url, fetcher);
  useEffect(() => {
    if (queriesDebounce) setUrl(apiUrl.getMovieSearch(queriesDebounce, page));
    else setUrl(apiUrl.getMovieList("now_playing", page));
  }, [queriesDebounce, page]);

  const handleSetQueries = (value) => {
    setQueries(value);
  };
  // console.log(page);
  // let res = "";
  // if (queriesDebounce) {
  //   res = GetMovieSearch(queries);
  // } else {
  //   res = GetMovieList("popular");
  // }
  // const { data } = res;
  const movies = data?.results || [];
  const totalResults = data?.total_results;

  return (
    <div className="content-page w-full bg-slate-800 p-5">
      <Header contentCat={true} setQueries={handleSetQueries} />
      {isLoading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent mx-auto animate-spin"></div>
      )}

      <div className="grid grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Paginatiton
        totalResults={totalResults}
        setPage={(page) => setPage(page)}
        itemsPerPage={20}
      />
      {/* <div className="pagination mx-auto my-10 text-white items-center justify-center flex ">
        <i className="fa-solid fa-chevron-left cursor-pointer p-2 "></i>
        <span
          className="py-2 px-4 mx-2 rounded-sm cursor-pointer "
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </span>
        <span
          className="py-2 px-4 mx-2 rounded-sm cursor-pointer "
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </span>

        <i className="fa-solid fa-chevron-right cursor-pointer p-2"></i>
      </div> */}
    </div>
  );
}
