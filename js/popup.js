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

  const fillTitle = () => {
    const adTitle = adElement.querySelector('.popup__title');
    if (ad.offer['title']) {
      adTitle.textContent = ad.offer.title;
    } else {
      adTitle.classList.add('hidden');
    }
  };
  fillTitle();

  const fillAddress = () => {
    const adAddress = adElement.querySelector('.popup__text--address');
    if (ad.offer['address']) {
      adAddress.textContent = `${ad.offer.address}`;
    } else {
      adAddress.classList.add('hidden');
    }
  };
  fillAddress();

  const fillPrice = () => {
    const adPrice = adElement.querySelector('.popup__text--price');
    const span = adPrice.querySelector('span');
    span.textContent = ' ₽/ночь';
    if (ad.offer['price']) {
      adPrice.textContent = `${ad.offer.price}`;
      adPrice.appendChild(span);
    } else {
      adPrice.classList.add('hidden');
    }
  };
  fillPrice();

  const fillType = () => {
    const adType = adElement.querySelector('.popup__type');
    if (ad.offer['type']) {
      adType.textContent = ad.offer.type;
    } else {
      adType.classList.add('hidden');
    }
  };
  fillType();

  const getCaptionByType = (type) => {
    if (HOUSING_TYPES[type]) {
      return HOUSING_TYPES[type];
    } else {
      return '';
    }
  };

  adElement.querySelector('.popup__type').textContent = getCaptionByType(ad.offer.type);
  const fillDescription = () => {
    const adDescription = adElement.querySelector('.popup__description');
    if (ad.offer['description']) {
      adDescription.textContent = ad.offer.description;
    } else {
      adDescription.classList.add('hidden');
    }
  };
  fillDescription();

  const fillTime = () => {
    const adTime = adElement.querySelector('.popup__text--time');
    if (ad.offer['checkin']) {
      adTime.textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
    } else {
      adTime.classList.add('hidden');
    }
  };
  fillTime();

  const getFeatures = () => {
    adElement.querySelector('.popup__features').innerHTML = '';
    const currentModifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
    currentModifiers.forEach((element) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(element);
      adElement.querySelector('.popup__features').appendChild(featureItem);
    });
  };

  const fillFeatures = () => {
    const adFeatures = adElement.querySelector('.popup__features');
    if (ad.offer['features']) {
      getFeatures();
    } else {
      adFeatures.classList.add('hidden');
    }
  };
  fillFeatures();

  const getPhotos = () => {
    adElement.querySelector('.popup__photos').innerHTML = '';
    ad.offer.photos.forEach((element) => {
      const photosItem = document.createElement('img');
      photosItem.src = element;
      photosItem.alt = 'Фотография жилья';
      photosItem.width = 70;
      photosItem.height = 40;
      adElement.querySelector('.popup__photos').appendChild(photosItem);
    });
  };

  const fillPhotos = () => {
    const adPhotos = adElement.querySelector('.popup__photos');
    if (ad.offer['photos']) {
      getPhotos();
    } else {
      adPhotos.classList.add('hidden');
    }
  };
  fillPhotos();

  const getRooms = () => {
    if (ad.offer.rooms === 1) {
      return `${ad.offer.rooms} комната`;
    } else if (ad.offer.rooms > 1 && ad.offer.rooms < 5) {
      return `${ad.offer.rooms} комнаты`;
    } else {
      return `${ad.offer.rooms} комнат`;
    }
  };

  const getGuests = () => {
    if (ad.offer.guests === 1) {
      return `${ad.offer.guests} гостя`;
    } else {
      return `${ad.offer.guests} гостей`;
    }
  };

  const fillCapacity = () => {
    const adCapacity = adElement.querySelector('.popup__text--capacity');
    if (ad.offer['rooms'] && ad.offer['guests']) {
      return adCapacity.textContent = `${getRooms()} для ${getGuests()}`;
    } else if (ad.offer['rooms']) {
      return adCapacity.textContent = getRooms();
    } else if (ad.offer['guests']) {
      adCapacity.textContent = `для ${getGuests()}`;
    } else {
      return adCapacity.classList.add('hidden');
    }
  };
  fillCapacity();

  const fillAvatar = () => {
    const adAvatar = adElement.querySelector('.popup__avatar');
    if (ad.author['avatar']) {
      adAvatar.src = ad.author.avatar;
    } else {
      adAvatar.src = './img/avatars/default.png';
    }
  };
  fillAvatar();

  return adElement;
};

export { createPopup };
