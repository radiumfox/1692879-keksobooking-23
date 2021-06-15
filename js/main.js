import { createAuthor, createOffer } from './create-ads.js';
import { SIMILAR_ADVERTISMENTS_COUNT, address } from './ads-info.js';

const createAdvertisment = function() {
  return {
    author: createAuthor(),
    offer: createOffer(),
    location: address,
  };
};

// eslint-disable-next-line no-unused-vars
const similarAdvertisments = new Array(SIMILAR_ADVERTISMENTS_COUNT).fill(null).map(() => createAdvertisment());
