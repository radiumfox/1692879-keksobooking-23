function getRandomInteger(min, max) {
  if(min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if(min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным.');
  }
  if(min === max) {
    return min;
  }
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
}

getRandomInteger(0, 7);

function getRandomFloat(min, max, numberOfDecimals) {
  if(min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if(min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным.');
  }
  if(min === max) {
    return min;
  }
  const randomFloat = +(Math.random() * (max - min) + min).toFixed(numberOfDecimals);
  return randomFloat;
}

getRandomFloat(0, 0.6, 9);
