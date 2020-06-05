import * as requests from '../requests/favs';

export function addSuccess(place){
  return {
    type: 'ADD_FAVORITE',
    place
  }
}

export function add(place){
  return (dispatch, getState)=>{
    let user = getState().user;
    if(!user) return null;
    requests.add(user.jwt, place).then(result=>{
      console.log(result);
      dispatch(addSuccess(place));
    });
  }
}

