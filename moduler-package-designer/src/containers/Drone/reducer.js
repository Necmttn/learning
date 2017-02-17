import { fromJS } from 'immutable'

import {
  DRONE_START,
  DRONE_STOP,
  DEC_ALTITUDE,
  INC_ALTITUDE,
  MOVE_BACKWARD,
  MOVE_FORWARD,
  MOVE_LEFT,
  MOVE_RIGHT,
  ROTATE_RIGHT,
  ROTATE_LEFT,
  UPDATE_LOCATION
} from './constant.js'

/*
 *  As Drone fly physics laws a1 and a2 turns clockwise, b1 and b2 oppisite side of clock wise. 
 *  So we need to show rotatation of engine with (-)  
 * 
 * 
 *                                  $Inc Altitude: a1++ b1++ a2++ b2++
 *                                  $decs Altitude: a1-- b1-- a2-- b2-- 
 *         (front)                  $Move forward:  a1++ b1++  a2-- b2--
 *    (-)            (+)            $Move Backward: b2++  a2++  a1-- b1--
 *    (a1)        (b1)              $Move Right: a1++  b2++  b1-- a2--
 *        \_______/                 $Move Left: b1++ a2++ a1-- b2--
 *       ⎛ DRONE \                 $Rotate/yaw Left: a1++ a2++ b1-- b2-- 
 *        \_______|                 $Rotate/yaw Right: b1++ b2++ a1-- a2--
 *       /        \                 
 *    (b2)         (a2)
 *   (+)             (-)
 *          (back)
 * 
 * 
 */



const initialState = fromJS({
  engine: false,
  engines: {
    a1: 0,
    b2: 0,
    b1: 0,
    a2: 0,
    angle: 0,
  },
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
        .updateIn(['engines', 'a1'], (a1) =>  -10)
        .updateIn(['engines', 'a2'], (a2) =>  -10)
        .updateIn(['engines', 'b1'], (b1) =>  10)
        .updateIn(['engines', 'b2'], (b2) =>  10)
    case DRONE_STOP:
      return state
        .set('engine', false)
        .updateIn(['engines', 'a1'], (a1) => 0)
        .updateIn(['engines', 'a2'], (a2) => 0)
        .updateIn(['engines', 'b1'], (b1) => 0)
        .updateIn(['engines', 'b2'], (b2) => 0)
    case INC_ALTITUDE:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 - 1)
        .updateIn(['engines', 'a2'], (a2) => a2 - 1)
        .updateIn(['engines', 'b1'], (b1) => b1 + 1)
        .updateIn(['engines', 'b2'], (b2) => b2 + 1)
    case DEC_ALTITUDE:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 + 1)
        .updateIn(['engines', 'a2'], (a2) => a2 + 1)
        .updateIn(['engines', 'b1'], (b1) => b1 - 1)
        .updateIn(['engines', 'b2'], (b2) => b2 - 1)
    case MOVE_FORWARD:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 + 1)
        .updateIn(['engines', 'a2'], (a2) => a2 - 1)
        .updateIn(['engines', 'b1'], (b1) => b1 - 1)
        .updateIn(['engines', 'b2'], (b2) => b2 + 1)
    case MOVE_BACKWARD:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 - 1)
        .updateIn(['engines', 'a2'], (a2) => a2 + 1)
        .updateIn(['engines', 'b1'], (b1) => b1 + 1)
        .updateIn(['engines', 'b2'], (b2) => b2 - 1)
    case MOVE_LEFT:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 + 1)
        .updateIn(['engines', 'a2'], (a2) => a2 - 1)
        .updateIn(['engines', 'b1'], (b1) => b1 + 1)
        .updateIn(['engines', 'b2'], (b2) => b2 - 1)
    case MOVE_RIGHT:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 - 1)
        .updateIn(['engines', 'a2'], (a2) => a2 + 1)
        .updateIn(['engines', 'b1'], (b1) => b1 - 1)
        .updateIn(['engines', 'b2'], (b2) => b2 + 1)
    case ROTATE_LEFT:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 - 1)
        .updateIn(['engines', 'a2'], (a2) => a2 - 1)
        .updateIn(['engines', 'b1'], (b1) => b1 - 1)
        .updateIn(['engines', 'b2'], (b2) => b2 - 1)
    case ROTATE_RIGHT:
      return state
        .updateIn(['engines', 'a1'], (a1) => a1 + 1)
        .updateIn(['engines', 'a2'], (a2) => a2 + 1)
        .updateIn(['engines', 'b1'], (b1) => b1 + 1)
        .updateIn(['engines', 'b2'], (b2) => b2 + 1)
    case UPDATE_LOCATION:
      return state
        .updateIn(['location', 'x'], (x) => x + action.location.x)
        .updateIn(['location', 'y'], (y) => y + action.location.y)
        .updateIn(['location', 'z'], (z) => z + action.location.z)
    default:
      return state;
  }
}

export default droneReducer;
