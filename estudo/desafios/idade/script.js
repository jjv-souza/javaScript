
function veri(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano').value
    var res = document.querySelector('div#res')

    if (fano.length == 0 || fano > ano || fano < 1900) {
        alert('[ERRO] Verifique e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var img = document.createElement('img')
        img.src = 'fotos'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 10) {
                //bb
                img.setAttribute('src', 'imagens/hbaby.png')
            } else if (idade < 60) {
                //adulto
                img.src = 'imagens/hjovem.png'
            } else {
                //velho
                img.src = 'imagens/hvelho.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <=10) {
                //bb
                img.src = 'imagens/mbaby.png'
            } else if (idade < 60) {
                //joven
                img.src = 'imagens/mjovem.png'
            } else {
                //velho
                img.src = 'imagens/mvelha.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}