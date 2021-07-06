import { getRandomInteger, createRandomArray, getRandomFloat } from './utils.js';
import { TYPE_OF_HOUSE, PHOTOS, FEATURES, ACCOMODATION_TIME, SIMILAR_ADVERTISMENTS_COUNT, DESCRIPTIONS } from './ads-info.js';

const createAuthor = function() {
  return {
    avatar: `img/avatar/user0${getRandomInteger(1, 8)}`,
  };
};

const createOffer = function() {
  const houseType = TYPE_OF_HOUSE[getRandomInteger(0, TYPE_OF_HOUSE.length - 1)];
  const acсomodationTime = ACCOMODATION_TIME[getRandomInteger(0, ACCOMODATION_TIME.length - 1)];

  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);

  const getRoomsNumber = function() {
    const roomsNumber = getRandomInteger(1, 10);
    return roomsNumber;
  };

  const getDescriptionByType = function(type) {
    if (DESCRIPTIONS[type]) {
      return DESCRIPTIONS[type];
    } else {
      return '';
    }
  };

  return {
    title: 'Отличные апартаменты для отдыха',
    address: {lat, lng},
    price: getRandomInteger(1, 10000),
    type: houseType,
    rooms: getRoomsNumber(),
    guests: getRandomInteger(1, 10),
    checkin: acсomodationTime,
    checkout: acсomodationTime,
    features: createRandomArray(FEATURES),
    description: getDescriptionByType(houseType),
    photos: createRandomArray(PHOTOS),
  };
};

const createAdvertisment = () => Object.assign({}, createAuthor(), createOffer());

const createAdvertisments = () => new Array(SIMILAR_ADVERTISMENTS_COUNT).fill(null).map(() => createAdvertisment());

export { createAuthor, createOffer, createAdvertisments };
