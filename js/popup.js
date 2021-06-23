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

similarAds.forEach((ad) => {
  const adElement = cardTemplate.cloneNode(true);

  const fillTitle = function() {
    Object.prototype.hasOwnProperty.call(ad, 'title')?
      adElement.querySelector('.popup__title').textContent = ad.title:
      adElement.querySelector('.popup__title').classList.add('hidden');
  };
  fillTitle();

  const fillAvatar = function() {
    Object.prototype.hasOwnProperty.call(ad, 'avatar')?
      adElement.querySelector('.popup__avatar').src = ad.avatar:
      adElement.querySelector('.popup__avatar').classList.add('hidden');
  };
  fillAvatar();

  const fillAddress = function() {
    Object.prototype.hasOwnProperty.call(ad, 'address')?
      adElement.querySelector('.popup__text--address').textContent = ad.address:
      adElement.querySelector('.popup__text--address').classList.add('hidden');
  };
  fillAddress();

  const fillPrice = function() {
    Object.prototype.hasOwnProperty.call(ad, 'price')?
      adElement.querySelector('.popup__text--price').innerHTML = `${ad.price} <span>₽/ночь</span>`:
      adElement.querySelector('.popup__text--price').classList.add('hidden');
  };
  fillPrice();

  const fillType = function() {
    Object.prototype.hasOwnProperty.call(ad, 'price')?
      adElement.querySelector('.popup__type').textContent = ad.type:
      adElement.querySelector('.popup__type').classList.add('hidden');
  };
  fillType();

  const getRooms = function() {
    if (ad.rooms === 1) {
      return `${ad.rooms} комната`;
    } else
    if (ad.rooms > 1 && ad.rooms < 5) {
      return `${ad.rooms} комнаты`;
    } else {
      return `${ad.rooms} комнат`;
    }
  };

  const getGuests = function() {
    if (ad.guests === 1) {
      return `${ad.guests} гостя`;
    } else {
      return `${ad.guests} гостей`;
    }
  };

  const fillCapacity = function() {
    if(Object.prototype.hasOwnProperty.call(ad, 'rooms') && Object.prototype.hasOwnProperty.call(ad, 'guests')) {
      return adElement.querySelector('.popup__text--capacity').textContent = `${getRooms()} для ${getGuests()}`;
    } else
    if (Object.prototype.hasOwnProperty.call(ad, 'rooms')) {
      return adElement.querySelector('.popup__text--capacity').textContent = getRooms();
    } else
    if (Object.prototype.hasOwnProperty.call(ad, 'guests')) {
      return adElement.querySelector('.popup__text--capacity').textContent = `для ${getGuests()}`;
    } else {
      return adElement.querySelector('.popup__text--capacity').classList.add('hidden');
    }
  };
  fillCapacity();

  const fillTime = function() {
    Object.prototype.hasOwnProperty.call(ad, 'checkin') && Object.prototype.hasOwnProperty.call(ad, 'checkin')?
      adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.checkin}, выезд до ${ad.checkout}`:
      adElement.querySelector('.popup__text--time').classList.add('hidden');
  };
  fillTime();

  const fillDescription = function() {
    Object.prototype.hasOwnProperty.call(ad, 'description')?
      adElement.querySelector('.popup__description').textContent = ad.description:
      adElement.querySelector('.popup__description').classList.add('hidden');
  };
  fillDescription();

  const getPhotos = function() {
    adElement.querySelector('.popup__photos').innerHTML = '';
    for (let currentIndex = 0; currentIndex < ad.photos.length; currentIndex++) {
      const photosItem = document.createElement('img');
      photosItem.src = ad.photos[currentIndex];
      photosItem.alt = 'Фотография жилья';
      adElement.querySelector('.popup__photos').appendChild(photosItem);
    }
  };

  const fillPhotos = function() {
    Object.prototype.hasOwnProperty.call(ad, 'photos')?
      getPhotos():
      adElement.querySelector('.popup__photos').classList.add('hidden');
  };
  fillPhotos();

  const getFeatures = function() {
    adElement.querySelector('.popup__features').innerHTML = '';
    const currentModifiers = ad.features.map((feature) => `popup__feature--${feature}`);
    for (let currentIndex = 0; currentIndex < currentModifiers.length; currentIndex++) {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(currentModifiers[currentIndex]);
      adElement.querySelector('.popup__features').appendChild(featureItem);
    }
  };

  const fillFeatures = function() {
    Object.prototype.hasOwnProperty.call(ad, 'features')?
      getFeatures():
      adElement.querySelector('.popup__features').classList.add('hidden');
  };
  fillFeatures();

  const getCaptionByType = function() {
    for (const key in housingTypes) {
      if (key === ad.type) {
        const adType = housingTypes[key];
        return adType;
      }
    }
  };
  adElement.querySelector('.popup__type').textContent = getCaptionByType();

  adElement.querySelector('.popup').classList.add('hidden');
  mapBox.appendChild(adElement);
});

document.querySelectorAll('.popup')[0].classList.remove('hidden');
