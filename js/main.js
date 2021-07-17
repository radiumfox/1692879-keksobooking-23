import { validateForm, setUserFormSubmit, resetForm, disablePage, activatePage, disableFilters, activateFilters } from './ad-form.js';
import { resetMap, loadMap } from './map.js';
import  { getData } from './fetch-data.js';
import { alertErrorMessage, showSuccessMessage, showFailMessage } from './utils.js';
import { showSimilarOffers, onFilterChange } from './filter-offers.js';
import { debounce } from './utils.js';

const RENDER_DELAY = 500;
const resetButton = document.querySelector('.ad-form__reset');

disablePage(disableFilters);

const onSuccess = () => {
  showSuccessMessage();
  resetForm();
  resetMap();
};

const fetchOffers = getData (
  (data) => {
    showSimilarOffers(data);
    onFilterChange(
      debounce(() => showSimilarOffers(data),
        RENDER_DELAY,
      ));
  },
  (err) => {
    disableFilters();
    alertErrorMessage(err);
  });


const onMapLoad = () => {
  validateForm();
  activatePage(activateFilters);
  fetchOffers();
  setUserFormSubmit( onSuccess, showFailMessage );

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    resetMap();
  });
};

loadMap(onMapLoad);


