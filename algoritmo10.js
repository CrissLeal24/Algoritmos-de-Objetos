const myFunction = (obj)=>{
   return obj?.a?.b
}
console.log(myFunction({b:{a:1}}));