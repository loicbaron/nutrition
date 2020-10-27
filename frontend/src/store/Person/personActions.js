export const AGE_SELECTED = 'AGE_SELECTED';
export const AGE_RESETED = 'AGE_RESETED';

export const selectAge = age => ({
  type: AGE_SELECTED,
  payload: { age },
});

export const resetAge = () => ({
  type: AGE_RESETED,
});
