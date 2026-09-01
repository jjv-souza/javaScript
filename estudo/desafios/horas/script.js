function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 5 && hora < 12) {
    //Bom dia
    img.scr = 'imagens/manha.png'
    document.body.style.background = '#ddb485'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#8f894f'
} else {
    //Boa noite
    img.src = 'imagens/noite.png'
    document.body.style.background = "#1b3e55"
}
}