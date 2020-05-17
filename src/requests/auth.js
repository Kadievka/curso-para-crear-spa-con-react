function login(credentials){
  return fetch("http://localhost:4000/sessions", {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response=>{
    return response.json();
  }).catch(console.log);
}

function signUp(credentials){
  return fetch("http://localhost:4000/users", {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response=>{
    return response.json();
  }).catch(console.log);
}

export {login, signUp};