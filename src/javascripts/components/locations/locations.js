import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';


let locations = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="text-center row">';
  locations.forEach((location) => {
    domString += `<div id=${location.id} class="card col-2">`;
    domString += `<h3>${location.name}</h3>`;
    domString += `<img class="card-img-top " src=${location.imageUrl} alt="location" />`;
    domString += `<p>${location.address}</p>`;
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationsResults = resp.data.locations;
      locations = locationsResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
