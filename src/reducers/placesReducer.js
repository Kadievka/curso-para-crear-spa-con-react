export default function placesReducer(state = [1], action){//todos reciben el state y una acción
  switch(action.type){
    case 'LOAD_PLACES':
      return action.places;
    default:
      return state;
  }
}