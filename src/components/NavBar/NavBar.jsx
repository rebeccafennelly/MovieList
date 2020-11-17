import React, {useContext} from "react";
import styles from "./NavBar.module.scss";
import { MovieContext, MovieProvider } from "../../context/movieContext";

const NavBar = () => {

  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div>
      <h3>Context Recap</h3>
      <h3>We have {movies.length} movies</h3>
    </div>
  );
};

export default NavBar;
