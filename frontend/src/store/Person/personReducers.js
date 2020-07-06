import { AGE_SELECTED, AGE_RESETED } from './personActions';

export default function personAge(state = '', action) { // NOSONAR
  switch (action.type) {
    case AGE_SELECTED:
      return action.payload.age;
    case AGE_RESETED:
      return '';
    default:
      return state;
  }
}