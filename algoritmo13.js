const functions = (x, y) =>{
let prop = y.b
delete y['b']
return {...x, ...y, d: prop}
}
console.log(functions({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));