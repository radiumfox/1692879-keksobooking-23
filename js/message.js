const body = document.querySelector('body');
const alertErrorTemplate = document.querySelector('#alert').content.querySelector('.alert');
const alertMessage = alertErrorTemplate.cloneNode(true);
const alertMessageContent = alertMessage.querySelector('.alert__message');
const alertButton = alertMessage.querySelector('.alert__button');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = failMessageTemplate.querySelector('.error__button');
const map = document.querySelector('.map__canvas');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const removeMessage = () => {
  const successMessage = document.querySelector('.success');
  const failMessage = document.querySelector('.error');

  if (successMessage) {
    successMessage.remove();
  } else if (failMessage) {
    failMessage.remove();
  } else if (alertMessage) {
    alertMessage.remove();
  }
};

const onPageClick = () => {
  removeMessage();
  removeEventListener('click', onPageClick);
};

const onEscPress = (evt) => {
  if (isEscEvent(evt)) {
    removeMessage();
    document.removeEventListener('keydown', onEscPress);
  }
};

const onButtonPress = () => {
  removeMessage();
  errorButton.removeEventListener('click', onButtonPress);
  alertButton.removeEventListener('click', onButtonPress);
};

const alertErrorMessage = (err) => {
  alertMessageContent.innerHTML = `${err}`;
  map.appendChild(alertMessage);
  alertButton.addEventListener('click', onButtonPress);
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
  document.addEventListener('click', onPageClick);
  document.addEventListener('keydown', onEscPress);
};

const showFailMessage = () => {
  const failMessage = failMessageTemplate.cloneNode(true);
  body.appendChild(failMessage);
  document.addEventListener('click', onPageClick);
  document.addEventListener('keydown', onEscPress);
  errorButton.addEventListener('click', onButtonPress);
};

export { alertErrorMessage, showSuccessMessage, showFailMessage };
