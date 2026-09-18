function sacar(saldo, valor) {
  if(valor <= 0) {
    throw new Error('valor invalido')
  }
  if(valor > saldo) {
    throw new Error('Saldo insuficiente')
  }
  console.log('Saque Realizado')
}

try {
  sacar(70, 10)
}catch(error){
  console.log('Error para sagar: '+error.message)
}