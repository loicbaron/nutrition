import {
  SELECT_CATEGORY,
  INVALIDATE_CATEGORY,
  REQUEST_FOOD,
  RECEIVE_FOOD
} from './FoodActions'

export function selectedCategory(state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function food(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_FOOD:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_FOOD:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.food,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function foodByCategory(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_CATEGORY:
    case RECEIVE_FOOD:
    case REQUEST_FOOD:
      return Object.assign({}, state, {
        [action.category]: food(state[action.category], action)
      })
    default:
      return state
  }
}