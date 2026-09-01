function contar() {
    let i = +document.querySelector("#ini").value
    let f = +document.querySelector('#fim').value
    let p = +document.querySelector('#pas').value
    let res = document.querySelector('#res')

    if (i == 0 || f == 0 ){
        res.innerHTML = 'impossivel contar'
        return alert('[ERRO] Numeros invalidos')
    } else {
        res.innerHTML = 'Contando: <br>'

        if (p <= 0) {
            alert('Passo invalido considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <=f; c +=p){
            res.innerHTML += `${c} `
            }
        } else {
            //contagem regreciva
            for(let c = i; c >=f; c -=p){
            res.innerHTML += `${c} `
            }
        }
        
    }
}