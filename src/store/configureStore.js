import {createStore, combineReducers} from 'redux';
import reducers from '../reducers';

const rootReducer = combineReducers({
  ...reducers
});//destructuring assigment

export default function configureStore(){
  return createStore(rootReducer);
}