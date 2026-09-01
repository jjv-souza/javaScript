let vaga = [5, 8, 2, 9, 3]
vaga.push(1) //adiciona o proximo num
vaga.sort() //deixa em ordem

console.log(vaga)
console.log(`O vetor tem ${vaga.length} posições`)
console.log(`O primeiro valor do vetor é ${vaga[0]}`)

let pos = vaga.indexOf(8)

if ( pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
