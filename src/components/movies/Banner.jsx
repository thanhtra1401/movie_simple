import React from "react";

export default function Banner() {
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <div className="w-full h-full rounded-lg relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/508/381/original/movie-film-banner-design-template-cinema-background-concept-cinema-concept-with-popcorn-filmstrip-and-film-clapper-on-yellow-background-illustration-free-vector.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Avengers: End game</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button>Watch now</button>
        </div>
      </div>
    </section>
  );
}
