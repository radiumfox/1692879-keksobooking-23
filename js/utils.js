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

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomInteger, getRandomFloat, createRandomArray, debounce };
