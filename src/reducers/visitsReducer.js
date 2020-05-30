export default function visitReducer(state=[], action){
  switch(action.type){
    case 'ADD_VISIT':
      return [action.visit].concat(state); //es igual que utilizar Object.assign
      case 'LOAD_VISITS':
        return action.visits;
    default:
      return state;
  }
}