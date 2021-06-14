import {getRandomInteger, createRandomArray} from './util.js';
import {TYPE_OF_HOUSE, PHOTOS, FEATURES, ACCOMODATION_TIME, latitude, longitude} from './advertisment-info.js';

const createAuthor = function() {
  return {
    avatar: `img/avatar/user0${getRandomInteger(1, 8)}`,
  };
};

const createOffer = function() {
  const houseType = TYPE_OF_HOUSE[getRandomInteger(0, TYPE_OF_HOUSE.length - 1)];
  const acсomodationTime = ACCOMODATION_TIME[getRandomInteger(0, ACCOMODATION_TIME.length - 1)];
  const getRoomsNumber = function() {
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

export {createAuthor, createOffer};
