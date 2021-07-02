const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const minTitle = titleInput.getAttribute('minLength');
const priceInput = adForm.querySelector('#price');
const MAX_PRICE = priceInput.getAttribute('max');
const typeInput = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const checkin = adForm.querySelector('#timein');
const checkout = adForm.querySelector('#timeout');

const MIN_PRICES = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const checkTitle = function() {
  const titleLength = titleInput.value.length;
  if(titleLength < minTitle){
    titleInput.setCustomValidity(`Еще ${minTitle - titleLength} символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
};

const checkPrice = function() {
  const minPrice = MIN_PRICES[typeInput.value];
  if(priceInput.value < minPrice) {
    priceInput.setCustomValidity(`Цена за ночь не может быть ниже ${minPrice} р.`);
  } else if (Number(priceInput.value) > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена за ночь не может быть выше ${MAX_PRICE} р.`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

const checkCapacity = function() {
  const numberOfGuests = {
    '1':[1],
    '2':[1, 2],
    '3':[1, 2, 3],
    '100':[0],
  };
  capacity.setCustomValidity(numberOfGuests[roomNumber.value].includes(Number(capacity.value)) ? '' : 'Число гостей не должно превышать число комнат');
  capacity.reportValidity();
};

const checkTime = function() {
  checkout.value = checkin.value;
};

const validateForm = function() {
  titleInput.addEventListener('input', checkTitle);
  priceInput.addEventListener('input', checkPrice);
  capacity.addEventListener('input', checkCapacity);
  checkin.addEventListener('change', checkTime);
  priceInput.placeholder = MIN_PRICES[typeInput.value];
};

export { validateForm };
