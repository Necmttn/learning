import {
  DRONE_START,
  DRONE_STOP
} from './constant.js'

export function engineStart() {
  return {
    type: DRONE_START
  }
}

export function engineStop() {
  return {
    type: DRONE_STOP
  }
}