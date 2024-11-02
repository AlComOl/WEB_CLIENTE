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

    let puntosJuego = ["0", "15", "30", "40", "VENT"];

    document.getElementById('puntoJugador1').addEventListener('click', incrementarPuntaje);
    document.getElementById('puntoJugador2').addEventListener('click', incrementarPuntaje);

    function incrementarPuntaje(evento) {
        const anotador = evento.target.id;

        if (anotador === 'puntoJugador1') {
            if (partido1.puntaje1 < puntosJuego.length - 1) {
                partido1.puntaje1++;
            }
        } else if (anotador === 'puntoJugador2') {
            if (partido1.puntaje2 < puntosJuego.length - 1) {
                partido1.puntaje2++;
            }
        }

        // Actualizar el marcador
        document.getElementById('puntajeJugador1').textContent = puntosJuego[partido1.puntaje1];
        document.getElementById('puntajeJugador2').textContent = puntosJuego[partido1.puntaje2];

        // Comprobar si hay un ganador
        comprobarGanador();
    }

    function comprobarGanador() {
        if (partido1.puntaje1 >= 3 && partido1.puntaje1 >= partido1.puntaje2 + 2) {
            // alert(`${partido1.jugador1.nombre} ha ganado el juego!`);
            partido1.jugador1.juego += 1
            let juegosJugador1=document.getElementById('juegosJugador1');
            document.getElementById('juegosJugador1').textContent = partido1.jugador1.juego;
           
            reiniciarPuntaje();
        } else if (partido1.puntaje2 >= 3 && partido1.puntaje2 >= partido1.puntaje1 + 2) {
            partido1.jugador2.juego += 1
            document.getElementById('juegosJugador2').textContent = partido1.jugador2.juego;
           
            reiniciarPuntaje();
        }
    }

    function reiniciarPuntaje() {
        partido1.puntaje1 = 0; // Reiniciar puntaje jugador 1
        partido1.puntaje2 = 0; // Reiniciar puntaje jugador 2
        // Actualizar el DOM aquí si es necesario
        document.getElementById('puntajeJugador1').textContent = "0";
        document.getElementById('puntajeJugador2').textContent = "0";
    }
};







