function getRandomInteger(number1, number2) {
  const min = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const max = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
}

getRandomInteger(0, 7);

function getRandomFloat(number1, number2, numberOfDecimals) {
  const min = Math.min(Math.abs(number1), Math.abs(number2));
  const max = Math.max(Math.abs(number1), Math.abs(number2));
  const randomFloat = +(Math.random() * (max - min) + min).toFixed(numberOfDecimals);
  return randomFloat;
}

getRandomFloat(0, 0.6, 9);

const TYPE_OF_HOUSE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ACCOMODATION_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const SIMILAR_ADVERTISMENTS_COUNT = 10;

const createRandomArray = function(someArray) {
  for (let currentIndex = someArray.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = getRandomInteger(0, someArray.length - 1);
    [someArray[currentIndex], someArray[randomIndex]] = [someArray[randomIndex], someArray[currentIndex]];
  }
  const randomInteger = getRandomInteger(1, someArray.length);
  const newArray = someArray.splice(0, randomInteger);
  return newArray;
};

const createAuthor = function() {
  return {
    avatar: `img/avatar/user0${getRandomInteger(1, 8)}`,
  };
};

const createOffer = function() {
  return {
    title: '',
    address: '',
    price: getRandomInteger(1,  1000000),
    type: TYPE_OF_HOUSE[getRandomInteger(0, TYPE_OF_HOUSE.length - 1)],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 10),
    checkin: ACCOMODATION_TIME[getRandomInteger(0, ACCOMODATION_TIME.length - 1)],
    checkout: ACCOMODATION_TIME[getRandomInteger(0, ACCOMODATION_TIME.length - 1)],
    features: createRandomArray(FEATURES),
    description: '',
    photos: createRandomArray(PHOTOS),
  };
};

const createLocation = function() {
  return {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
};

const createAdvertisment = function() {
  return {
    autor: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };
};

const similarAdvertisments = new Array(SIMILAR_ADVERTISMENTS_COUNT).fill(null).map(() => createAdvertisment());

similarAdvertisments;
