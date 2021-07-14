function getRandomInteger(number1, number2) {
  const min = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const max = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
}

function getRandomFloat(number1, number2, numberOfDecimals) {
  const min = Math.min(Math.abs(number1), Math.abs(number2));
  const max = Math.max(Math.abs(number1), Math.abs(number2));
  const randomFloat = +(Math.random() * (max - min) + min).toFixed(numberOfDecimals);
  return randomFloat;
}

const createRandomArray = function(oldArray) {
  const newArray = [];
  const randomLength = getRandomInteger(1, oldArray.length - 1);
  while(newArray.length < randomLength) {
    const randomIndex = getRandomInteger(0, oldArray.length - 1);
    if (newArray.indexOf(oldArray[randomIndex]) === -1) {
      newArray.push(oldArray[randomIndex]);
    }
  }

  return newArray;
};

const alertErrorMessage = (err) => {
  const alertErrorTemplate = document.querySelector('#alert').content.querySelector('.alert');
  const errorMessage = alertErrorTemplate.cloneNode(true);
  const errorMessageContent = errorMessage.querySelector('.alert__message');
  const closeButton = errorMessage.querySelector('.alert__button');
  errorMessageContent.innerHTML = `${err}`;
  const map = document.querySelector('.map__canvas');
  map.appendChild(errorMessage);
  closeButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const body = document.querySelector('body');

const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
  window.addEventListener('click', () => {
    successMessage.remove();
  });
  window.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      successMessage.remove();
    }
  });
};

const showFailMessage = () => {
  const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const failMessage = failMessageTemplate.cloneNode(true);
  body.appendChild(failMessage);
  const closeButton = failMessage.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    failMessage.remove();
  });
};

export { getRandomInteger, getRandomFloat, createRandomArray, alertErrorMessage, showSuccessMessage, showFailMessage };
