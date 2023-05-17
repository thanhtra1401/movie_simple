import React from "react";

export default function MovieCard() {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-700 text-white h-full select-none cursor-pointer">
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/e/e0/Avatar_D%C3%B2ng_ch%E1%BA%A3y_c%E1%BB%A7a_n%C6%B0%E1%BB%9Bc_-_Poster_ch%C3%ADnh_th%E1%BB%A9c.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">Avatar</h3>
        <div className="flex items-center justify-between text-sm mb-10">
          <span>2022</span>
          <span>
            9.5 <i className="fa-solid fa-star text-yellow-500"></i>
          </span>
        </div>
        <button>Watch now</button>
      </div>
    </div>
  );
}
