export const SELECT_PORTION = 'SELECT_PORTION';
export const RESET_PORTION = 'RESET_PORTION';
export const RESET_ALL_SELECTED_PORTIONS = 'RESET_ALL_SELECTED_PORTIONS';
export const ADD_SELECTED_PORTIONS = 'ADD_SELECTED_PORTIONS';

export const selectPortion = (item, position, age) => ({
  type: SELECT_PORTION,
  payload: { item, position, age },
});
export const resetPortion = item => ({
  type: RESET_PORTION,
  payload: { item },
});
export const resetAllPortions = () => ({
  type: RESET_ALL_SELECTED_PORTIONS,
});
export const addSelectedPortions = () => ({
  type: ADD_SELECTED_PORTIONS,
});
