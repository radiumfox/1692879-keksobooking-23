const VALID_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
];

const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const avatarInput = document.querySelector('#avatar');
const avatarContainer = document.querySelector('.ad-form-header__preview');
const avatarPreview = avatarContainer.querySelector('img');

const photosInput = document.querySelector('#images');
const photosContainer = document.querySelector('.ad-form__photo');
const photoPreview = document.createElement('img');

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

const createAvatarPreview = () => {
  avatarInput.addEventListener('change', () => {
    checkFileType(avatarPreview, avatarInput);
  });
};

const createPhotoPreview = () => {
  photosInput.addEventListener('change', () => {
    photoPreview.classList.add('ad-form__photo--preview');
    photosContainer.appendChild(photoPreview);
    checkFileType(photoPreview, photosInput);
  });
};

const resetPhotos = () => {
  avatarPreview.src = DEFAULT_AVATAR;
  photoPreview.remove();
};

export { resetPhotos, createAvatarPreview, createPhotoPreview };
