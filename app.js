let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
console.log('Número Secreto:', numeroSecreto);
let tentativas = 1;
let pontuacao = 70;

let fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function isPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
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

function isHarshad(numero) {
    const soma = somaDosDigitos(numero);
    return numero % soma === 0;
}

function exibirTextoNaTela(tag, texto, append = false) {
    let campo = document.querySelector(tag);
    if (append) {
        campo.innerHTML += texto;
    } else {
        campo.innerHTML = texto;
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Pronto para começar o JOGO?');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('#adivinhar-input').value, 10);
    console.log('Chute:', chute, ' -- Número Secreto:', numeroSecreto);
    let dicas = [];

    if(tentativas  >= 7 ){
        exibirTextoNaTela('#titulo', 'Que pena!');
        exibirTextoNaTela('#dicas', 'Quantidade máxima de tentativas excedidas');
        document.getElementById('botao-jogar').disabled = true;
        pontuacao -= 10;
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela('#titulo', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('#dicas', mensagensTentativas);
        document.getElementById('novo-jogo-botao').removeAttribute('disabled');
        document.getElementById('botao-jogar').disabled = true;
    } else {
        if (numeroSecreto % chute === 0) {
            dicas.push(`O número secreto é divisível por ${chute}`);
        }
        if (numeroSecreto % 10 === 0) {
            dicas.push(`O número secreto é um número redondo`);
        } else {
            dicas.push(`O número secreto não é um número redondo`);
        }
        if (numeroSecreto % 2 === 0) {
            dicas.push(`O número secreto é par`);
            dicas.push(`O número secreto é um múltiplo de 2`);
        } else {
            dicas.push(`O número secreto é ímpar`);
            dicas.push(`O número secreto não é um múltiplo de 2`);
        }
        if (numeroSecreto % 3 === 0) {
            dicas.push(`O número secreto é divisível por 3`);
        }
        if (numeroSecreto % 5 === 0) {
            dicas.push(`O número secreto é divisível por 5`);
        } else {
            dicas.push(`O número secreto não é divisível por 5`);
        }
        if (numeroSecreto % 6 === 0) {
            dicas.push(`O número secreto é múltiplo de 6`);
        }
        if (numeroSecreto % 7 === 0) {
            dicas.push(`O número secreto é divisível por 7`);
        } else {
            dicas.push(`O número secreto não é divisível por 7`);
        }
        if (numeroSecreto % 8 === 0) {
            dicas.push(`O número secreto é um múltiplo de 8`);
        }
        if (numeroSecreto % 9 === 0) {
            dicas.push(`O número secreto é divisível por 9`);
        }

        if (isHarshad(numeroSecreto)) {
            dicas.push(`O número secreto é um número de Harshad`);
        } else {
            dicas.push(`O número secreto não é um número de Harshad`);
        }
        if (Math.cbrt(numeroSecreto) % 1 === 0) {
            dicas.push(`O número secreto é um número cúbico`);
        } else {
            dicas.push(`O número secreto não é um número cúbico`);
        }
        if (fibonacci.includes(numeroSecreto)) {
            dicas.push(`O número secreto é um número de Fibonacci`);
        } else {
            dicas.push(`O número secreto não está na sequência de Fibonacci`);
        }
        if (Math.sqrt(numeroSecreto) % 1 === 0) {
            dicas.push(`O número secreto é um quadrado perfeito`);
        } else {
            dicas.push(`O número secreto não é um quadrado perfeito`);
        }
        if (isPrimo(numeroSecreto)) {
            dicas.push(`O número secreto é primo`);
        }
        if (isTriangular(numeroSecreto)) {
            dicas.push(`O número secreto é um número triangular`);
        }
        if (isPalindromo(numeroSecreto)) {
            dicas.push(`O número secreto é um número palíndromo`);
        } else {
            dicas.push(`O número secreto não é um número palíndromo`);
        }
        if (numeroSecreto > 10) {
            const soma = somaDosDigitos(numeroSecreto);
            dicas.push(`A soma dos dígitos do número secreto é ${soma}`);
        }

        if (numeroSecreto < 100) {
            dicas.push(`O número secreto é menor que 100`);
        }
        if (numeroSecreto > 500) {
            dicas.push(`O número secreto é maior que 500`);
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

        if (numeroSecreto >= 16 && numeroSecreto <= 36) {
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

        if (chute > numeroSecreto) {
            dicas.push(`O número secreto é menor que ${chute}`);
        } else {
            dicas.push(`O número secreto é maior que ${chute}`);
        }

        if (dicas.length > 0) {
            let dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
            exibirTextoNaTela('#dicas', dicaAleatoria);
        }
    }

    atualizarHistorico(chute);
    if (tentativas > 1) {
        pontuacao -= 10;
    }

    tentativas++;
    exibirTextoNaTela('#pontuacao', pontuacao);
    limparCampo();

}

function atualizarHistorico(chute) {
    let listaHistorico = document.getElementById('listaHistorico');
    let itemHistorico = document.createElement('li');
    itemHistorico.textContent = chute;
    listaHistorico.appendChild(itemHistorico);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementoNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    location.reload();

}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const flipCard = document.getElementById('flip-card');

    startButton.addEventListener('click', function () {
        flipCard.classList.add('flipped');

        setTimeout(() => {
            const gameContainer = document.querySelector('.flip-card-back');
            gameContainer.innerHTML = `
                <div class="container">
                    <div class="content">
                        <h1 id="titulo">Jogo do número secreto</h1>
                        <p id="dicas">Escolha um número entre 1 e 1000</p> <!-- Área para exibir as dicas -->
                        <p>Pontuação:</p>
                        <p id="pontuacao"></p> <!-- Área para exibir as dicas -->
                        <div class="container-flip">
                            <input type="number" id="adivinhar-input" placeholder="Digite seu palpite">
                            <div class="botao-container-jogar">
                                <button class="chutar" id="botao-jogar">Chutar</button>
                                <button class="novoJogo" id="novo-jogo-botao">Novo Jogo</button>
                            </div>
                        </div>
                    </div>
                    <div class="divisoria"></div>
                    <div id="area-historico">
                        <p>Histórico de Tentativas:</p>
                        <ul id="listaHistorico"></ul>
                    </div>
                </div>
            `;

            const botaoJogar = document.getElementById('botao-jogar');
            const adivinharInput = document.getElementById('adivinhar-input');
            const novoJogoBotao = document.getElementById('novo-jogo-botao');

            if (botaoJogar) {
                botaoJogar.addEventListener('click', verificarChute);
            }
            if (adivinharInput) {
                adivinharInput.addEventListener('keyup', function (event) {
                    if (event.key === 'Enter') {
                        verificarChute();
                    }
                });
            }
            if (novoJogoBotao) {
                novoJogoBotao.addEventListener('click', reiniciarJogo);
            }
        }, 400);
    });
});
