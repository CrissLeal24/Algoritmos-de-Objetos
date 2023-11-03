const propiedad = (obj, key) => {
   return obj[key]
}

console.log(propiedad({  country: 'Sweden',  continent: 'Europe'}, 'country'));