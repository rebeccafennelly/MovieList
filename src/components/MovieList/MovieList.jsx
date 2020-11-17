import React, { useContext } from "react";
import Movie from "../../components/Movie";
import { MovieContext } from "../../context/movieContext";

const MovieList = () => {

  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie)=> {
        return <Movie movie={movie} />
      })}
    </div>
  );
};

export default MovieList;
