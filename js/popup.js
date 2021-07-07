const HOUSING_TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const createPopup = (ad) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
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

  const fillAddress = function() {
    const adAddress = adElement.querySelector('.popup__text--address');
    if (ad['address']) {
      adAddress.textContent = `Координаты: ${ad.address.lat}, ${ad.address.lng}`;
    } else {
      adAddress.classList.add('hidden');
    }
  };
  fillAddress();

  const fillPrice = function() {
    const adPrice = adElement.querySelector('.popup__text--price');
    if (ad['price']) {
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

  const getCaptionByType = function(type) {
    if (HOUSING_TYPES[type]) {
      return HOUSING_TYPES[type];
    } else {
      return '';
    }
  };
  adElement.querySelector('.popup__type').textContent = getCaptionByType(ad.type);
  const fillDescription = function() {
    const adDescription = adElement.querySelector('.popup__description');
    if (ad['description']) {
      adDescription.textContent = ad.description;
    } else {
      adDescription.classList.add('hidden');
    }
  };
  fillDescription();

  const fillTime = function() {
    const adTime = adElement.querySelector('.popup__text--time');
    if (ad['checkin']) {
      adTime.textContent = `Заезд после ${ad.checkin}, выезд до ${ad.checkout}`;
    } else {
      adTime.classList.add('hidden');
    }
  };
  fillTime();

  const getFeatures = function() {
    adElement.querySelector('.popup__features').innerHTML = '';
    const currentModifiers = ad.features.map((feature) => `popup__feature--${feature}`);
    currentModifiers.forEach((element) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(element);
      adElement.querySelector('.popup__features').appendChild(featureItem);
    });
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

  const getPhotos = function() {
    adElement.querySelector('.popup__photos').innerHTML = '';
    ad.photos.forEach((element) => {
      const photosItem = document.createElement('img');
      photosItem.src = element;
      photosItem.alt = 'Фотография жилья';
      photosItem.width = 70;
      photosItem.height = 40;
      adElement.querySelector('.popup__photos').appendChild(photosItem);
    });
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

  const fillAvatar = function() {
    const adAvatar = adElement.querySelector('.popup__avatar');
    if (ad['avatar']) {
      adAvatar.src = ad.avatar;
    } else {
      adAvatar.src = '../img/avatars/default.png';
    }
  };
  fillAvatar();

  return adElement;
};

export { createPopup };
