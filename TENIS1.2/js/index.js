import { Partido } from "./modules/partido.js";
import { Juego } from "./modules/juego.js";

window.onload=function(){
    var selecionado;
    let partido1;
    let jugador1Nombre;
    let jugador2Nombre;
    var juego1;
    var pInicio;
    document.getElementById('empezarPartida').addEventListener('click',inicioJuego);
  
    
  
      function inicioJuego(){
  
  //elimina la pantalla del formulario de datos requeridos y muestra el marcador
   pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
          pInicio.style.display="none";
  //agrego los id a las variables 
          let setsPartido=document.getElementById('setsPartido');//coje sets
          let panelPuntos=document.getElementById('panelPuntos');//coge el panel puntos
          let torneoset3=document.getElementById('torneoset3');//torneo a 3 0
          let torneoset5=document.getElementById('torneoset5');//a 5 
         
  
  //Función para mostrar la pantalla 
          let muestraPantallaJuego = () => {   
           let valorSeleccionado = setsPartido.options[setsPartido.selectedIndex].value;//introduce la opción del set en selecionado
           selecionado=valorSeleccionado;
            jugador1Nombre = document.getElementById('inputJugador1').value;//Introduce en la variable el nombre de los jugadores
            jugador2Nombre = document.getElementById('inputJugador2').value;
           
            if(valorSeleccionado === "3") {//aparece el marcadores de sets segun la opcion del select
                   displaySets3.style.display = "block", displaySets5.style.display = "none";
                   torneoset3.textContent=document.getElementById('inputTorneo').value;
                   document.getElementById('nomJugador1set3').textContent = jugador1Nombre;//nombre jugador 1 si aparece table set3
                   document.getElementById('nomJugador2set3').textContent = jugador2Nombre;
                 
               }else {//el el caso de 5 aparece la tabla de 5 
                   displaySets3.style.display = "none", displaySets5.style.display = "block";
                   torneoset5.textContent=document.getElementById('inputTorneo').value;
                   document.getElementById('nomJugador1set5').textContent = jugador1Nombre;
                   document.getElementById('nomJugador2set5').textContent = jugador2Nombre;
              }
          //Muestra el marcador en cualquiera de los 2 casos
            if(valorSeleccionado === "3"||valorSeleccionado === "5"){//aparece el panel puntos
                  panelPuntos.style.display="block" 
              } 
  
              let ranking1= document.getElementById('ranking1');
              let ranking2= document.getElementById('ranking2');

           
           
               
          };
          //Muestra la pantalla
          muestraPantallaJuego();
        
          document.getElementById('puntoJugador1').addEventListener('click', incrementarPuntaje);
          document.getElementById('puntoJugador2').addEventListener('click', incrementarPuntaje);

          partido1=new Partido(jugador1Nombre,ranking1,jugador2Nombre,ranking2);
        const anotador = evento.target.id;
         if(selecionado==='puntoJugador1'){
            juego1.puntaje1++;

         }else if(selecionado==='puntoJugador1'){

         }
          
          juego1=new Juego(puntaje1,puntaje2,juego1,juego2,estadisticas);

         
         
          
      };  

      
   
    }

  