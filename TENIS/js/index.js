import { Jugador } from './modules/jugador.js';
import { Partido } from './modules/partido.js';



window.onload=function(){
  var selecionado;
  var partido1;
  document.getElementById('empezarPartida').addEventListener('click',inicioJuego);

  

    function inicioJuego(){

//elimina la pantalla del formulario de datos requeridos y muestra el marcador
var pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
        pInicio.style.display="none";
//agrego los id a las variables 
        let setsPartido=document.getElementById('setsPartido');//coje sets
        let panelPuntos=document.getElementById('panelPuntos');//coge el panel puntos
        let torneoset3=document.getElementById('torneoset3');//torneo a 3 0
        let torneoset5=document.getElementById('torneoset5');//a 5 
       

//  ==>CODIGO ANTERIOR OPTIMIZADO CON LA FINCION FLECHA
        let muestraPantallaJuego = () => {   
         let valorSeleccionado = setsPartido.options[setsPartido.selectedIndex].value;
         selecionado=valorSeleccionado;
         let jugador1Nombre = document.getElementById('inputJugador1').value;
         let jugador2Nombre = document.getElementById('inputJugador2').value;
          if(valorSeleccionado === "3") {
                 displaySets3.style.display = "block", displaySets5.style.display = "none";
                 torneoset3.textContent=document.getElementById('inputTorneo').value;
                 document.getElementById('nomJugador1set3').textContent = jugador1Nombre;//nonbre jugador 1 si aparece table set3
                 document.getElementById('nomJugador2set3').textContent = jugador2Nombre;
               
             }else {
                 displaySets3.style.display = "none", displaySets5.style.display = "block";
                 torneoset5.textContent=document.getElementById('inputTorneo').value;
                 document.getElementById('nomJugador1set5').textContent = jugador1Nombre;
                 document.getElementById('nomJugador2set5').textContent = jugador2Nombre;
            }
          if(valorSeleccionado === "3"||valorSeleccionado === "5"){//aparece el panel puntos
                panelPuntos.style.display="block" 
            } 

            let ranking1= document.getElementById('ranking1');
            let ranking2= document.getElementById('ranking2');

            partido1=new Partido(selecionado,jugador1Nombre,jugador2Nombre,ranking1,ranking2);
            //creamos las estadisticas del set instanciando un objeto de set con la funcion
             partido1.crearSet();
             console.log(partido1.sets);
        };
        muestraPantallaJuego();
       
       
        
    };  



    let puntosJuego = ["0", "15", "30", "40","Ventaja"];

    document.getElementById('puntoJugador1').addEventListener('click', incrementarPuntaje);
    document.getElementById('puntoJugador2').addEventListener('click', incrementarPuntaje);

    function incrementarPuntaje(evento) {
        const anotador = evento.target.id;
//anotar puentos en el constructor       
        if (anotador === 'puntoJugador1'&& partido1.empate==false) {
            if (partido1.puntaje1 < puntosJuego.length - 1) {
                partido1.puntaje1++;
// guardo estadisticas dentro de set

                if(document.getElementById('opcion1_ace1').checked){
                    console.log(partido1.indexSets);
                   
                    partido1.sets[partido1.indexSets].acc1++;
                    
                }
                if(document.getElementById('opcion1_tiro_ganador').checked){
                    partido1.sets[partido1.indexSets].tg1++;
                }
                if(document.getElementById('opcion1_servicio1').checked){
                    partido1.sets[partido1.indexSets].servicio1_1++;
                }
                if(document.getElementById('opcion1_servicio2').checked){
                    partido1.sets[partido1.indexSets].servicio2_1++;
                }
                if(document.getElementById('opcion1_dobleFalta').checked){
                    partido1.sets[partido1.indexSets].df++;
                }
                //hacer con todas los atributos de set lo mismo para
                //que sean guardados en instancia de la clase set
               
            }
           
        } else if (anotador === 'puntoJugador2'&& partido1.empate==false) {
            if (partido1.puntaje2 < puntosJuego.length - 1) {
                partido1.puntaje2++;
                
            }
        }
        console.log(partido1.puntaje1,partido1.puntaje2);
//si hay empate a 40 o deuce
        if(partido1.puntaje1===3 && partido1.puntaje2===3){//empate a puntos
            console.log("empate a 40 ");
            
            if(anotador === 'puntoJugador1' && partido1.empate==true){//solo entraria si estubieramos en deuge por el boleano a true
                partido1.llusJugador1++;
                if(partido1.llusJugador1=="1"){
                document.getElementById('deuce1').innerHTML="X";
                }
                console.log(partido1.llusJugador1)
            }
            else if(anotador === 'puntoJugador2' && partido1.empate==true){
                partido1.llusJugador2++;
                if(partido1.llusJugador2=="1"){
                    document.getElementById('deuce2').innerHTML="X";
                    }
                console.log(partido1.llusJugador2)
            }
            partido1.empate=true;
        }

 // Actualizar el marcador
        document.getElementById('puntajeJugador1').textContent = puntosJuego[partido1.puntaje1];
        document.getElementById('puntajeJugador2').textContent = puntosJuego[partido1.puntaje2];

        // Comprobar si hay un ganador
        comprobarGanador();
    }

    function comprobarGanador() {
        if (partido1.puntaje1 === 4 && partido1.empate==false ) {
// si los puntos del cons son mayor a 3(40) y boleano es true
            partido1.jugador1.juego += 1;
            let juegosJugador1=document.getElementById('juegosJugador1');
            document.getElementById('juegosJugador1').textContent = partido1.jugador1.juego;
           console.log("Hola no es un empate y gano1");
            reiniciarPuntaje();
        } else if (partido1.puntaje2 === 4 && partido1.empate==false) {
            partido1.jugador2.juego += 1;
            document.getElementById('juegosJugador2').textContent = partido1.jugador2.juego;
            console.log("Hola no es un empate y gano2");
            reiniciarPuntaje();

        
//comprobar el deuge 
      
        }else if(partido1.llusJugador1>partido1.llusJugador2+1){
            let juegomas1=partido1.jugador1.juego += 1;
            document.getElementById('juegosJugador1').textContent=juegomas1;
            reiniciarDesempate(); 
            console.log( partido1.llusJugador1=0);
            reiniciarPuntaje();
            
            console.log("nuevo1");
        }else if(partido1.llusJugador2>partido1.llusJugador1+1){
           
            document.getElementById('juegosJugador2').textContent=partido1.jugador2.juego += 1;
            reiniciarDesempate(); 
            console.log( partido1.llusJugador2=0);
            reiniciarPuntaje();
            console.log("nuevo2");
        
    //si hay hay 6 juegos del jugador 1 sin empate a juegos(tiebreak) anotar set

        }else if (partido1.jugador1.juego === 5&&partido1.puntaje1===3 && partido1.jugador1.juego >= partido1.jugador2.juego + 2) {
            partido1.jugador1.set++;  // Incrementa el set del jugador 1
              //indice para cambiar el id a renderizar
            
//sacamos por pantalla estadisticas
            muestraModalEstadisticas();
            partido1.jugador1.juego=0; 
           
              //elegir si el partido es a 3 o 5 sets para que se renderice en pantalla
             if(selecionado === "3"){
                document.getElementById('cont_jugador1_'+(partido1.indexSets+1)+'set3').textContent = partido1.jugador1.set;  // Muestra el nuevo valor del set en el marcador
                if(partido1.jugador1.set===3){
                    console.log("caundo ya tengo 3 = "+partido1.jugador1.set);
                        alert('LA FUMADA HA TERMINADO');
                }
             }else if(selecionado === "5"){
                document.getElementById('cont_jugador1_'+(partido1.indexSets+1)+'set5').textContent = partido1.jugador1.set;  // Muestra el nuevo valor del set en el marcador
                if(partido1.set===5){
                    alert('LA FUMADA HA TERMINADO');
                 }
             }
           
            partido1.indexSets++;
            partido1.crearSet();

//si hay hay 6 juegos del jugador 2 sin empate a juegos(tiebreak) anotar set
        }else if (partido1.jugador2.juego === 5&&partido1.puntaje2===3 && partido1.jugador2.juego >= partido1.jugador1.juego + 2) {
            partido1.jugador2.set++;  // Incrementa el set del jugador 1
//indice para cambiar el id a renderizar
              
            //sacamos por pantalla estadisticas
            muestraModalEstadisticas();
            partido1.jugador2.juego=0; 
              //elegir si el partido es a 3 o 5 sets para que se renderice en pantalla
             if(selecionado === "3"){
                document.getElementById('cont_jugador2_'+(partido1.indexSets+1)+'set3').textContent = partido1.jugador2.set;  // Muestra el nuevo valor del set en el marcador
                if(partido1.jugador2.set===3){
                    console.log("caundo ya tengo 3 = "+partido1.jugador1.set);
                        alert('LA FUMADA HA TERMINADO cuando tengo 3 sets');
                }
                 
             
             }else if(selecionado === "5"){
                document.getElementById('cont_jugador2_'+(partido1.indexSets+1)+'set5').textContent = partido1.jugador2.set;  // Muestra el nuevo valor del set en el marcador
                if(partido1.jugador2.set===5){
                    console.log("caundo ya tengo 5 = "+partido1.jugador1.set);
                        alert('LA FUMADA HA TERMINADO con 5 sets');
                }
             }
             //indice para cambiar el id a renderizar
             partido1.indexSets++;
             partido1.crearSet();
        }
}

    function reiniciarPuntaje() {
        partido1.puntaje1 = 0; // Reiniciar puntaje jugador 1
        partido1.puntaje2 = 0; // Reiniciar puntaje jugador 2
        // Actualizar el DOM aquí si es necesario
        document.getElementById('puntajeJugador1').textContent = "0";
        document.getElementById('puntajeJugador2').textContent = "0";
        document.getElementById('deuce1').textContent = " ";
        document.getElementById('deuce2').textContent = " ";
    }

    function reiniciarDesempate() {
        // Restablece únicamente los puntajes de desempate sin tocar los puntajes generales
        partido1.llusJugador1 = 0;
        partido1.llusJugador2 = 0;
        partido1.empate = false;
    }


    // modal
//primero se habre si terminamos el set 
let muestraModalEstadisticas = () => { 
if(partido1.jugador1.juego===5 || partido1.jugador2.juego===5){
   document.getElementById('jugador1_aces').textContent=partido1.sets[partido1.indexSets].acc1;
   document.getElementById('jugador2_aces').textContent=partido1.sets[partido1.indexSets].acc2;

   document.getElementById('jugador1_tiro_ganador').textContent=partido1.sets[partido1.indexSets].tganador1;
   document.getElementById('jugador2_tiro_ganador').textContent=partido1.sets[partido1.indexSets].tganador2;

   document.getElementById('jugador1_servicio1').textContent=partido1.sets[partido1.indexSets].servicio1_1;
   document.getElementById('jugador2_servicio1').textContent=partido1.sets[partido1.indexSets].servicio2_1;


    document.getElementById('idModal').style='display:block';
    
    
}
//cierra las estadisticas
};
let cierraModal=document.getElementById('idModal');
cierraModal.addEventListener('click',() => {
    cierraModal.style='display:none';
});
//sin la funcion flecha
// let pantallaModal=document.getElementById('idModal');
// pantallaModal.addEventListener('click',function(){
//     pantallaModal .style='display:none';

// });

//mostrar estadisticas 




}
