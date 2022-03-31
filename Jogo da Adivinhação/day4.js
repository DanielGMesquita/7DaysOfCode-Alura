function inicioJogo()
{
    alert('Jogo da advinhação! Tente advinhar o número que o programa escolheu, se acertar, ganha o jogo!');
    minimo = prompt('Defina o valor mínimo: ');
    maximo = prompt('Defina o valor máximo: ');
    function randomNum (menor,maior){
        min = Math.ceil(menor);
        max = Math.floor(maior);
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    const computador = randomNum(minimo,maximo);
    var user = prompt('Qual número você acha que o computador escolheu?');
    while (user != computador) {
        var user = prompt('Número escolhido incorreto! Tente novamente!')
    }
    alert('Parabéns, você venceu!\nFim de jogo!')
}