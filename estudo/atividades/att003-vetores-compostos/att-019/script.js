let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valor = []

function inNumber(x){
    if(Number(x) >= 1 && Number(x) <= 100){
        return true
    } else {
        return false
    }
}

function inList(x, l) {
    if(l.indexOf(Number(x)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    let numero= document.querySelector('#fnum')
    let num = Number(numero.value)

    if (inNumber(num) && !inList(num, valor)) {
        valor.push(Number(num))
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já adicionado na lista')
    }
    numero.value = ''
    numero.focus()
}

function final(){
    if(valor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0

        for (let pos in valor) {
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos numeros é ${media}</p>`
    }
}