import {
  DRONE_START,
  DRONE_STOP,
  DEC_ALTITUDE,
  INC_ALTITUDE,
  MOVE_BACKWARD,
  MOVE_FORWARD,
  MOVE_LEFT,
  MOVE_RIGHT,
  ROTATE_LEFT,
  ROTATE_RIGHT,
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

export function decAltitude() {
  return {
    type: DEC_ALTITUDE
  }
}

export function incAltitude() {
  return {
    type: INC_ALTITUDE
  }
}

export function moveForward() {
  return {
    type: MOVE_FORWARD
  }
}

export function moveBackward() {
  return {
    type: MOVE_BACKWARD
  }
}
export function moveLeft() {
  return {
    type: MOVE_LEFT
  }
}
export function moveRight() {
  return {
    type: MOVE_RIGHT
  }
}

export function rotateLeft() {
  return {
    type: ROTATE_LEFT
  }
}

export function rotateRight() {
  return {
    type: ROTATE_RIGHT
  }
}