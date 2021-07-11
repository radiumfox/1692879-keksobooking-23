const BASE_URL = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => () => fetch (
  `${BASE_URL}/data`,
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`При загрузке данных произошла ошибка: ${response.status} - ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onFail(err);
  });

const sendData = (onSuccess, onFail, body) => {
  fetch (
    BASE_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData, sendData };
