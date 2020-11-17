
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList';
import { MovieProvider } from "./context/movieContext";
import AddMovie from './components/AddMovie';

const App = () => {
  return (

    <MovieProvider>
      <div>
        <NavBar />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
    
  );
}

export default App;
