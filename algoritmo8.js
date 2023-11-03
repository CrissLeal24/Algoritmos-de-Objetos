const matrices = (a, b) => {
let props = a.map((item, indx)=>[item, b[indx]])
return Object.fromEntries(props)
}

console.log(matrices([1,'b'],['a',2]));