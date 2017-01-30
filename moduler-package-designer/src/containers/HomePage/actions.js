import {
  INCREMENT,
  DECREMENT,
} from './constant.js'

export function increase() {
  return {
    type: INCREMENT,
  }
}

export function decrease() {
  return {
    type: DECREMENT,
  }
}