
import movies from './components/movies/movies';
import locations from './components/locations/locations';
import singleMovie from './components/singleMovie/singleMovie';

import '../styles/main.scss';


const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  singleMovie.test();
  singleMovie.test2();
  singleMovie.singleMovieViewer();
};

init();
