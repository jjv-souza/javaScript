function enviar() {
    let n = +document.querySelector('#n').value
    let res = document.querySelector('#res')

    if (!n) {
        alert('[ERRO] Numero invalido')
        return
    } else {
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n}x${c}=${n*c}`
            res.appendChild(item)
        }
    }
}