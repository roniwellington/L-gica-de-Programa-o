//1. Crie uma função que calcule o índice de massa corporal (IMC)de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC (peso, altura) {
    let imc = (altura * altura)/peso;
    return imc;

}

let peso = 78;
let altura = 1.68;
let imc = calcularIMC(peso, altura)
console.log('O seu IMC É: ' + imc.toFixed(2));

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if(numero === 0 ) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

let numero = 5;
let fatorial = calcularFatorial(numero)

console.log(`O fatorial de ${numero} e ${fatorial}`)

//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReais(valroEmDolar, contacaoDolar) {
    let valorEmReais = valroEmDolar * contacaoDolar;
    return valorEmReais
}
let valroEmDolar = 50;
let contacaoDolar = 4.80;
let valorEmReais = converterDolarParaReais(valroEmDolar, contacaoDolar);
console.log(`$${valroEmDolar} equivale R$${valorEmReais}`)

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}
let alturaSala = 3;
let larguraSala = 5;
calcularAreaEPerimetro(alturaSala, larguraSala)

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPrimetroCircula(raio) {
    let pi = 3.14;
    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    console.log(`Área da sala circular ${area} metros quadrados`);
    console.log(`Área da sala circular ${perimetro} metros`);
}

let raioSala = 4;
calcularAreaEPrimetroCircula(raioSala)

//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

let numeroDaTabuada = 1
console.log(`Tabuada do ${numeroDaTabuada}:`)
tabuada(numeroDaTabuada)