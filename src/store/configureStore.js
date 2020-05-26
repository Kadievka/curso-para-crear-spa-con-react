import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';
import {routerReducer} from 'react-router-redux';

const enhancer = compose(
  persistState('user')
);

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});//destructuring assigment

export default function configureStore(){
  return createStore(
    rootReducer,
    {},
    enhancer); //el segundo argumento es el valor inicial del contenedor
}