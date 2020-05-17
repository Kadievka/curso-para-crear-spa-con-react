function getPlaces(){
  return fetch("http://localhost:4000/places")
  .then(data=>{
    return data.json();
  }).catch(console.log);
}

export {getPlaces};

export default {
  places: [
    {
      imageUrl: '/images/place-3.jpg',
      title: 'Desayunos el rey',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #20'
    },
    {
      imageUrl: '/images/place-1.jpeg',
      title: 'Starbucks Norte',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #20'
    },
    {
      imageUrl: '/images/place-2.jpg',
      title: 'Pizza de amor',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #20'
    }
  ]
}
