import locationsData from '../../helpers/data/locationsData';
// import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './singleMovie.scss';

let locations = [];

const domBuilder = (array) => {
  let domString = '';
  array.forEach((loc) => {
    domString += `<p>${loc.id}</p>`;
  });
  util.printToDom('test', domString);
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


export default { test };
