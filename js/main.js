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

const createRandomArray = function(oldArray) {
  const newArray = [];
  const randomLength = getRandomInteger(0, oldArray.length-1);
  while(newArray.length < randomLength) {
    const randomIndex = getRandomInteger(0, oldArray.length-1);
    if(newArray.indexOf(oldArray[randomIndex]) === -1) {
      newArray.push(oldArray[randomIndex]);
    }
  }

  return newArray;
};

const createAuthor = function() {
  return {
    avatar: `img/avatar/user0${getRandomInteger(1, 8)}`,
  };
};

const address = {
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
};

const latitude = address.lat;
const longitude = address.lng;

const createOffer = function() {
  const houseType = TYPE_OF_HOUSE[getRandomInteger(0, TYPE_OF_HOUSE.length - 1)];
  const acсomodationTime = ACCOMODATION_TIME[getRandomInteger(0, ACCOMODATION_TIME.length - 1)];
  const getRoomsNumber = function(){
    const roomsNumber = getRandomInteger(1, 10);
    return roomsNumber;
  };

  return {
    title: `A nice and comfort ${houseType} in the center of the city.`,
    address: `${latitude}, ${longitude}`,
    price: getRandomInteger(1, 1000000),
    type: houseType,
    rooms: getRoomsNumber(),
    guests: getRandomInteger(1, 10),
    checkin: acсomodationTime,
    checkout: acсomodationTime,
    features: createRandomArray(FEATURES),
    description: `This ${houseType} has everything you need.`,
    photos: createRandomArray(PHOTOS),
  };
};

const createAdvertisment = function() {
  return {
    author: createAuthor(),
    offer: createOffer(),
    location: address,
  };
};

// eslint-disable-next-line no-unused-vars
const similarAdvertisments = new Array(SIMILAR_ADVERTISMENTS_COUNT).fill(null).map(() => createAdvertisment());
