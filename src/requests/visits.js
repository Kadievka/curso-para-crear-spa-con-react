import config from '../config/secrets';

export function getAllForPlace(jwt, slug){
  return fetch(config.url+'/places/'+slug+'/visits',{
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwt
  }
  }).then(result=>{
    return result.json();
  }).catch(console.log);

}

export function add(jwt, place, observation){
  
  const data = {
    _place: place._id,
    observation
  }

  return fetch(config.url+'/visits',{
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwt
  }
  }).then(result=>{
    return result.json();
  }).catch(console.log);
}