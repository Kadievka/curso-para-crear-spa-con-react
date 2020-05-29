export default function visitReducer(state=[], action){
  switch(action.type){
    case 'ADD:VISIT':
      console.log(action.visit);
      return [action.visit].concat(state); //es igual que utilizar Object.assign
    default:
      return state;
  }
}