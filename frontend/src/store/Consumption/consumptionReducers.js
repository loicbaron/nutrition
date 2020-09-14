import { ADD_ITEM_QUANTITY, REMOVE_ITEM_QUANTITY, CONSUMPTION_RESETED } from './consumptionActions';

export function consumption(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM_QUANTITY:
      return {
        ...state,
        [action.payload.itemId]: action.payload.quantity
      };
    case REMOVE_ITEM_QUANTITY:
      return {
        ...state,
        [action.payload.itemId]: 0
      };
    case CONSUMPTION_RESETED:
      return {};
    default:
      return state;
  }
}
