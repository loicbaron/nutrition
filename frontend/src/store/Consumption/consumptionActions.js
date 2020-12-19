export const SELECT_PORTION = 'SELECT_PORTION';
export const RESET_PORTION = 'RESET_PORTION';
export const RESET_ALL_PORTIONS = 'RESET_ALL_PORTIONS';

export const selectPortion = (item, position, age) => ({
  type: SELECT_PORTION,
  payload: { item, position, age },
});
export const resetPortion = item => ({
  type: RESET_PORTION,
  payload: { item },
});
export const resetAllPortions = () => ({
  type: RESET_ALL_PORTIONS,
});
