export default function placesReducer(state = [], action){//todos reciben el state y una acción
  switch(action.type){
    case 'LOAD_PLACES':
      return action.places;
    default:
      return state;
  }
  return state;
}