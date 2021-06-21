import { createAdvertisments } from './create-ads.js';

const similarAds = createAdvertisments();
const mapBox = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;

const housingTypes = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

similarAds.forEach((ads) => {
  const adsElement = cardTemplate.cloneNode(true);

  for (const key in ads) {
    if (typeof ads[key] === 'undefined') {
      adsElement.querySelector(`.popup__${key}`).classList.add('hidden');
    }
  }

  adsElement.querySelector('.popup__avatar').src = ads.avatar;
  adsElement.querySelector('.popup__title').textContent = ads.title;
  adsElement.querySelector('.popup__text--address').textContent = ads.address;
  adsElement.querySelector('.popup__text--price').innerHTML = `${ads.price} <span>₽/ночь</span>`;
  adsElement.querySelector('.popup__type').textContent = ads.type;

  const getRooms = function() {
    switch (ads.rooms) {
      case 1:
        return `${ads.rooms} комната`;
      case 2:
      case 3:
      case 4:
        return `${ads.rooms} комнаты`;
      default:
        return `${ads.rooms} комнат`;
    }
  };

  const getGuests = function() {
    switch (ads.guests) {
      case 1:
        return `${ads.guests} гостя`;
      default:
        return `${ads.guests} гостей`;
    }
  };

  adsElement.querySelector('.popup__text--capacity').textContent = `${getRooms()} для ${getGuests()}`;
  adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads.checkin}, выезд до ${ads.checkout}`;
  adsElement.querySelector('.popup__description').textContent = ads.description;

  adsElement.querySelector('.popup__photos').innerHTML = '';
  const photos = ads.photos;
  for(let currentIndex = 0; currentIndex < photos.length; currentIndex++) {
    const photosItem = document.createElement('img');
    photosItem.src = photos[currentIndex];
    adsElement.querySelector('.popup__photos').appendChild(photosItem);
  }

  const features = ads.features;
  adsElement.querySelector('.popup__features').innerHTML = '';
  const currentModifiers = features.map((feature) => `popup__feature--${feature}`);
  for(let currentIndex = 0; currentIndex < currentModifiers.length; currentIndex++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(currentModifiers[currentIndex]);
    adsElement.querySelector('.popup__features').appendChild(featureItem);
  }

  for (const key in housingTypes) {
    if (key === ads.type) {
      const adsType = housingTypes[key];
      adsElement.querySelector('.popup__type').textContent = adsType;
    }
  }

  adsElement.querySelector('.popup').classList.add('hidden');
  mapBox.appendChild(adsElement);
});

document.querySelectorAll('.popup')[0].classList.remove('hidden');
