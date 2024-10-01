window.onload=function(){
// let turno1="X";
// let turno2="O"
//     console.log('Hola');
// document.getElementById('celda').addEventListener('click',pres1);

// function pres1(){
//     get
const board = document.getElementById("board");
const message = document.getElementById("message");
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }

    if (boardState.every(cell => cell !== "")) {
        return "Empate";
    }

    return null;
}



function handleCellClick(event) {
    const cellIndex = event.target.dataset.index;

    if (boardState[cellIndex] === "" && gameActive) {
        boardState[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        const winner = checkWinner();
        if (winner) {
            gameActive = false;
            if (winner === "Empate") {
                message.textContent = "¡Empate!";
            } else {
                message.textContent = `¡${winner} ha ganado!`;
            }
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}





function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", haceClick);
        board.appendChild(cell);
    }
}

createBoard();
// }
}