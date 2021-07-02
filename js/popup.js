import { createAdvertisments } from './create-ads.js';

const similarAds = createAdvertisments();
const mapBox = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;

const HOUSING_TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

similarAds.forEach((ad) => {
  const adElement = cardTemplate.cloneNode(true);

  const fillTitle = function() {
    const adTitle = adElement.querySelector('.popup__title');
    if (ad['title']) {
      adTitle.textContent = ad.title;
    } else {
      adTitle.classList.add('hidden');
    }
  };
  fillTitle();

  const fillAvatar = function() {
    const adAvatar = adElement.querySelector('.popup__avatar');
    if (ad['avatar']) {
      adAvatar.src = ad.avatar;
    } else {
      adAvatar.classList.add('hidden');
    }
  };
  fillAvatar();

  const fillAddress = function() {
    const adAddress = adElement.querySelector('.popup__text--address');
    if (ad['address']) {
      adAddress.textContent = ad.address;
    } else {
      adAddress.classList.add('hidden');
    }
  };
  fillAddress();

  const fillPrice = function() {
    const adPrice = adElement.querySelector('.popup__text--price');
    if(ad['price']) {
      adPrice.innerHTML = `${ad.price} <span>₽/ночь</span>`;
    } else {
      adPrice.classList.add('hidden');
    }
  };
  fillPrice();

  const fillType = function() {
    const adType = adElement.querySelector('.popup__type');
    if (ad['type']) {
      adType.textContent = ad.type;
    } else {
      adType.classList.add('hidden');
    }
  };
  fillType();

  const getRooms = function() {
    if (ad.rooms === 1) {
      return `${ad.rooms} комната`;
    } else if (ad.rooms > 1 && ad.rooms < 5) {
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
    const adCapacity = adElement.querySelector('.popup__text--capacity');
    if (ad['rooms'] && ad['guests']) {
      return adCapacity.textContent = `${getRooms()} для ${getGuests()}`;
    } else if (ad['rooms']) {
      return adCapacity.textContent = getRooms();
    } else if (ad['guests']) {
      adCapacity.textContent = `для ${getGuests()}`;
    } else {
      return adCapacity.classList.add('hidden');
    }
  };
  fillCapacity();

  const fillTime = function() {
    const adTime = adElement.querySelector('.popup__text--time');
    if (ad['checkin']) {
      adTime.textContent = `Заезд после ${ad.checkin}, выезд до ${ad.checkout}`;
    } else {
      adTime.classList.add('hidden');
    }
  };
  fillTime();

  const fillDescription = function() {
    const adDescription = adElement.querySelector('.popup__description');
    if (ad['description']) {
      adDescription.textContent = ad.description;
    } else {
      adDescription.classList.add('hidden');
    }
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
    const adPhotos = adElement.querySelector('.popup__photos');
    if (ad['photos']) {
      getPhotos();
    } else {
      adPhotos.classList.add('hidden');
    }
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
    const adFeatures = adElement.querySelector('.popup__features');
    if (ad['features']) {
      getFeatures();
    } else {
      adFeatures.classList.add('hidden');
    }
  };
  fillFeatures();

  const getCaptionByType = function(type) {
    if (HOUSING_TYPES[type]) {
      return HOUSING_TYPES[type];
    } else {
      return '';
    }
  };

  adElement.querySelector('.popup__type').textContent = getCaptionByType(ad.type);

  adElement.querySelector('.popup').classList.add('hidden');
  mapBox.appendChild(adElement);
});

document.querySelectorAll('.popup')[0].classList.remove('hidden');
