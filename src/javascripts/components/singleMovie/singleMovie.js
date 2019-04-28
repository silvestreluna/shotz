import locationsData from '../../helpers/data/locationsData';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './singleMovie.scss';

let locations = [];
let movies = [];
const singleMoviesArrays = locations.concat(movies);

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
      singleMoviesArrays.push(locations);
      domBuilder(locations);
    })
    .catch(err => console.error(err));
};

const test2 = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResult = resp.data.movies;
      movies = moviesResult;
      singleMoviesArrays.push(movies);
      domBuilder2(movies);
    })
    .catch(err => console.error(err));
};

const singleMovieViewer = () => {
  console.error(singleMoviesArrays);
  let domString = '<h2>Single Movie View</h2>';
  domString += '<div class="card mb-3">';
  domString += '<img src="#" class="card-img-top" alt="movie">';
  domString += '<div class="card-body">';
  domString += '<h5>Movie Title</h5>';
  domString += '<p>Lorem ipsum</p>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('singleMovie', domString);
};

export default { test, test2, singleMovieViewer };
