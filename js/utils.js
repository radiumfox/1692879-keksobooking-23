const body = document.querySelector('body');

const getRandomInteger = (number1, number2) => {
  const min = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const max = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
};

const getRandomFloat = (number1, number2, numberOfDecimals) => {
  const min = Math.min(Math.abs(number1), Math.abs(number2));
  const max = Math.max(Math.abs(number1), Math.abs(number2));
  const randomFloat = +(Math.random() * (max - min) + min).toFixed(numberOfDecimals);
  return randomFloat;
};

const createRandomArray = (oldArray) => {
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
  const map = document.querySelector('.map__canvas');
  errorMessageContent.innerHTML = `${err}`;
  map.appendChild(errorMessage);
  closeButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
  window.addEventListener('click', () => {
    successMessage.remove();
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successMessage.remove();
    }
  });
};

const showFailMessage = () => {
  const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const failMessage = failMessageTemplate.cloneNode(true);
  const closeButton = failMessage.querySelector('.error__button');
  body.appendChild(failMessage);
  closeButton.addEventListener('click', () => {
    failMessage.remove();
  });
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomInteger, getRandomFloat, createRandomArray, alertErrorMessage, showSuccessMessage, showFailMessage, debounce };
