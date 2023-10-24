//3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoClicado() {
    console.log('O botão foi clicado')
}

//4.Crie uma função que exiba um alerta com a mensagem: EU amo JS, sempre que o botão Alerta for pressionado.

function botaoAlerta() {
    alert('Eu amo JS')
}

//5. Crie uma função que é executado quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function botaoPrompt () {
    let nomeDaCidade = prompt('Digite o nome de uma cidade')
    alert(`A cidade digitada é ${nomeDaCidade}`)
}
