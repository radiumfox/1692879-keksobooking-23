import { getRandomInteger, createRandomArray, getRandomFloat } from './utils.js';
import { TYPES_OF_HOUSE, PHOTOS, FEATURES, ACCOMODATION_TIMES, SIMILAR_ADVERTISMENTS_COUNT, DESCRIPTIONS } from './ads-info.js';

const createAuthor = () => {
  const avatarNumber = getRandomInteger(1, 11);
  if (avatarNumber < 10) {
    return {
      avatar: `./img/avatars/user0${avatarNumber}.png`,
    };
  } else if (avatarNumber >= 10) {
    return {
      avatar: `./img/avatars/user${avatarNumber}.png`,
    };
  }
};

const createOffer = () => {
  const houseType = TYPES_OF_HOUSE[getRandomInteger(0, TYPES_OF_HOUSE.length - 1)];
  const acсomodationTime = ACCOMODATION_TIMES[getRandomInteger(0, ACCOMODATION_TIMES.length - 1)];

  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);

  const getRoomsNumber = () => {
    const roomsNumber = getRandomInteger(1, 10);
    return roomsNumber;
  };

  const getDescriptionByType = (type) => {
    if (DESCRIPTIONS[type]) {
      return DESCRIPTIONS[type];
    }
    return '';
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

createAdvertisments();
