import locationsData from '../../helpers/data/locationsData';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './singleMovie.scss';

let locations = [];
let movies = [];

console.error(locations);

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
  util.printToDom('singleMovie', domString);
};


const singlePageEvent = (e) => {
  const buttonId = e.currentTarget.id;
  console.error(buttonId);
  const movie1 = movies.filter(x => x.id === 'movie1');
  const movie2 = movies.filter(x => x.id === 'movie2');
  const movie3 = movies.filter(x => x.id === 'movie3');
  const movie4 = movies.filter(x => x.id === 'movie4');
  switch (buttonId) {
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
      util.printToDom('test', '<h1>ERROR</h1>');
  }
};

const printSomething = (event) => {
  const test1 = event.target.parentElement.id;
  console.error(test1);
};

const addEventsToMovies = () => {
  const getIdCard = document.getElementById('movies');
  getIdCard.addEventListener('click', printSomething);
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

const test = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationsResults = resp.data.locations;
      locations = locationsResults;
      // singleMovieViewer();
    })
    .catch(err => console.error(err));
};
test();

export default { singlePageEvent, addEventsToMovies };
