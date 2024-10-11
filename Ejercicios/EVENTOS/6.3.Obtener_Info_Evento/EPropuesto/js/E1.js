
const gameBoardContainer = document.getElementById('gameBoard');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Condiciones ganadoras
const winningConditions = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila media
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna media
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal inversa
];

// Crear botones de celdas dinámicamente
function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.setAttribute('id', i); // ID basado en el índice
        cell.addEventListener('click', handleCellClick);
        gameBoardContainer.appendChild(cell);
    }
}

// Manejar clic en cada celda
function handleCellClick(e) {
    const clickedCell = e.target;
    const cellIndex = parseInt(clickedCell.id);

    // Si la celda ya tiene un valor o el juego terminó, no hacer nada
    if (gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    // Actualizar el estado del tablero y mostrar el movimiento
    gameBoard[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Verificar si hay un ganador
    checkForWinner();
}

// Verificar si hay un ganador
function checkForWinner() {
    let roundWon = false;

    // Revisar todas las combinaciones ganadoras
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = gameBoard[winCondition[0]];
        const b = gameBoard[winCondition[1]];
        const c = gameBoard[winCondition[2]];

        // Si alguna de las celdas está vacía, continuar
        if (a === '' || b === '' || c === '') {
            continue;
        }

        // Si todas las celdas coinciden, se ha ganado la ronda
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `¡El jugador ${currentPlayer} ha ganado!`;
        gameActive = false;
        return;
    }

    // Verificar si hay empate
    const roundDraw = !gameBoard.includes('');
    if (roundDraw) {
        statusText.textContent = "¡Es un empate!";
        gameActive = false;
        return;
    }

    // Cambiar de jugador
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Turno del jugador ${currentPlayer}`;
}

// Reiniciar el juego
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusText.textContent = `Turno del jugador ${currentPlayer}`;

    // Limpiar todas las celdas
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
}

// Crear el tablero y añadir el botón de reinicio
createBoard();
resetButton.addEventListener('click', resetGame);