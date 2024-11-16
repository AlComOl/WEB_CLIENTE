class Juego{
    
    constructor(){
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

    anotaJuego1(){

    }

    anotaJuego2(){
        
    }

    anotarEstadisticas(){

    }
 
}    

export {Juego}
