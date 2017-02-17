import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'
import mySaga from './containers/Drone/sagas'
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()


export default function configureStore(initialState = {}, history ) {
  const middlewares = [
    logger,
    sagaMiddleware,     
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
  sagaMiddleware.run(mySaga)
  return store;
}
