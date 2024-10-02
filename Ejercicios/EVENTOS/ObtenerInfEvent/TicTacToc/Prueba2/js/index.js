

window.onload=function(){

let currentPlayer = "X";    

const joc = document.getElementById('joc');//Selecione el Id y el guarde en la variable
const aput = document.getElementById('apunt');// "   "     "     "     "    "     "     "
let tablero = ['', '', '', '', '', '', '', '', ''];//represente el tablero en un array;


function createBoard() {//cree una funcio per a crear el tablero
    for (let i = 0; i < 9; i++) {//itera 9 vegades per a representar les casilles
        const celda = document.createElement('div'); //cree un nou element per celda de joc
        //variable//
       // ||
        celda.className = 'celda'; //Asigne la nova clase "celda" al div
        celda.setAttribute('creaId', i);//Asigne un inex unic a vada celda
        celda.addEventListener('click', ferClicEnLaCelda);//acrega un event clic a la celda que cridara la funcio
        joc.appendChild(celda);//añadeix una nova celda al contenidor del joc
    }
}


function ferClicEnLaCelda(event) {
    const id = event.target.getAttribute('Obtenir_id'); // Obtiene el ID de la celda
  
}
createBoard();

}

