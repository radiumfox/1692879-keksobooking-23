import './popup.js';
import { validateForm } from './ad-form.js';
import { createMarker } from './map.js';
import { createAdvertisments } from './create-ads.js';

validateForm();

const similarAds = createAdvertisments();

similarAds.forEach((ad) => {
  createMarker(ad);
});
