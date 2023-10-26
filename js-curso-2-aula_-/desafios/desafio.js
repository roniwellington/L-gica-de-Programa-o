//3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoClicado() {
    console.log('O botão foi clicado');
};

//4.Crie uma função que exiba um alerta com a mensagem: EU amo JS, sempre que o botão Alerta for pressionado.

function botaoAlerta() {
    alert('Eu amo JS');
};

//5. Crie uma função que é executado quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function botaoPrompt () {
    let nomeDaCidade = prompt('Digite o nome de uma cidade');
    alert(`A cidade digitada é ${nomeDaCidade}`);
};

//6.Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em alerta

function botaoSoma() {
    let numero1 = parseFloat(prompt('Digite um numero'));
    let numero2 = parseFloat(prompt('Digite outro numero'));

    if(!isNaN(numero1) && !isNaN(numero2)) {
        let somaDosNumeros = numero1 + numero2;

        alert(`Soma dos numeros é ${somaDosNumeros}`);
    } else {
        alert('Pelo menos uma das entradas não é um número válido. Por favor insira um número valido')
    }

};
