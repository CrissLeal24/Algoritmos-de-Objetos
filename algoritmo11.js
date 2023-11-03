const functionSum = (a) =>{
return Object.values(a).reduce((acc, prev)=> acc + prev)
}
console.log(functionSum({a:1,b:2,c:3}));