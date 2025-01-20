let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secret');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificandoChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}   

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);    
}