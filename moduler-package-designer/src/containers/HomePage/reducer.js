import { fromJS } from 'immutable'

import {
  INCREMENT,
  DECREMENT,
} from './constant.js'

const initialState = fromJS({
  count: 0,
})



function homeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state
        .update('count', count => count + 1)
    case DECREMENT:
      return state
        .update('count', count => count - 1)
    default:
      return state;
  }
}

export default homeReducer;