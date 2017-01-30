import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers'
import createLogger from 'redux-logger'
import { fromJS } from 'immutable'
const logger = createLogger()

export default function configureStore(initialState = {}, history ) {
  const middlewares = [
    logger       
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );
  return store;
}
