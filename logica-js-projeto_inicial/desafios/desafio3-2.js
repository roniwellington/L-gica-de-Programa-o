//3. Crie um programa de contagem regressiva. Peça um número ao usuário e conte deste número até 0, usando um loop while no console do navegador.

numeroUsuario = prompt('Digite um número')

while(numeroUsuario >= 1) {
    console.log('numero digitado em decremento ' + numeroUsuario)
    numeroUsuario--
}

//Crie um programa  de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop While no console do navegador

numeroProgessivo = prompt('Digite um numero')
contador= 0;

while(contador <= numeroProgessivo) {
    console.log('numero digitado em incrementando ' + contador)
    contador++
}