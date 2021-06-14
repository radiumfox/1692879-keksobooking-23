import {getRandomFloat} from './util.js';

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

const address = {
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
};

const latitude = address.lat;
const longitude = address.lng;

export {TYPE_OF_HOUSE, PHOTOS, FEATURES, ACCOMODATION_TIME, SIMILAR_ADVERTISMENTS_COUNT, address, latitude, longitude};
