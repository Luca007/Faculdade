const fs = require('fs'); // Importa o módulo 'fs' para lidar com operações de arquivo

function readInput() { // Define uma função chamada 'readInput' para ler a entrada do usuário
    return fs.readFileSync('stdin', 'utf8').trim().split('\n'); // Lê a entrada do usuário e a retorna como um array de linhas
}

function createForestMatrix(lines, N) { // Define uma função chamada 'createForestMatrix' para criar uma matriz de floresta
    let forest = []; // Cria um array vazio para representar a floresta
    for (let i = 0; i < N; i++) { // Loop para cada linha da matriz
        forest.push(lines[i].split(' ').map(Number)); // Divide cada linha em números e adiciona ao array 'forest'
    }
    return forest; // Retorna a matriz de floresta
}

function getVisitedCells(lines, startIndex, numberOfVisits) { // Define uma função chamada 'getVisitedCells' para obter as células visitadas
    let visitedCells = []; // Cria um array vazio para armazenar as células visitadas
    for (let i = 0; i < numberOfVisits; i++) { // Loop para cada visita
        let [x, y] = lines[startIndex + i].split(' ').map(Number); // Divide a linha em coordenadas x e y
        visitedCells.push([x - 1, y - 1]); // Adiciona as coordenadas ao array 'visitedCells'
    }
    return visitedCells; // Retorna as células visitadas
}

function countUniqueSpecies(forest, visitedCells) { // Define uma função chamada 'countUniqueSpecies' para contar as espécies únicas
    let speciesSet = new Set(); // Cria um conjunto vazio para armazenar as espécies únicas
    for (let [x, y] of visitedCells) { // Loop para cada célula visitada
        if (forest[x] && forest[x][y] !== undefined) { // Verifica se a célula existe na matriz de floresta
            speciesSet.add(forest[x][y]); // Adiciona a espécie única ao conjunto 'speciesSet'
        }
    }
    return speciesSet.size; // Retorna o número de espécies únicas
}

function processInput() { // Define uma função chamada 'processInput' para processar a entrada
    const lines = readInput(); // Lê a entrada do usuário e armazena em 'lines'
    let index = 0; // Inicializa o índice

    while (index < lines.length) { // Loop enquanto o índice for menor que o número de linhas
        const N = parseInt(lines[index].trim()); // Converte a primeira linha em um número inteiro
        if (N === 0) break; // Se N for igual a 0, encerra o loop

        const forest = createForestMatrix(lines.slice(index + 1, index + 1 + N), N); // Cria a matriz de floresta
        const visitedCells = getVisitedCells(lines, index + 1 + N, 2 * N); // Obtém as células visitadas

        const uniqueSpeciesCount = countUniqueSpecies(forest, visitedCells); // Conta as espécies únicas
        console.log(uniqueSpeciesCount); // Imprime o número de espécies únicas

        index += 1 + N + 2 * N; // Atualiza o índice para a próxima iteração
    }
}

processInput(); // Chama a função 'processInput' para iniciar o processamento da entrada
