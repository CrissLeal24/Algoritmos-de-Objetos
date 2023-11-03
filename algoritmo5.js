const  valor = (a, b) => {
    
    return a[b] == null || undefined ? false : true
}

console.log( valor({a:1,b:2,c:3},'b'));