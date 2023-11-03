const deletef = (obj) =>{
const {b, ...objRest} = obj
return objRest
}
console.log(deletef({ b: 0, a: 7, d: 8 }));