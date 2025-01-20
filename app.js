function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secret');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificandoChute() {
    console.log('botão clicado');
} 