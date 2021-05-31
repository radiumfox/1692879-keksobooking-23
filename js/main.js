function getRandomInteger(min, max) {
  if(min > max) { //меняет min и max местами, если они введены не в том порядке
    const swap = min;
    min = max;
    max = swap;
  }
  if(min < 0 || max < 0) {
    return 'Диапазон должен быть положительным.';
  }
  if(min === max) {
    return 'Значения диапазона не должны быть равны.';
  }
  const randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomInteger;
}

getRandomInteger(2, 5);

function getRandomFloat(min, max, numberOfDecimals) {
  if(min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if(min < 0 || max < 0) {
    return 'Диапазон должен быть положительным.';
  }
  if(min === max) {
    return 'Значения диапазона не должны быть равны.';
  }
  const randomFloat = +(Math.random() * (max - min) + min).toFixed(numberOfDecimals);
  return randomFloat;
}

getRandomFloat(0, 0.2, 2);
