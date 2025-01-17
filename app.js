alert ('boas vindas ao jogo do numero secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt (`escolha um número entre 1 e ${numeroMaximo}`);

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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`isso aí! você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}! Parabéns :)`);