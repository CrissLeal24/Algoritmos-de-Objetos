const multiply = (a, b) =>{
let multi = [a]
let values = multi.map((item)=> Object.values(item)).flat(1).map((items)=> items * b)
let props = Object.keys(a)
let result = props.map((item, indx)=> [item, values[indx]])
return Object.fromEntries(result)

}
console.log(multiply({j:9,i:2,x:3,z:4},10));