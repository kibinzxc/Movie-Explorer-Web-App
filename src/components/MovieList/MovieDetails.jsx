import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();

  return <h2>Single Movie - {movieId} </h2>;
};

export default MovieDetails;
