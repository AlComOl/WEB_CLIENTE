import { Partido } from "./partido.js";
class Juego{
    
    constructor(partido1){
      this.partido = partido1; // Guardar referencia a la instancia de Partido
      this.puntaje1=1;
      this.puntaje2=0;
      this.juego1=0;
      this.juego2=0;
    
       //estadisticas

       this.estadisticas = new Map([
        ['ace1', 0], 
        ['ace2', 0],
        ['servicio1_1', 0], 
        ['servicio1_2', 0], 
        ['servicio2_1', 0], 
        ['servicio2_2', 0], 
        ['gg1', 0], 
        ['gg2', 0], 
        ['df1', 0], 
        ['df2', 0], 
        ['juegos1', 0], 
        ['juegos2', 0]
    ]);
    
   
    }
    anotaJugador1(){
      this.puntaje1++;
    }

    anotaJugador2(){
      this.puntaje2++;

    }

    anotaJuego(){
      if(this.puntaje1>this.puntaje2+2 && this.puntaje1>=2 && juego1<=this.partido.sets){
        this.juego1++
      }else if(this.puntaje2>this.puntaje1+2 && juego2<=this.partido.sets){
        this.juego2++;
      }

    }

    // anotaJuego2(){
        
    // }

    // anotarEstadisticas(){

    // }
 
}    

export {Juego}
