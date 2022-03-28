//Day 1 - Desafio 7Days Of Code - Alura
let n1 = 1;
let s1 = '1';
let n30 = 30;
let s30 = '30';
let n10 = 10;
let s10 = '10';
console.log('Variável n1 = 1;\nVariável s1 = "1";\nVariável n30 = 30;\nVariável s30 = "30";\nVariável n10 = 10;\nVariável s10 = "10".')

if (s1 == n1) {
    console.log('As variáveis n1 e s1 tem o mesmo valor, mas tipos diferentes')
} else if (s1 != n1) {
    console.log('As variáveis n1 e s1 não possuem o mesmo valor')
}

if (n30 === s30) {
    console.log('As variáveis n30 e s30 possuem o mesmo valor e o mesmo tipo.')
} else if (typeof(n30) != typeof(s30)) {
    console.log('As variáveis n30 e s30 possuem tipos diferentes.')
}

if (n10 == s10) {
    console.log('As variáveis n10 e s 10 possuem o mesmo valor, mas tipos diferentes')
} else if (n10 != s10) {
    console.log('As variáveis n10 e s10 não tem o mesmo valor.')
}
