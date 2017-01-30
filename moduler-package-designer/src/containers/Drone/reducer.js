import { fromJS } from 'immutable'

import {
  DRONE_START,
  DRONE_STOP,
  SPEED_DECREASE,
  SPEED_INCREASE,
  ANGLE_INCREASE,
  ANGLE_DECREASE,
} from './constant.js'

const initialState = fromJS({
  engine: false,
  speed: 0,
  angle: 0,
  location: {
    x: 0,
    y: 0,
    z: 0,
  }
})

function droneReducer(state = initialState, action) {
  switch (action.type) {
    case DRONE_START:
      return state
        .set('engine', true)
    case DRONE_STOP:
      return state
        .set('engine', false)
    case SPEED_INCREASE:
      return state
        .update('speed', (speed) => speed + 1)
    case SPEED_DECREASE:
      return state
        .update('speed', (speed) => speed - 1)
    case ANGLE_INCREASE: 
      return state
        .update('angle', (angle) => angle + 1)
    case ANGLE_DECREASE:
      return state
        .update('angle', (angle) => angle - 1)
    default:
      return state;
  }
}

export default droneReducer;
