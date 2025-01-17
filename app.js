alert ('boas vindas ao jogo do numero secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

while (chute != numeroSecreto){
    chute = prompt ('escolha um número entre 1 e 10');

    if (numeroSecreto == chute) {
        alert(`isso aí! você descobriu o número secreto: ${numeroSecreto}! Parabéns :)`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
            }    else{
                alert(`O número secreto é maior que ${chute}`);
            }
        }
    
    
}

