import { createSelector } from 'reselect'

const selectDrone = (state) => state.get('droneReducer')

const droneInfo = () => createSelector(
  selectDrone,
  (droneState) => {
    return {
      engine: droneState.get('engine'),
      locationX: droneState.getIn(['location', 'x']),
      locationY: droneState.getIn(['location', 'y']),
      locationZ: droneState.getIn(['location', 'z']),
    }
  }
)

const engines = () => createSelector(
  selectDrone,
  (droneState) => {
    return {
      a1: droneState.getIn(['engines', 'a1']),
      a2: droneState.getIn(['engines', 'a2']),
      b1: droneState.getIn(['engines', 'b1']),
      b2: droneState.getIn(['engines', 'b2']),
    }
  }
)

export {
  droneInfo,
  engines,
}