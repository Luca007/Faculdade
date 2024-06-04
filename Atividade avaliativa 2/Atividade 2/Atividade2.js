const fs = require('fs');

// Importa o módulo 'fs' para lidar com operações de arquivo

function getFinalDirection(commands) {
    const directions = ['N', 'L', 'S', 'O']; 
    // Define um array com as direções possíveis: Norte, Leste, Sul, Oeste
    let currentDirectionIndex = 0; 
    // Define o índice da direção atual como 0 (Norte)

    for (let command of commands) {
        // Para cada comando na lista de comandos
        if (command === 'E') {
            currentDirectionIndex = (currentDirectionIndex + 3) % 4; 
            // Se o comando for 'E' (esquerda), atualiza o índice da direção atual para a esquerda
        } else if (command === 'D') {
            currentDirectionIndex = (currentDirectionIndex + 1) % 4; 
            // Se o comando for 'D' (direita), atualiza o índice da direção atual para a direita
        }
    }

    return directions[currentDirectionIndex];
    // Retorna a direção final com base no índice da direção atual
}

function processInput() {
    const input = fs.readFileSync('stdin', 'utf8');
    // Lê a entrada do usuário a partir do arquivo 'stdin'
    const lines = input.split('\n');
    // Divide a entrada em linhas
    let index = 0;
    // Define o índice inicial como 0
    let result = '';

    do {
        let n = parseInt(lines[index]);
        // Converte a linha atual para um número inteiro

        if (n === 0) {
            break;
            // Se o número for 0, encerra o loop
        }

        let commands = lines[index + 1].trim();
        // Obtém os comandos da próxima linha e remove espaços em branco
        let finalDirection = getFinalDirection(commands);
        // Obtém a direção final com base nos comandos
        result += finalDirection + '\n';
        // Adiciona a direção final ao resultado

        index += 2;
        // Incrementa o índice em 2 para pular para a próxima entrada
    } while (index < lines.length);
    // Repete até que todas as linhas tenham sido processadas

    console.log(result.trim());
    // Exibe o resultado final removendo espaços em branco desnecessários
}

processInput();
// Chama a função principal para processar a entrada
