import { Jugador } from "./jugador.js";
class Partido{
    constructor(jugador1Nombre,ranking1,jugador2Nombre,ranking2){
       this.jugador1= new Jugador(jugador1Nombre,ranking1);
       this.jugador2= new Jugador(jugador2Nombre,ranking2);
       

    }
}



export {Partido}