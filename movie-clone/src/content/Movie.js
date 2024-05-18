import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({
  title,
  poster_path,
  vote_average,
  release_date,
}) {
  return (
    <div className="movie-container">
      <div className="movie-poster">
        <img src={IMG_BASE_URL + poster_path} alt="포스터" />
      </div>
      <div className="movie-info">
        <div>{release_date}</div>
        <div>
          <h4>{title}</h4>
        </div>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
