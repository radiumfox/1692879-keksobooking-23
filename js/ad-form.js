import { sendData } from './fetch-data.js';

const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const titleMinLength = titleInput.getAttribute('minLength');
const priceInput = adForm.querySelector('#price');
const priceMaxValue = priceInput.getAttribute('max');
const typeInput = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const checkin = adForm.querySelector('#timein');
const checkout = adForm.querySelector('#timeout');
const formFieldsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapControls = mapFilter.querySelectorAll('select');

const DEFAULT_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const NUMBER_OF_GUESTS = {
  '1': [1],
  '2': [1, 2],
  '3': [1, 2, 3],
  '100': [0],
};

const disableFilters = () => {
  mapFilter.classList.add('map__filters--disabled');
  for (let index = 0; index < mapControls.length; index++) {
    mapControls[index].setAttribute('disabled', 'disabled');
  }
};

const disablePage = (filtersInactivator) => {
  adForm.classList.add('ad-form--disabled');
  for (let index = 0; index < formFieldsets.length; index++) {
    formFieldsets[index].setAttribute('disabled', 'disabled');
  }
  filtersInactivator();
};

const activateFilters = () => {
  mapFilter.classList.remove('map__filters--disabled');
  for (let index = 0; index < mapControls.length; index++) {
    mapControls[index].removeAttribute('disabled');
  }
};

const activatePage = (filtersEnabler) => {
  adForm.classList.remove('ad-form--disabled');
  for (let index = 0; index < formFieldsets.length; index++) {
    formFieldsets[index].removeAttribute('disabled');
  }
  filtersEnabler();
};

const checkTitle = () => {
  const titleLength = titleInput.value.length;
  if (titleLength < titleMinLength){
    titleInput.setCustomValidity(`Еще ${titleMinLength - titleLength} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
};

const checkPrice = () => {
  const minPrice = DEFAULT_PRICES[typeInput.value];
  if (priceInput.value < minPrice) {
    priceInput.setCustomValidity(`Цена за ночь не может быть ниже ${minPrice} р.`);
  } else if (Number(priceInput.value) > priceMaxValue) {
    priceInput.setCustomValidity(`Цена за ночь не может быть выше ${priceMaxValue} р.`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

const checkCapacity = () => {
  if (NUMBER_OF_GUESTS[roomNumber.value].includes(Number(capacity.value))) {
    capacity.setCustomValidity('');
  } else {
    capacity.setCustomValidity('Неверно введено число гостей');
  }
  capacity.reportValidity();
};

const checkTimeIn = () => {
  checkout.value = checkin.value;
};

const checkTimeOut = () => {
  checkin.value = checkout.value;
};

priceInput.placeholder = DEFAULT_PRICES[typeInput.value];

titleInput.addEventListener('input', checkTitle);
priceInput.addEventListener('input', checkPrice);
capacity.addEventListener('input', checkCapacity);
checkin.addEventListener('change', checkTimeIn);
checkout.addEventListener('change', checkTimeOut);

const resetForm = () => {
  adForm.reset();
};

const setUserFormSubmit = (onSuccess, onFail) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

export { disablePage, disableFilters, activatePage, activateFilters, setUserFormSubmit, resetForm };
