import {
  SELECT_PORTION, RESET_PORTION, CLEAR_SELECTED_PORTIONS, ADD_TO_CONSUMPTION, RESET_CONSUMPTION,
} from './consumptionActions';

const initialState = {
  selected: {},
  result: {},
};

function consumption(state = initialState, action) {
  switch (action.type) {
    case SELECT_PORTION:
      // eslint-disable-next-line no-case-declarations
      const { item, position, age } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const { weight } = item.portions
        .find(portion => portion.position === position && portion.type === age) || 0;
      return {
        ...state,
        selected: {
          ...state.selected,
          [item.id]: {
            ...item,
            weight,
            position,
          },
        },
      };
    case RESET_PORTION:
      // eslint-disable-next-line no-case-declarations
      const key = action.payload.item.id;
      // eslint-disable-next-line no-case-declarations
      const { [key]: value, ...withoutKey } = state.selected;
      return {
        ...state,
        selected: withoutKey,
      };
    case CLEAR_SELECTED_PORTIONS:
      return {
        ...state,
        selected: {},
      };
    case ADD_TO_CONSUMPTION:
      const portions = {};
      for (const [id, item] of Object.entries(state.selected)) {
        const currentWeight = state.result[id] ? state.result[id].weight : 0;
        item.weight = item.weight ? item.weight : 0;
        const totalWeight = currentWeight + item.weight;
        if (totalWeight) {
          for (const [key, value] of Object.entries(item.composition)) {
            item.composition[key] = Math.round(value * totalWeight) / 100;
          }
          portions[id] = { ...item, weight: totalWeight };
        }
      }
      return {
        ...state,
        result: {
          ...state.result,
          ...portions,
        },
      };
    case RESET_CONSUMPTION:
      return initialState;
    default:
      return state;
  }
}
export default consumption;
