var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function processArray(inputArray) {
    let resultArray = []; // Cria um array vazio para armazenar os resultados
    
    for (let i = 0; i < inputArray.length; i++) { // Percorre cada elemento do array de entrada
        let num = Number(inputArray[i]); // Converte o elemento em um número
        if (num <= 0) { // Verifica se o número é menor ou igual a zero
            resultArray.push(1); // Se for, adiciona 1 ao array de resultados
        } else {
            resultArray.push(num); // Caso contrário, adiciona o número original ao array de resultados
        }
    }
    
    return resultArray; // Retorna o array de resultados
}

// Lê e processa os dados de entrada
const x = processArray(lines);

// Imprime os resultados
for (let i = 0; i < x.length; i++) {
    console.log(`X[${i}] = ${x[i]}`);
}
