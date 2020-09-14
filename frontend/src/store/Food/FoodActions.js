import fetchService from '../../services/fetchService'

export const REQUEST_FOOD = 'REQUEST_FOOD'
export const RECEIVE_FOOD = 'RECEIVE_FOOD'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'

export function selectCategory(categoryId) {
  return {
    type: SELECT_CATEGORY,
    categoryId
  }
}

export function invalidateCategory(categoryId) {
  return {
    type: INVALIDATE_CATEGORY,
    categoryId
  }
}

function requestFood(categoryId) {
  return {
    type: REQUEST_FOOD,
    categoryId
  }
}

function receiveFood(category, json) {
  return {
    type: RECEIVE_FOOD,
    category,
    food: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchFood(categoryId) {
  return dispatch => {
    dispatch(requestFood(categoryId))
    fetchService(`categories/${categoryId}/food`, 'GET')
      .then(food => dispatch(receiveFood(categoryId, food)));
  }
}

function shouldFetchFood(state, categoryId) {
  const food = state.foodByCategory[categoryId]
  if (!food) {
    return true
  } else if (food.isFetching) {
    return false
  } else {
    return food.didInvalidate
  }
}

export function fetchFoodIfNeeded(categoryId) {
  return (dispatch, getState) => {
    if (shouldFetchFood(getState(), categoryId)) {
      return dispatch(fetchFood(categoryId))
    }
  }
}