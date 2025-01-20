let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secret');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificandoChute() {
    console.log('botão clicado');
}   

//quando precisamos de um retorno da função, devemos usar o return. Como nesse caso nós esperamos o retorno do numero gerado, precisamos usar...
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);    
}