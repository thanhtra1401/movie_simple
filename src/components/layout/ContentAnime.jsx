import React from "react";
import Header from "./Header";
import Banner from "../movies/Banner";

export default function ContentAnime() {
  return (
    <div className="content-page w-full bg-slate-800 p-5">
      <Header />
      <Banner />
      Anime
    </div>
  );
}
