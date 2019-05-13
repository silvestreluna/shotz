// import locationsData from '../../helpers/data/locationsData';
import moviesData from '../../helpers/data/moviesData';
// import allMovies from '../movies/movies';
// import allLocations from '../locations/locations';
import util from '../../helpers/util';
import './singleMovie.scss';

// let locations = [];
let movies = [];

// console.error(locations);

const displayAllMovies = () => {
  document.getElementById('movies').classList = '';
  document.getElementById('locations').classList = '';
  document.getElementById('locations').classList.add = 'd-flex';
  document.getElementById('filters').classList = '';
  document.getElementById('clearItem').classList = '';
  document.getElementById('clearItem2').classList = '';
  document.getElementById('singleMovie').innerHTML = '';
};

const singleMovieViewer = (locArray) => {
  let domString = '<h2>Single Movie View</h2>';
  locArray.forEach((movie) => {
    domString += '<div class="card mb-3">';
    domString += '<div class="card-body">';
    domString += `<h3>${movie.name}</h3>`;
    domString += `<p>${movie.genre}</p>`;
    domString += `<p>${movie.releaseDate}</p>`;
    domString += `<p>${movie.description}</p>`;
    domString += '<button id="goBack" class="btn btn-primary">Go Back</button>';
    domString += '</div>';
    domString += '</div>';
  });
  document.getElementById('movies').classList = 'd-none';
  document.getElementById('locations').classList = 'd-none';
  document.getElementById('locations').classList.remove = 'd-flex';
  document.getElementById('filters').classList = 'd-none';
  document.getElementById('clearItem').classList = 'd-none';
  document.getElementById('clearItem2').classList = 'd-none';
  util.printToDom('singleMovie', domString);
  document.getElementById('goBack').addEventListener('click', displayAllMovies);
};


const singlePageEvent = (event) => {
  const movieClicked = event.target.parentElement.id;
  const movie1 = movies.filter(x => x.id === 'movie1');
  const movie2 = movies.filter(x => x.id === 'movie2');
  const movie3 = movies.filter(x => x.id === 'movie3');
  const movie4 = movies.filter(x => x.id === 'movie4');

  switch (movieClicked) {
    case 'movie1':
      singleMovieViewer(movie1);
      break;
    case 'movie2':
      singleMovieViewer(movie2);
      break;
    case 'movie3':
      singleMovieViewer(movie3);
      break;
    case 'movie4':
      singleMovieViewer(movie4);
      break;
    default:
  }
};


const addEventsToMovies = () => {
  const getIdCard = document.getElementById('app');
  getIdCard.addEventListener('click', singlePageEvent);
};


const test2 = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResult = resp.data.movies;
      movies = moviesResult;
      // singleMovieViewer();
    })
    .catch(err => console.error(err));
};
test2();

// const test = () => {
//   locationsData.getLocationsData()
//     .then((resp) => {
//       const locationsResults = resp.data.locations;
//       locations = locationsResults;
//       // singleMovieViewer();
//     })
//     .catch(err => console.error(err));
// };
// test();

export default { singlePageEvent, addEventsToMovies };
