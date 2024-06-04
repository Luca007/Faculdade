const fs = require('fs');

// Função que verifica se uma equação é uma equação de Turing
function turingEquation(equation) {
    // Função para reverter uma string
    const reverseString = (str) => str.split('').reverse().join('');
    
    // Dividindo a equação em partes
    const [left, right] = equation.split('=');
    const [a, b] = left.split('+');

    // Revertendo os números
    const reversedA = parseInt(reverseString(a), 10);
    const reversedB = parseInt(reverseString(b), 10);
    const reversedC = parseInt(reverseString(right), 10);

    // Verificando a equação de Turing
    if (reversedA + reversedB === reversedC) {
        return "Verdadeiro";
    } else {
        return "Falso";
    }
}

// Função para processar a entrada
function processInput() {
    const input = fs.readFileSync('stdin', 'utf8').trim().split('\n');
    const results = [];
    let index = 0;

    // Loop para processar cada equação até encontrar a equação de parada
    do {
        const equation = input[index].trim();
        results.push(turingEquation(equation));
        index++;
    } while (input[index - 1] !== '0+0=0');

    return results;
}

// Função principal
function main() {
    const results = processInput();
    results.forEach(result => {
        console.log(result);
    });
}

// Chamada da função principal
main();
