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
            partido1.añadirASet(0);
        };
        muestraPantallaJuego();
        
    };  



 

    

    // document.getElementById('puntoJugador1').addEventListener('click',anotarPunto);



    // function anotarPunto(evento){
    //    let anotador =evento.target.id;
    //    if(anotador==='puntoJugador1'){
    //     for (let i = 0; i < puntosJuego.length; i++) {
    //         if(puntosJuego[i]===){
     
    //         }
    //    }
   
        
    // }

    // let anotador = evento.target.id;

    // console.log(anotador);

    let puntosJuego = ["0", "15", "30", "40","Ventaja"];

    document.getElementById('puntoJugador1').addEventListener('click', incrementarPuntaje);
    document.getElementById('puntoJugador2').addEventListener('click', incrementarPuntaje);

    function incrementarPuntaje(evento) {
        const anotador = evento.target.id;
//anotar puentos en el constructor       
        if (anotador === 'puntoJugador1'&& partido1.empate==false) {
            if (partido1.puntaje1 < puntosJuego.length - 1) {
                partido1.puntaje1++;
                
               
            }
           
        } else if (anotador === 'puntoJugador2'&& partido1.empate==false) {
            if (partido1.puntaje2 < puntosJuego.length - 1) {
                partido1.puntaje2++;
                
            }
        }
        console.log(partido1.puntaje1,partido1.puntaje2);
//si hay empate a 40 o deuce
        if(partido1.puntaje1===3 && partido1.puntaje2===3){
            console.log("empate a 40 ");
            
            if(anotador === 'puntoJugador1' && partido1.empate==true){
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
        
    //si hay hay 6 juegos sin empate a juegos(tiebreak) anotar set

        }else if (partido1.jugador1.juego === 6 && partido1.jugador1.juego >= partido1.jugador2.juego + 2) {
            partido1.jugador1.set++;  // Incrementa el set del jugador 1
            partido1.jugador1.juego=0;
            document.getElementById('cont_p1set_1').textContent = partido1.jugador1.set;  // Muestra el nuevo valor del set en el marcador
            
            console.log(partido1.jugador1.set);
            console.log("juego"+partido1.jugador1.juego);
            console.log("El jugador 1 ha ganado un set");

            
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
};







