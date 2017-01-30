import { createSelector } from 'reselect'

const selectHome = (state) => state.get('homeReducer')

const makeSelectCount = () => createSelector(
  selectHome,
  (homeState) => homeState.get('count')
);

export {
  makeSelectCount,
}