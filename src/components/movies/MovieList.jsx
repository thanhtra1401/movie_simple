import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { GetMovieList } from "../../getData";

//https://api.themoviedb.org/3/movie/now_playing?api_key=0840440e64bb8ae71f82ccacd7cbd5c4

export default function MovieList({ type = "now_playing" }) {
  const [movies, setMovies] = useState([]);
  const { data } = GetMovieList(type);
  // if (error) return;
  // if (isLoading)
  //   return (
  //     <div
  //       className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  //       role="status"
  //     >
  //       <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //         Loading...
  //       </span>
  //     </div>
  //   );
  useEffect(() => {
    if (data) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
