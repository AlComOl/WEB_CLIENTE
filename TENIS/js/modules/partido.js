import { Jugador } from "./jugador.js";
import { Set } from "./set.js";
class Partido{
    constructor(setpart,nombre1,nombre2,ranking1,ranking2){
       this.jugador1= new Jugador(nombre1,ranking1);
       this.jugador2= new Jugador(nombre2,ranking2);
       this.puntaje1=0;
       this.puntaje2=0;
       this.llusJugador1=0;
       this.llusJugador2=0
       this.empate=false;
       this.indexSets=0;
       this.setpartido=setpart;
       //cada set tiene su estadistica
        if(setpart==="3"){
            this.sets= new Array(2);
        }else if(setpart==="5"){
            this.sets= new Array(4);
        }

         // Inicializar el array con instancias de Set
         const numberOfSets = setpart === "3" ? 3 : 5; 
         this.sets = Array.from({ length: numberOfSets }, () => new Set());
     
        
    }

    
    
   crearSet() {
        let nuevoSet=new Set();//instancia de set(estadisticas)
        this.sets.push(nuevoSet);//lo meto en el array de sets
        
    }

    
    }


export { Partido };
