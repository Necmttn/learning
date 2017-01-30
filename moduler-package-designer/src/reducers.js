
// HOHO we use here redux-immutable because otherway around is take too much time ok ? 
import { combineReducers } from 'redux-immutable';


import homeReducer from './containers/HomePage/reducer'
import droneReducer from './containers/Drone/reducer'

export default function createReducer(asyncReducers) {
  return combineReducers({
    homeReducer: homeReducer,
    droneReducer: droneReducer,
    ...asyncReducers,
  });
}