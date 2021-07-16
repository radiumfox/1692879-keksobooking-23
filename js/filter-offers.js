import {createMarker} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const selectPrice = mapFilters.querySelector('#housing-price');
const selectType = mapFilters.querySelector('#housing-type');
const selectRooms = mapFilters.querySelector('#housing-rooms');
const selectGuests = mapFilters.querySelector('#housing-guests');
const selectFeatures = mapFilters.querySelector('.map__features');
let selectedFeatures = [];
const featuresInputs = selectFeatures.querySelectorAll('input');
const OFFER_QUANTITY = 10;
let createdOffers = [];

const checkPrice = (element) => {
  const price = element.offer.price;
  return (
    selectPrice.value === 'middle' && price >= 10000 && price <= 50000) ||
    (selectPrice.value === 'low' && price < 10000) ||
    (selectPrice.value === 'high' && price > 50000) ||
    (selectPrice.value === 'any');
};

const checkHouseType = (element) =>
  (selectType.value === element.offer.type || selectType.value === 'any');

const checkRoomsNumber = (element) =>
  (+selectRooms.value === element.offer.rooms || selectRooms.value === 'any');

const checkGuestsNumber = (element) =>
  (+selectGuests.value === element.offer.guests || selectGuests.value === 'any');

const checkFeatures = (element) => {
  selectedFeatures = [];
  let result = false;
  let counter = 0;

  featuresInputs.forEach((input) => {
    if (input.checked) {
      selectedFeatures.push(input.value);
    }
  });
  if (selectedFeatures.length === 0) {
    result = true;
  } else if (element.offer.features) {
    selectedFeatures.forEach((feature) => {
      if (element.offer.features.includes(feature)) {
        counter++;
      }
    });
    result = (counter === selectedFeatures.length);
  }
  return result;
};

const filterAll = (element) =>
  checkHouseType(element) &&
  checkPrice(element) &&
  checkGuestsNumber(element) &&
  checkFeatures(element) &&
  checkRoomsNumber(element);

const showSimilarOffers = (similarOffers) => {
  createdOffers.forEach((offer) => offer.remove());

  createdOffers = [];

  similarOffers
    .filter(filterAll)
    .slice(0, OFFER_QUANTITY)
    .forEach((offer) => {
      createdOffers.push(createMarker(offer));
    });
};

const onFilterChange = (offers) => mapFilters.addEventListener('change', offers);

export { showSimilarOffers, onFilterChange };
