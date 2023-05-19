import React from "react";
import { apiUrl } from "../config";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import {
  GetMovieCredit,
  GetMovieDetails,
  GetMovieSimilar,
  GetMovieVideo,
} from "../getData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import MovieCard from "../components/movies/MovieCard";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const { data } = GetMovieDetails(movieId);
  if (!data) return <h1>Not found</h1>;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  // console.log(apiUrl.getImageOrigin(poster_path));
  return (
    <div className="bg-slate-900 p-4 ">
      <Header />
      <div className="py-6 px-2 text-white">
        <div className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${apiUrl.getImageOrigin(backdrop_path)})`,
            }}
          ></div>
        </div>
        <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
          <img
            src={apiUrl.getImageOrigin(poster_path)}
            className="w-full h-full object-cover rounded-xl"
            alt="postImg"
          />
        </div>
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          {title}
        </h1>
        {genres.length > 0 && (
          <div className="flex items-center justify-center gap-x-5 mb-10">
            {genres.map((item) => (
              <span
                className="py-2 px-4 border-primary text-primary border rounded"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10 text-white">
          {overview}
        </p>
        <MovieCredits />
        <MovieVideos />
        <MovieSimilar />
      </div>
    </div>
  );
}
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = GetMovieCredit(movieId);

  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Actors</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={apiUrl.getImageOrigin(item.profile_path)}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieVideos() {
  const { movieId } = useParams();
  const { data } = GetMovieVideo(movieId);

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="mb-5 text-xl font-medium p-3 bg-primary inline-block rounded-lg">
              {item.name} Video
            </h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="864"
                height="486"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = GetMovieSimilar(movieId);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
        >
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard movie={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
