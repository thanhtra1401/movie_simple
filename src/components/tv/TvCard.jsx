import React from "react";
import ButtonMain from "../button/ButtonMain";
import { apiUrl } from "../../config";
import { useNavigate } from "react-router-dom";

export default function TvCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/tv-series/${id}`);
  };
  const {
    title,
    release_date,
    vote_average,
    backdrop_path,
    id,
    name,
    first_air_date,
  } = movie;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-700 text-white h-full select-none cursor-pointer">
      <img
        src={apiUrl.getImage500(backdrop_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title || name}</h3>
        <div className="flex items-center justify-between text-sm mb-10">
          <span>{new Date(release_date).getFullYear() || first_air_date}</span>
          <span>
            {vote_average} <i className="fa-solid fa-star text-yellow-500"></i>
          </span>
        </div>
        <ButtonMain full={true} onClick={handleClick}>
          Watch now
        </ButtonMain>
      </div>
    </div>
  );
}
