//1. Criar uma função que exibe "Olá, mundo!" no console

function olá() {
    console.log('Hello, world')
}

olá()

//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console

function comParametro( nome) {
    console.log(nome)
}

comParametro('Roni')

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobroDoNumero(numero) {
    dobro =  console.log(2 * numero)
    return dobro
}

dobroDoNumero(2)

//4. Criar uma função que recebe três números como parâmetro e retorna a média deles.
function mediaDosNumeros(numero1, numero2, numero3) {
    let somaDosValores = (numero1 + numero2 + numero3)/3
    return somaDosValores
}
console.log(mediaDosNumeros(2,2,2))

//5.Criar uma função que recebe dois número como parâmetros e retorna o maior deles
function maiorNumero(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1
    } else  {
        return numero2
    }
}

console.log(maiorNumero(9,7))

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplicacaoAoQuadrado (numero) {
    return numero*numero;
}

console.log(multiplicacaoAoQuadrado(3))