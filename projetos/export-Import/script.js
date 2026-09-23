//produto.js
export function criarProduto(nome, preco){
  const produto = {
    nome: nome,
    preco: preco
  }
  
  return produto
}

export function produtoCaro(preco){
  return preco >= 100
}

export function desconto(preco){
  const porc = 10 * preco / 100
  return preco - porc
}

//script.js
import {criarProduto, produtoCaro, desconto} from './produto.js'

const produto = criarProduto('teclado', 150)
const caro = produtoCaro(produto.preco)
const des = desconto(produto.preco)

console.log('produto: '+ produto.nome)
console.log('preco original: R$'+produto.preco)
console.log('produto caro: '+caro)
console.log('preco com desconto: R$'+des)