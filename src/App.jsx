import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieList/MovieDetails";

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <main>
        <Routes>
          <Route
            path='/'
            element={
              <MovieList
                type='popular'
                title='Popular'
                emoji={Fire}
              />
            }
          />
          <Route
            path='/top_rated'
            element={
              <MovieList
                type='top_rated'
                title='Top Rated'
                emoji={Star}
              />
            }
          />
          <Route
            path='/upcoming'
            element={
              <MovieList
                type='upcoming'
                title='New Movies'
                emoji={Party}
              />
            }
          />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
