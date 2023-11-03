const valor = (obj) => {
    return obj['prop-2']
}

console.log(valor({  'prop-2': 'two',  prop: 'test'}));