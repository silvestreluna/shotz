
import movies from './components/movies/movies';
import locations from './components/locations/locations';
import singleMovie from './components/singleMovie/singleMovie';

import '../styles/main.scss';


const init = () => {
  singleMovie.initLocData();
  singleMovie.initMoviesData();
  singleMovie.addEventsToMovies();
  movies.initializeMovies();
  locations.initializeLocations();
};

init();
