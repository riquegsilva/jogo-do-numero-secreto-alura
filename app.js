let numeroAleatorioMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

document.querySelector('input.container__input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { 
        verificandoChute(); 
    }
});

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroAleatorioMaximo}`);
}

exibirMensagemInicial();

function verificandoChute() {

    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Número secreto encontrado!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns, você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}. Tente novamente!`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}. Tente novamente!`);
        }
    } tentativas++;
    limparCampo();

}   

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroAleatorioMaximo + 1);
}

function limparCampo() {
    limpar = document.querySelector('input');
    limpar.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}