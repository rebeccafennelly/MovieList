import React from "react";

const Movie = (props) => {
  return (
    <>
    <h2>{props.movie.name}</h2>
      <p>{props.movie.price}</p>
    </>
  );
};

export default Movie;
