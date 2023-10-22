alert('Boas vindas e minha página');

let nome = 'lua';
let idade = 25;
numeroDeVendas = 50;
let saldoDisponivel = 100;
// alert('Erro! Preencha todos os campos.');
let mensagemDeErro = 'Erro! preencha todos os campos';
nome = prompt(' Qual é o seu nome ');
idade = prompt(' Qual é a sua idade');

if( idade >= 18){
    alert(`${nome} você tem ${idade} anos, portanto você pode tirar a habilitação`);
} else {
    alert(`${nome} você não pode tirar a habilitação`);
};
