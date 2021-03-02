export const SELECT_PORTION = 'SELECT_PORTION';
export const RESET_PORTION = 'RESET_PORTION';
export const CLEAR_SELECTED_PORTIONS = 'CLEAR_SELECTED_PORTIONS';
export const ADD_TO_CONSUMPTION = 'ADD_TO_CONSUMPTION';
export const RESET_CONSUMPTION = 'RESET_CONSUMPTION';

export const selectPortion = (item, position, age) => ({
  type: SELECT_PORTION,
  payload: { item, position, age },
});
export const resetPortion = item => ({
  type: RESET_PORTION,
  payload: { item },
});
export const resetAllPortions = () => ({
  type: CLEAR_SELECTED_PORTIONS,
});
export const addSelectedPortions = () => ({
  type: ADD_TO_CONSUMPTION,
});
export const resetConsumption = () => ({
  type: RESET_CONSUMPTION,
});
