import config from '../configs/config';

const handleErrors = (response) => {
  if (!response.ok) {
    console.log('NOT OK');
    throw Error(response.statusText);
  }
  return response;
};

export default function (endpoint, method, body) {
  return fetch(`${config.api_back}/${endpoint}`, {
    method,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: body && JSON.stringify(body),
  })
    .then(handleErrors)
    .then(res => res.json());
}
