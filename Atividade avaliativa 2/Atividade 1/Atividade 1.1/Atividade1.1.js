const fs = require('fs'); // Importa o módulo 'fs' para lidar com operações de arquivo

function readInput() {
    return Number(fs.readFileSync('stdin', 'utf8').trim()); // Lê a entrada do usuário a partir do arquivo 'stdin' e converte para um número
}

function generateArray(initialValue) {
    let array = [initialValue]; // Cria um array com o valor inicial fornecido
    for (let i = 1; i < 10; i++) {
        array.push(array[i - 1] * 2); // Gera os próximos valores do array multiplicando o valor anterior por 2
    }
    return array; // Retorna o array gerado
}

function main() {
    const initialValue = readInput(); // Chama a função readInput() para obter o valor inicial
    const array = generateArray(initialValue); // Chama a função generateArray() para gerar o array

    array.forEach((value, index) => {
        console.log(`N[${index}] = ${value}`); // Imprime cada valor do array no formato 'N[index] = valor'
    });
}

main(); // Chama a função principal 'main' para iniciar o programa
