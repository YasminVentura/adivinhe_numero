let fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let dicas = [];

        if(numeroSecreto % 7 == 0){
            dicas.push(`O número secreto é divisível por 7`);
        }
        if(numeroSecreto % 4 == 0){
            dicas.push(`O número secreto é um múltiplo de 4`);
        }
        if(fibonacci.includes(numeroSecreto)){
            dicas.push(`O número secreto é um número de Fibonacci`);
        }
        if(numeroSecreto % 2 == 0){
            dicas.push(`O número secreto é divisível por 2`);
        }
        if(Math.sqrt(numeroSecreto) % 1 === 0){
            dicas.push(`O número secreto é um quadrado perfeito`);
        }
        if(numeroSecreto % 2 == 0){
            dicas.push(`O número secreto é par`);
        } else {
            dicas.push(`O número secreto é ímpar`);
        }
        if(numeroSecreto % 5 == 0){
            dicas.push(`O número secreto é divisível por 5`);
        }
        if(isPrimo(numeroSecreto)){
            dicas.push(`O número secreto é primo`);
        }
        if(isTriangular(numeroSecreto)){
            dicas.push(`O número secreto é um número triangular`);
        }
        if(numeroSecreto < 100){
            dicas.push(`O número secreto é menor que 100`);
        }
        if(numeroSecreto > 500){
            dicas.push(`O número secreto é maior que 500`);
        }
        if (numeroSecreto % 100 == 0) {
            dicas.push('O número secreto é um número redondo');
        }
        if (numeroSecreto >= 10 && numeroSecreto < 100) {
            dicas.push('O número secreto é um número de dois dígitos');
        }
        if (numeroSecreto >= 100 && numeroSecreto < 1000) {
            dicas.push('O número secreto é um número de três dígitos');
        }
        if (numeroSecreto > Math.PI) {
            console.log("O número secreto é maior que π.");
        }
        if (numeroSecreto < 16) {
            dicas.push('O número secreto é inferior a 4²');
        }
        if (numeroSecreto >= 82 && numeroSecreto < 125) {
            dicas.push(`O número secreto está no intervalo [82, 125)`);
        }
        if (numeroSecreto >= 4 && numeroSecreto <= 36) {
            dicas.push('O número secreto está em um intervalo entre 4² e 6²');
        }
        if (numeroSecreto >= 49 && numeroSecreto <= 81) {
            dicas.push('O número secreto está em um intervalo entre 7² e 9²');
        }
        if (numeroSecreto >= 125 && numeroSecreto <= 343) {
            dicas.push('O número secreto está em um intervalo entre 5³ e 7³');
        }
        if (numeroSecreto >= 512 && numeroSecreto <= 729) {
            dicas.push('O número secreto está em um intervalo entre 8³ e 9³');
        }
        if (numeroSecreto >= 841 && numeroSecreto <= 961) {
            dicas.push('O número secreto está em um intervalo entre 29² e 31²');
        }
        if (numeroSecreto > 961) {
            dicas.push('O número secreto é superior a 31²');
        }
        if (isPalindromo(numeroSecreto)) {
            dicas.push(`O número secreto é um número palíndromo`);
        }
        if (numeroSecreto > 10) {
            const soma = somaDosDigitos(numeroSecreto);
            dicas.push(`A soma dos dígitos do número secreto é ${soma}`);
        }
        if(chute > numeroSecreto){
            dicas.push(`O número secreto é menor que ${chute}`);
        } else {
            dicas.push(`O número secreto é maior que ${chute}`);
        }


        if(dicas.length > 0) {
            let dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
            exibirTextoNaTela('p', dicaAleatoria);
        }
    }

    atualizarHistorico(chute);
    tentativas++;
    limparCampo();
}

function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isTriangular(num) {
    let k = 0;
    let triangularNum = 0;
    while (triangularNum < num) {
        k++;
        triangularNum = (k * (k + 1)) / 2;
    }
    return triangularNum === num;
}

function isPalindromo(numero) {
    const strNumero = numero.toString();
    return strNumero === strNumero.split('').reverse().join('');
}

function somaDosDigitos(numero) {
    return numero
        .toString()
        .split('')
        .map(Number)
        .reduce((soma, digito) => soma + digito, 0);
}
