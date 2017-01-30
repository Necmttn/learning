import { createSelector } from 'reselect'

const selectDrone = (state) => state.get('droneReducer')

const droneInfo = () => createSelector(
  selectDrone,
  (droneState) => {
    return {
      engine: droneState.get('engine'),
      speed: droneState.get('speed'),
      angle: droneState.get('angle'),
    }
  }
)

export {
  droneInfo,
}