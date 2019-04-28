import locationsData from '../../helpers/data/locationsData';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './singleMovie.scss';

let locations = [];
let movies = [];


const domBuilder = (array) => {
  let domString = '';
  array.forEach((loc) => {
    domString += `<p>${loc.id}</p>`;
  });
  util.printToDom('test', domString);
};

const domBuilder2 = (array) => {
  let domString = '';
  array.forEach((movie) => {
    domString += `<p>${movie.id}</p>`;
  });
  util.printToDom('test2', domString);
};


const test = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationsResults = resp.data.locations;
      locations = locationsResults;
      domBuilder(locations);
    })
    .catch(err => console.error(err));
};

const test2 = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResult = resp.data.movies;
      movies = moviesResult;
      domBuilder2(movies);
    })
    .catch(err => console.error(err));
};

const singleMovieViewer = () => {
  let domString = '<div>';
  domString += '<h2>Single Movie View</h2>';
  domString += '</div>';
  util.printToDom('singleMovie', domString);
};

export default { test, test2, singleMovieViewer };
