import React, { useEffect, useState } from "react";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=256289019e26529f6981dbd1cd69d811"
    );
    const data = await response.json();
    setMovies(data.results);
  };
  return (
    <section className='movie_list'>
      <header className='align_center movie_list_header'>
        <h2 className='movie_list_heading'>
          Popular
          <img src={Fire} alt='Fire Emoji' className='navbar_emoji' />
        </h2>

        <div className='align_center movie_list_fs'>
          <ul className='align_center movie_filter'>
            <li className='movie_filter_item active'>8+ Stars</li>
            <li className='movie_filter_item'>7+ Stars</li>
            <li className='movie_filter_item'>6+ Stars</li>
          </ul>

          <select name='' id='' className='movie_sorting'>
            <option value=''>Sort By</option>
            <option value=''>Date</option>
            <option value=''>Rating</option>
          </select>

          <select name='' id='' className='movie_sorting'>
            <option value=''>Ascending</option>
            <option value=''>Descending</option>
          </select>
        </div>
      </header>

      <div className='movie_cards'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
