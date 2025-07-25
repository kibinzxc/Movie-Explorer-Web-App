import React from "react";
import { Link } from "react-router-dom";

import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className='movie_card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt='Movie Poster'
        className='movie_poster'
      />

      <div className='movie_details'>
        <h3 className='movie_details_heading'>
          {movie.original_title}
        </h3>
        <div className='align_center movie_date_rate'>
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average}
            <img
              src={Star}
              alt='Rating Icon'
              className='card_emoji'
            />
          </p>
        </div>
        <p className='movie_description'>
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
