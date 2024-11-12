let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let botaoAtivo = true;
let pontuacao = 70;

<<<<<<< HEAD
function gerarFibonacci(limite) {
    let fibonacci = [0, 1];
    let proximo = fibonacci[0] + fibonacci[1];
    while (proximo <= limite) {
        fibonacci.push(proximo);
        proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }
    return fibonacci;
}

let fibonacci = gerarFibonacci(numeroLimite);

function isPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function exibirTextoNaTela(tag, texto, append = false) {
=======

function exibirTextoNaTela(tag, texto, append = false){
>>>>>>> a1c83b94ba70c2db122cb53162361fefb08e4935
    let campo = document.querySelector(tag);
    if (append) {
        campo.innerHTML += texto;
    } else {
        campo.innerHTML = texto;
    }
}

<<<<<<< HEAD
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Pronto para começar o JOGO?');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('#adivinhar-input').value;
    let dicas = [];

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('novo-jogo-botao').removeAttribute('disabled');
    } else {
        if (numeroSecreto % 7 == 0) {
            dicas.push(`O número secreto é divisível por 7`);
        }
        if (numeroSecreto % 4 == 0) {
            dicas.push(`O número secreto é um múltiplo de 4`);
        }
        if (fibonacci.includes(numeroSecreto)) {
            dicas.push(`O número secreto é um número de Fibonacci`);
        }
        if (numeroSecreto % 2 == 0) {
            dicas.push(`O número secreto é divisível por 2`);
        } else {
            dicas.push(`O número secreto é ímpar`);
        }
        if (numeroSecreto % 5 == 0) {
            dicas.push(`O número secreto é divisível por 5`);
        }
        if (isPrimo(numeroSecreto)) {
            dicas.push(`O número secreto é primo`);
        }

        if (dicas.length > 0) {
            let dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
            exibirTextoNaTela('#dicas', dicaAleatoria);
        }
    }
    if(tentativas >= 7){
        exibirTextoNaTela('#dicas', 'Quantidade máxima de tentativas excedidas');
        document.getElementById('botao-jogar').setAttribute('disabled', true);
    }


    atualizarHistorico(chute);
    tentativas++;
    pontuacao = pontuacao - 10;
    exibirTextoNaTela('#pontuacao', pontuacao);
    limparCampo();
 
}

function atualizarHistorico(chute) {
=======

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();


function atualizarHistorico(chute){
>>>>>>> a1c83b94ba70c2db122cb53162361fefb08e4935
    let listaHistorico = document.getElementById('listaHistorico');
    let itemHistorico = document.createElement('li');
    itemHistorico.textContent = chute;
    listaHistorico.appendChild(itemHistorico);
}

<<<<<<< HEAD
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementoNaLista == numeroLimite) {
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
=======

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementoNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
>>>>>>> a1c83b94ba70c2db122cb53162361fefb08e4935

function reiniciarJogo() {
    location.reload();

}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const flipCard = document.getElementById('flip-card');
=======

document.addEventListener('DOMContentLoaded', function() {
    const inputNumero = document.getElementById('numero');
>>>>>>> a1c83b94ba70c2db122cb53162361fefb08e4935

    startButton.addEventListener('click', function () {
        flipCard.classList.add('flipped');

        setTimeout(() => {
            const gameContainer = document.querySelector('.flip-card-back');
            gameContainer.innerHTML = `
                <div class="container">
                    <div class="content">
                        <h1>Jogo do número secreto</h1>
                        <p id="dicas">Escolha um número entre 1 e 1000</p> <!-- Área para exibir as dicas -->
                        <p>Pontuação:</p>
                        <p id="pontuacao"></p> <!-- Área para exibir as dicas -->
                        <div class = container-flip><input type="number" id="adivinhar-input" placeholder="Digite seu palpite">
                        <div class="botao-container-jogar">
                            <button class="chutar" id="botao-jogar">Chutar</button>
                            <button class="novoJogo" id="novo-jogo-botao">Novo Jogo</button>
                        </div>
                        <ul id="listaHistorico"></ul>
                    </div></div>
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


