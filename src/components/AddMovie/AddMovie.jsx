import React, { useState, useContext} from 'react';
import { MovieContext } from "../../context/movieContext";

const AddMovie = () => {

  const [name, setName] = useState('')

  const [price, setPrice] = useState('')

  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
      setName(e.target.value);
  }

  const updatePrice = (e) => {
    setPrice(e.target.value);
}

const addMovie = e => {
  e.preventDefault();
  setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
}



  return (
    <form onSubmit={addMovie}>
      <input type="text" name={name} placeholder="Name:" onInput={updateName} />
      <input type="text" name={price} placeholder="Price" onInput={updatePrice} />
      <input type="submit" />
    </form>
  )
}

export default AddMovie
