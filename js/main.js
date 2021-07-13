import './popup.js';
import { validateForm, setUserFormSubmit, resetForm } from './ad-form.js';
import { createMarker, resetMap } from './map.js';
import  { getData } from './fetch-data.js';
import { alertErrorMessage, createSuccessMessage, createFailMessage } from './utils.js';

validateForm();

const fetchOffers = getData (
  (data) => {
    data.forEach((el) => { createMarker(el); });
  },
  (err) => {
    alertErrorMessage(err);
  });

fetchOffers();

setUserFormSubmit( createSuccessMessage, resetForm, resetMap, createFailMessage );

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', () => {
  resetForm();
  resetMap();
});
