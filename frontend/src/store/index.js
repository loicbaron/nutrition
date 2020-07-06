import { createStore, combineReducers } from 'redux';
import personAge from './Person/personReducers';

const combinedReducers = combineReducers({
  personAge,
});

/* eslint-disable no-underscore-dangle */
const store = (process.env.ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'DEV')
  ? createStore(
    combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  : createStore(
    combinedReducers,
  );
/* eslint-enable */

export default store;