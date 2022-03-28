const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const ling = prompt('Qual ou quais linguagens de programação você está estudando?');
alert("Olá "+nome+"! Você tem "+idade+" e está estudando "+ling+".")
const opc = prompt('Você gosta de estudar '+ling+'? Digite 1 para sim e 2 para não.');
if (opc == 1) {
    document.getElementById("js").innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
} else {
    document.getElementById("js").innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?"
}

