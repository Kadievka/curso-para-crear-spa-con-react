import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers
})

export default function configureStore(history) {
  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      persistState('user')
    ),
  )

  return store
}