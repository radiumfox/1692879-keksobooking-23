import './popup.js';
import { validateForm, setUserFormSubmit, resetForm } from './ad-form.js';
import { createMarker, resetMap } from './map.js';
import  { getData } from './fetch-data.js';
import { alertErrorMessage, showSuccessMessage, showFailMessage } from './utils.js';

validateForm();

const fetchOffers = getData (
  (data) => {
    data.forEach((el) => { createMarker(el); });
  },
  (err) => {
    alertErrorMessage(err);
  });

fetchOffers();

const getSuccessActions = () => {
  showSuccessMessage();
  resetForm();
  resetMap();
};

setUserFormSubmit( getSuccessActions, showFailMessage );

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMap();
});
