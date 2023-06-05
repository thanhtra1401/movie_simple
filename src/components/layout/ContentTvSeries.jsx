import React, { useEffect, useState } from "react";
import Header from "./Header";

import useSWR from "swr";

import { fetcher, apiUrl } from "../../config";

import useDebounce from "../../hooks/useDebounce";
import Paginatiton from "../pagination/Paginatiton";
import TvCard from "./../tv/TvCard";

export default function ContentTvSeries() {
  const [queries, setQueries] = useState("");

  const queriesDebounce = useDebounce(queries, 500);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(apiUrl.getTvList("on_the_air", page));

  const { data, isLoading } = useSWR(url, fetcher);
  useEffect(() => {
    if (queriesDebounce) setUrl(apiUrl.getTvSearch(queriesDebounce, page));
    else setUrl(apiUrl.getTvList("on_the_air", page));
  }, [queriesDebounce, page]);

  const handleSetQueries = (value) => {
    setQueries(value);
  };

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
          <TvCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Paginatiton
        totalResults={totalResults}
        setPage={(page) => setPage(page)}
        itemsPerPage={20}
      />
    </div>
  );
}
