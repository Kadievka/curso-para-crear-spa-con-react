export default function userReducer(state={name: 'Uriel'}, action){
  switch(action.type){
    case 'LOG_IN':
      return {jwt: action.jwt}; //null para cerrar sesión
    default:
      return state;
  }
}