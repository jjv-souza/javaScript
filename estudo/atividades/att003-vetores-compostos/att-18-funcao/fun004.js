function fator(x) {
    let f = 1
    for (let n = x; n > 1; n--) {
        f = f*n
    }
    return f
}

console.log(fator(5))