class produto {
    constructor (nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

const produto1 = produto('teclado', 100)
const produto2 = produto('monitor', 500)

console.log(produto1, produto2)