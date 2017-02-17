import { call, select, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { droneInfo, engines } from './selector'
import { HOVER_SPEED, GRAVITY } from './constant'

/**
 * @constructor
 * A Function for get location of drone.
 */
function getLocation(engines) {
  const { a1, a2, b1, b2, angle} = engines
  let locationChange = {}
  // while incliment all should be 0

  let xVector = b1 - b2
  let yVector = a1 - a2 
  let table = [xVector, yVector]
  
  console.table({front: frontVector, back: backVector, left: leftVector, right: rightVector})
  console.log('hoverspeed', HOVER_SPEED)
  if (a1 > HOVER_SPEED && a2 > HOVER_SPEED && b1 > HOVER_SPEED && b2 > HOVER_SPEED) {
    // it's flying.
    if(a1 === b1 && a2 === b2 && a1=== a2) {
      // INC_ALTIDUDE
      return locationChange = {
        x: 0,
        y: 0,
        z: a1 - HOVER_SPEED,  // TODO: better number ?
      }
    } else if ((a1 === b1) && (a2 === b2) && (a1 !== a2)) {
      // Goes backw
      return locationChange = {
        x: Math.sin(angle*Math.PI/180) * (a1 - HOVER_SPEED),
        y: Math.cos(angle*Math.PI/180) * (a1 - HOVER_SPEED),
        z: 0,
      }
    }
  } else {
    return {
      x: 0,
      y: 0,
      z: -1,
    }
    // engine RPM is not enough to hover.
    console.log('Speed is not enough for take-off')
  }
}


function* MoveDrone(action) {
  try {
    while(true) {
      let engineInfo = yield select(engines())
      yield call(delay, 200)
      console.log("engine Info", engineInfo)
      let location = yield getLocation(engineInfo)
      console.log("new loc", location)
      // let location = {
      //   x: 10,
      //   y: 10,
      //   z: 10,
      // }
      yield put({type: "UPDATE_LOCATION", location: location})
    }
  } catch (e) {
    yield put({type: "MOVE_DRONE_FAILED", message: e.message})
  }
}

// function* getSpeed() {
//   yield takeEvery("SPEED_CHANGE",)
// }


function* mySaga() {
  yield takeLatest([
    "DEC_ALTITUDE",
    "INC_ALTITUDE",
    "MOVE_FORWARD",
    "MOVE_BACKWARD",
    "MOVE_LEFT",
    "MOVE_RIGHT",
    "ROTATE_LEFT",
    "ROTATE_RIGHT"], MoveDrone);
}


export default mySaga