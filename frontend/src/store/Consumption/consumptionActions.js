export const ADD_ITEM_QUANTITY = 'ADD_ITEM_QUANTITY';
export const REMOVE_ITEM_QUANTITY = 'REMOVE_ITEM_QUANTITY';
export const CONSUMPTION_RESETED = 'CONSUMPTION_RESETED';

export const addItemQuantity = (itemId, quantity) => ({
  type: ADD_ITEM_QUANTITY,
  payload: { itemId, quantity },
});
export const removeItemQuantity = itemId => ({
  type: REMOVE_ITEM_QUANTITY,
  payload: { itemId },
});
export const resetConsumption = () => ({
  type: CONSUMPTION_RESETED,
});
