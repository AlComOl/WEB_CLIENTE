import { valorsetpartido } from "./index";
import { set } from "./set";


class Partido{
    constructor(setpartido){
       this.jugador1= new jugador;
       this.jugador2= new jugador;
       this.puntuaje1=0;
       this.puntuaje2=0;
       //cada set tiene su estadistica
        if(valorsetpartido==="3"){
            this.sets= new Array(2);
        }else if(valorsetpartido==="5"){
            this.sets= new Array(4);
        }
        
    }
    
   añadirASet(sets) {
        let nuevoSet=new set();//instancia de set(estadisticas)
        this.sets.push(nuevoSet);//lo meto en el array de sets
        
    }

    
}

export { Partido };
