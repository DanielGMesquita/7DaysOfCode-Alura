function inicioJogo()
{
    alert("Bem vindo ao Jogo de Escolhas Tech!")
    var escolha1 = prompt("Se deseja seguir pelo caminho do Frontend digite 1, se for pelo Backend, digite 2:");
    while (escolha1 < 1 || escolha1 > 2) {
        alert("Valor inválido!");
        var escolha1 = prompt("Se deseja seguir pelo caminho do Frontend digite 1, se for pelo Backend, digite 2:");
    }
    if (escolha1 == 1) {
        var escolha2 = prompt("Se deseja aprender React, digite 1. Se deseja aprender Vue, digite 2:");
        while (escolha2 < 1 || escolha2 > 2) {
            alert("Valor inválido!");
            var escolha2 = prompt("Se deseja aprender React, digite 1. Se deseja aprender Vue, digite 2:");
        }
    } else {
        var escolha2 = prompt("Se deseja aprender Java, digite 1. Se deseja aprender C# digite 2: ");
        while (escolha2 < 1 || escolha2 > 2) {
            alert("Valor inválido!");
            var escolha2 = prompt("Se deseja aprender Java, digite 1. Se deseja aprender C# digite 2: ");
        }
    }
    var escolha3 = prompt("Se você vai continuar se especializando na área desejada, digite 1. Se deseja se tornar Fullstack, digite 2: ");
    while (escolha3 < 1 || escolha3 > 2) {
        alert("Valor inválido!");
        var escolha3 = prompt("Se você vai continuar se especializando na área desejada, digite 1. Se deseja se tornar Fullstack, digite 2: ");
    }
    if (escolha3 == 1) {
        alert("Vá fundo então nos estudos do campo desejado!")
    } else {
        alert("Para se tornar Fullstack, tem que diversificar as áreas de estudo e atuação. Você consegue!")
    }
    var escolha4 = prompt("Você gostaria de conhecer outras tecnologias? Se sim, digite 1. Se não, digite 2:")
        while (escolha4 < 1 || escolha4 > 2){
            alert("Valor inválido!");
            var escolha4 = prompt("Você gostaria de conhecer outras tecnologias? Se sim, digite 1. Se não, digite 2:");
        }
    var estudos = []
    if (escolha4 == 2){
        alert("Obrigado por participar!\nFim do jogo!");
    } else {
        while(escolha4==1){
            var ling = prompt("Qual a linguagem deseja conhecer?");
            estudos.push(ling);
            var escolha4 = prompt("Você gostaria de conhecer outras tecnologias? Se sim, digite 1. Se não, digite 2:");
            while (escolha4 <1 || escolha4>2) {
                alert("Valor inválido!");
                var escolha4 = prompt("Você gostaria de conhecer outras tecnologias? Se sim, digite 1. Se não, digite 2:");
            }
        }
        alert("As tecnologias escolhidas foram: "+estudos+"\nFim de jogo!\nVocê será direcionado para a página da Alura para mais informações.");
        window.location.href = "https://www.alura.com.br/";
    }
}
