import * as requests from '../requests/places';

//actions de redux retornan objetos
export function loadPlaces(places){
  return {type: 'LOAD_PLACES', places: places};
}

//actions de thunk retornan funciones
export function loadAll(){
  return(dispatch, getState)=>{//ambas son funciones
    requests.getPlaces().then(result=>{
      dispatch(loadPlaces(result.docs));//se pueden seguir agregando dispatchs de acciones de redux o de thunk
    });
  }
}