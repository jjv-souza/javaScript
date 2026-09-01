//let num = {nome:'Jose', sexo:'M', peso:85.7, engordar(p){}}

let amg = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}

amg.engordar(2)
console.log(`${amg.nome} pesa ${amg.peso}Kg`)