import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';


let movies = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class=" text-center row">';
  movies.forEach((movie) => {
    domString += `<div id=${movie.id} class="card col-sm-4">`;
    domString += `<h3>${movie.name}</h3>`;
    domString += `<p>${movie.genre}</p>`;
    domString += `<p>${movie.releaseDate}</p>`;
    domString += `<p>${movie.description}</p>`;
    domString += `<p>${movie.locations.length} Locations</p>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const moviesResults = resp.data.movies;
      movies = moviesResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
