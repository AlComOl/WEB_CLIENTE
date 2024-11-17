import { Partido } from "./modules/partido.js";
import { Juego } from "./modules/juego.js";


window.onload=function(){
var partido1;
var juego1;
  let jugador1Nombre=document.getElementById('inputJugador1').value;
  let ranking1=document.getElementById('ranking1').value;
  let jugador2Nombre=document.getElementById('inputJugador2').value;
  let ranking2=document.getElementById('ranking2').value;
  let ntor=document.getElementById('inputTorneo').value;
  let nTorneo=document.getElementById('inputTorneo').value;
  let sets=document.getElementById('set3').value;
  
  // document.getElementById('empezarPartida').addEventListener('click',inicioJuego);


   partido1 = new Partido(jugador1Nombre,ranking1,jugador2Nombre,ranking2,nTorneo,sets);
   juego1=new Juego(partido1);

   console.log(partido1);
   console.log(juego1);

  juego1.anotaJugador1();
  juego1.anotaJuego();
  console.log(`Juegos jugador 1: ${juego1.juego1}, Juegos jugador 2: ${juego1.juego2}`);

  
}



  