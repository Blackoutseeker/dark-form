const questions = document.querySelector('#questions')
const userName = document.querySelector('#name')
const nameHolder = document.querySelector('#name-holder')
const button = document.querySelector('button')
const erros = []
const answers = []
for(let i = 0; i <= 10; i++) {
    if(i > 0) {
        const content = document.createElement('div')
        content.setAttribute('class', 'contents')
        const error = document.createElement('span')
        error.setAttribute('class', 'errors error-ungranted')
        error.setAttribute('id', i)
        error.innerHTML = '* Este campo é obrigatório!'
        content.appendChild(error)
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', `answer-${i}`)
        input.setAttribute('title', 'Sua resposta?')
        input.setAttribute('required', 'required')
        content.appendChild(input)
        const ask = document.createElement('label')
        ask.setAttribute('id', `ask-${i}`)
        ask.setAttribute('class', 'asks')
        switch(i) {
            case 1:
                ask.innerHTML = `${i}. Quais tecnologias estão sendo utilizadas para
                desenvolver o app "Bookep"?`
            break
            case 2:
                ask.innerHTML = `${i}. Quais linguagens de programação o Blackoutseeker sabe?`
            break
            case 3:
                ask.innerHTML = `${i}. "if (true === true) return num1 + String(num2)".
                Qual tipo e qual valor será retornado?`
            break
            case 4:
                ask.innerHTML = `${i}. Qual minha linguagem de programação favorita?`
            break
            case 5:
                ask.innerHTML = `${i}. O que significa a sigla do console portátil "PSP"?`
            break
            case 6:
                ask.innerHTML = `${i}. Em qual data o ex-presidente da república Luiz Inácio
                Lula da Silva foi preso?`
            break
            case 7:
                ask.innerHTML = `${i}. Quantas faces um cubo mágico 2x2x3 tem?`
            break
            case 8:
                ask.innerHTML = `${i}. Qual espessura de palheta eu uso?`
            break
            case 9:
                ask.innerHTML = `${i}. Qual o nome do protagonista do jogo Aggelos?`
            break
            case 10:
                ask.innerHTML = `${i}. Qual a espada mais poderasa do jogo Chrono Trigger?`
            break
        }
        content.appendChild(ask)
        const labelHolder = document.createElement('label')
        labelHolder.setAttribute('id', 'label-holder')
        labelHolder.innerHTML = 'Sua resposta?'
        content.appendChild(labelHolder)
        const underline = document.createElement('div')
        underline.setAttribute('class', 'underline')
        content.appendChild(underline)
        questions.appendChild(content)
        answers.push(document.getElementById(`answer-${i}`))
    }
    erros.push(document.getElementById(`${i}`))
}
button.addEventListener('click', () => {
    if(userName.value == '' || userName.value == null ) {
        erros[0].className = 'errors error-granted'
    }
    else {
        erros[0].className = 'errors error-ungranted'
    }
    answers.map((response, index) => {
        if(response.value == '' || response.value == null) {
            erros[index + 1].className = 'errors error-granted'
        }
        else {
            erros[index + 1].className = 'errors error-ungranted'
        }
    })
})