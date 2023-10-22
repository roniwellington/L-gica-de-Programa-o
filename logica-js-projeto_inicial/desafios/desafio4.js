//Desafios finais
//1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas

console.log('Olá, sejam bem vindos');

//2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador

let nome = 'Roni';
console.log(`Olá ${nome}`);

//3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá,[seu nome]!" .
alert(`Olá, ${nome}`);

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador
let linguagemDeProgamação = prompt("Qual é a sua linguagem de programação favorita?");


console.log(linguagemDeProgamação);

//5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize, a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]. no console"

let valor1 = 3;
let valor2 = 3;
let resultado = (3 + 3);
console.log(resultado);

//6.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]. no console.log

let valor3 = 4;
let valor4 = 2;
resultado = valor3 - valor4;
console.log(`A subtração entre ${valor3} e ${valor4} é igual a ${resultado}`);

//7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

idadeDoUsuario = prompt('Digite sua idade');

if(idadeDoUsuario >= 18){
    console.log('É maior de idade');
} else {
    console.log('É menor de idade');
};

//8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um numero');
if(numero >= 1) {
    console.log('O numero digitado é positivo');
} else if(numero == 0) {
    console.log('O numero digitado é ZERO');
}else {
    console.log('O numero digitado é negativo');
};

//9.Use um loop while para imprimir os número de 1 a 10 no console.log

let contador = 1;

while(contador <= 10){
    console.log(`Contando ${contador}`)
    contador++
}

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota pe maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.log

let nota = prompt('Digite o valor da sua nota')
if(nota >= 7) {
    console.log(`${nome} você foi aprovado`)
} else {
    console.log( `${nome} você foi reprovado`)
}

//11. Use o Math.random para gerar qualque número aleatório e exiba esse número no console

let numeroSecreto = parseInt(Math.random() * 100 +1);
console.log(`O numero secreto é ${numeroSecreto}`)

//12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio = parseInt(Math.random() * 10 +1);
console.log(`O numero aleatorio é ${numeroAleatorio}`)

//13. Use o Math.random para gerar um número inteiro 1 e 1000 e exiba esse número no console.

let numeroInteiro = parseInt(Math.random() * 1000 +1);
console.log(`O numero aleatorio é ${numeroInteiro}`)