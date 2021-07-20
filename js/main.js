import { setUserFormSubmit, resetForm, disablePage, disableFilters } from './ad-form.js';
import { resetMap, loadMap } from './map.js';
import  { getData } from './fetch-data.js';
import { alertErrorMessage, showSuccessMessage, showFailMessage } from './message.js';
import { showSimilarOffers, onFilterChange } from './filter-offers.js';
import { debounce } from './utils.js';
import { resetPhotos, createAvatarPreview, createPhotoPreview } from './photos.js';

const RENDER_DELAY = 500;
const resetButton = document.querySelector('.ad-form__reset');

disablePage(disableFilters);

createAvatarPreview();
createPhotoPreview();

const onSuccess = () => {
  showSuccessMessage();
  resetForm();
  resetMap();
  resetPhotos();
};

const fetchOffers = getData(
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
  fetchOffers();
  setUserFormSubmit(onSuccess, showFailMessage);

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    resetMap();
  });
};

loadMap(onMapLoad);
