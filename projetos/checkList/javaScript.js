let ideias = []

/* --- DOM --- */
const lista = document.getElementById('lista')
const form = document.getElementById('form')

/* --- Criando O Projeto */
function criarIdeia(criar){
    const card = document.createElement('article')
    card.dataset.id = criar.id
    card.dataset.estado = criar.estado
    if (criar.estado === 'concluido') {
        card.classList.add('concluido')
    }

    const p = document.createElement('p')
    p.textContent = criar.ideia

    const botoes = document.createElement('div')
    botoes.classList.add('botoes')

    const concluir = document.createElement('button')
    concluir.classList.add('concluir')
    const econcluir = document.createElement('i')
    econcluir.classList.add( 'fa-solid')
    
    if (criar.estado === 'concluido') {
    econcluir.classList.add('fa-circle-plus')
    } else {
        econcluir.classList.add('fa-circle-check')
    }

    const excluir = document.createElement('button')
    excluir.classList.add('excluir')
    const eexcluir = document.createElement('i')
    eexcluir.classList.add('fa-trash-can', 'fa-solid')


    card.appendChild(p)
    concluir.appendChild(econcluir)
    botoes.appendChild(concluir)
    excluir.appendChild(eexcluir)
    botoes.appendChild(excluir)
    card.appendChild(botoes)
    lista.appendChild(card)
}

/* --- Formulario --- */
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = document.getElementById('input')

    if(input.value.trim() !== ''){

        const novaIdeia = {
            id: crypto.randomUUID(),
            estado: 'pendente',
            ideia: input.value
        }

        ideias.push(novaIdeia)
        criarIdeia(novaIdeia)

        localStorage.setItem('ideias', JSON.stringify(ideias))

        input.value = ''
    }
})

/* --- Interativadade no card --- */
lista.addEventListener('click', (e) => {
    const botao = e.target.closest('button')
    if(!botao) return 

    const card = botao.closest('article')
    const id = card.dataset.id
    
    if(botao.classList.contains('excluir')){
        ideias = ideias.filter((i)=>{
            return i.id !== id
        })
        
        card.remove()
    }else
    if(botao.classList.contains('concluir')){

        const ideia = ideias.find((i)=> i.id === id)

        if(card.dataset.estado === 'pendente'){
            ideia.estado = 'concluido'
            card.dataset.estado = 'concluido'
            card.classList.add('concluido')

            botao.querySelector('i').classList.toggle('fa-circle-check')
            botao.querySelector('i').classList.toggle('fa-circle-plus')
        } else {
            ideia.estado = 'pendente'
            card.dataset.estado = 'pendente'
            card.classList.remove('concluido')

            botao.querySelector('i').classList.toggle('fa-circle-plus')
            botao.querySelector('i').classList.toggle('fa-circle-check')
        }
    }
    localStorage.setItem('ideias', JSON.stringify(ideias))
})



/* --- localStorage --- */
const dados = JSON.parse(localStorage.getItem('ideias'))

if(dados) ideias = dados

ideias.forEach((e) => {
    criarIdeia(e)
});
