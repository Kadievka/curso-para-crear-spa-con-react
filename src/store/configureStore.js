import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... reducers
})

export default function configureStore(history) {
  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history)),
      persistState('user')
    ),
  )

  return store
}