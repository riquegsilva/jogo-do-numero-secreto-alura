alert ('boas vindas ao jogo do numero secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt ('escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

if(tentativas == 1 ) {
alert(`isso aí! você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa! Parabéns :)`);
} else{
    alert(`isso aí! você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas! Parabéns :)`);
}