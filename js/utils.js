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

const ALERT_SHOW_TIME = 5000;

const alertErrorMessage = (err) => {
  const map = document.querySelector('.map__canvas');
  const messageBox = document.createElement('div');
  const messageContent = document.createElement('p');
  messageContent.innerHTML = `Ошибка: <br> ${err}`;
  messageContent.style.fontSize = '25px';
  messageContent.style.color = 'white';
  messageContent.style.wordWrap = 'break-word';
  messageBox.style.width = '500px';
  messageBox.style.height = 'auto';
  messageBox.style.position ='absolute';
  messageBox.style.zIndex = '1100';
  messageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  messageBox.style.left = '25%';
  messageBox.style.top = '25%';
  messageBox.style.textAlign = 'center';
  messageBox.appendChild(messageContent);
  map.appendChild(messageBox);
  setTimeout(() => {
    messageBox.remove();
  }, ALERT_SHOW_TIME);
};

const body = document.querySelector('body');

const createSuccessMessage = () => {
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

const createFailMessage = () => {
  const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const failMessage = failMessageTemplate.cloneNode(true);
  body.appendChild(failMessage);
  const closeButton = failMessage.querySelector('.error__button');
  closeButton.addEventListener('click', () => {
    failMessage.remove();
  });
};

export { getRandomInteger, getRandomFloat, createRandomArray, alertErrorMessage, createSuccessMessage, createFailMessage };
