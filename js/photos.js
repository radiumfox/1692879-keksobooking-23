import { adForm } from './ad-form.js';

const VALID_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
];

const avatarInput = adForm.querySelector('#avatar');
const photosInput = adForm.querySelector('#images');

const photosContainer = document.querySelector('.ad-form__photo');
const photoPreview = document.createElement('img');
photoPreview.classList.add('ad-form__photo--preview');
photosContainer.appendChild(photoPreview);

const avatarContainer = document.querySelector('.ad-form-header__preview');
const avatarPreview = avatarContainer.querySelector('img');

const checkFileType = (photo, input) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = VALID_EXTENSIONS.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photo.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

avatarInput.addEventListener('change', () => {
  checkFileType(avatarPreview, avatarInput);
});

photosInput.addEventListener('change', () => {
  checkFileType(photoPreview, photosInput);
});


