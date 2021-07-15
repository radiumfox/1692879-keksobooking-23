import { validateForm, setUserFormSubmit, resetForm } from './ad-form.js';
import { resetMap } from './map.js';
import  { getData } from './fetch-data.js';
import { alertErrorMessage, showSuccessMessage, showFailMessage } from './utils.js';
import { showSimilarOffers, onFilterChange } from './filter-offers.js';
import { debounce } from './utils.js';

validateForm();
const RENDER_DELAY = 500;

const fetchOffers = getData (
  (data) => {
    showSimilarOffers(data);
    onFilterChange(
      debounce(() => showSimilarOffers(data),
        RENDER_DELAY,
      ));
  },
  (err) => {
    alertErrorMessage(err);
  });

fetchOffers();

const onSuccess = () => {
  showSuccessMessage();
  resetForm();
  resetMap();
};

setUserFormSubmit( onSuccess, showFailMessage );

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMap();
});
