import { activateForm, disableForm } from './ad-form.js';
import { createPopup } from './popup.js';

disableForm();

const addressInput = document.querySelector('#address');
const NUMBER_OF_DECIMALS = 5;

const DEFAULT_LOCATION = {
  lat: 35.6656575,
  lng: 139.7610263,
};

const DEFAULT_ZOOM = 13;

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView(
    DEFAULT_LOCATION, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAncor: [26, 52],
});

const mainPinMarker = L.marker(
  DEFAULT_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const latInitial = Number(mainPinMarker.getLatLng().lat).toFixed(NUMBER_OF_DECIMALS);
const lngInitial = Number(mainPinMarker.getLatLng().lng).toFixed(NUMBER_OF_DECIMALS);
addressInput.value = `${latInitial}, ${lngInitial}`;

mainPinMarker.on('moveend', (evt) => {
  const lat = Number(evt.target.getLatLng().lat).toFixed(NUMBER_OF_DECIMALS);
  const lng = Number(evt.target.getLatLng().lng).toFixed(NUMBER_OF_DECIMALS);
  addressInput.value = `${lat}, ${lng}`;
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const resetMap = function() {
  mainPinMarker.setLatLng(
    DEFAULT_LOCATION,
  );
  addressInput.value = `${latInitial}, ${lngInitial}`;
  map.setView(DEFAULT_LOCATION, DEFAULT_ZOOM);
  addressInput.value = `${DEFAULT_LOCATION.lat}, ${DEFAULT_LOCATION.lng}`;
};

const markersGroup = L.layerGroup().addTo(map);

const createMarker = (ad) => {
  const {lat, lng} = ad.location;

  const icon = pinIcon;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markersGroup)
    .bindPopup(
      createPopup(ad),
      {
        keepInView: true,
      },
    );
  return marker;
};

export { createMarker, resetMap };