const fs = require('fs');

// Importa o módulo 'fs' que permite a leitura e escrita de arquivos.

function createMatrix(N) {
    let matrix = [];
    // Cria uma matriz vazia.

    for (let i = 0; i < N; i++) {
        let row = [];
        // Cria uma linha vazia.

        for (let j = 0; j < N; j++) {
            if (i === j) {
                row.push(1);
                // Se o índice da linha for igual ao índice da coluna, adiciona o número 1 à linha.
            } else if (i + j === N - 1) {
                row.push(2);
                // Se a soma do índice da linha com o índice da coluna for igual a N - 1, adiciona o número 2 à linha.
            } else {
                row.push(3);
                // Caso contrário, adiciona o número 3 à linha.
            }
        }
        matrix.push(row);
        // Adiciona a linha à matriz.
    }

    return matrix;
    // Retorna a matriz criada.
}

function processInput() {
    const input = fs.readFileSync('stdin', 'utf8').trim().split('\n');
    // Lê o arquivo de entrada e armazena o conteúdo em uma variável chamada 'input'.

    let index = 0;
    // Inicializa o índice como 0.

    while (index < input.length) {
        const N = parseInt(input[index].trim());
        // Converte o valor da linha atual do arquivo de entrada para um número inteiro.

        if (N >= 3 && N <= 70) {
            const matrix = createMatrix(N);
            // Chama a função 'createMatrix' para criar uma matriz com base no valor de N.

            for (let row of matrix) {
                console.log(row.join(''));
                // Imprime cada linha da matriz no console, separando os elementos por espaço.
            }
        }

        index++;
        // Incrementa o índice para avançar para a próxima linha do arquivo de entrada.
    }
}

processInput();
// Chama a função 'processInput' para iniciar o processamento do arquivo de entrada.
