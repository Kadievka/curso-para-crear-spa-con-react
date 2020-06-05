import config from '../config/secrets';

export function add(jwt, place){
  
  const data = {
    _place: place._id
  }

  return fetch(config.url+'/favorites',{
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