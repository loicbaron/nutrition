import { SELECT_PORTION, RESET_PORTION, RESET_ALL_SELECTED_PORTIONS } from './consumptionActions';

const result = [];

function consumption(state = {}, action) {
  switch (action.type) {
    case SELECT_PORTION:
      // eslint-disable-next-line no-case-declarations
      const { item, position, age } = action.payload;
      console.log('item', item);
      console.log('position', position);
      console.log('age', age);
      // eslint-disable-next-line no-case-declarations
      const { weight } = item.portions
        .find(portion => portion.position === position && portion.type === age) || 0;
      console.log(weight);
      result.push(
        {
          id: item.id,
          name: item.name,
          weight,
        },
      );
      console.log(result);
      return {
        ...state,
        [item.id]: position,
        result: result,
      };
    case RESET_PORTION:
      // eslint-disable-next-line no-case-declarations
      const key = action.payload.item.id;
      // eslint-disable-next-line no-case-declarations
      const { [key]: value, ...withoutKey } = state;
      return withoutKey;
    case RESET_ALL_SELECTED_PORTIONS:
      return { result };
    default:
      return state;
  }
}
export default consumption;
