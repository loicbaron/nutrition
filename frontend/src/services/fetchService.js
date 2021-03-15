import config from '../configs/config';

const handleErrors = (response) => {
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('NOT OK');
    throw Error(response.statusText);
  }
  return response;
};

const fetchService = (endpoint, method, body) => fetch(`${config.api_back}/${endpoint}`, {
  method,
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: body && JSON.stringify(body),
})
  .then(handleErrors)
  .then(res => res.json());

export default fetchService;
