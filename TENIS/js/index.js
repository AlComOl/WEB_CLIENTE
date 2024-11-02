
// import { Partido } from './partido.js';

window.onload=function(){
  document.getElementById('empezarPartida').addEventListener('click',inicioJuego);

    function inicioJuego(){

//elimina la pantalla del formulario de datos requeridos y muestra el marcador
var pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
        pInicio.style.display="none";
//agreda los id a las variables 
        let setsPartido=document.getElementById('setsPartido');//coje sets
        let panelPuntos=document.getElementById('panelPuntos');//coge el panel puntos
        let torneoset3=document.getElementById('torneoset3');//torneo a 3 0
        let torneoset5=document.getElementById('torneoset5');//a 5 
       
        // let valorsetpartido=setsPartido.options[setsPartido.selectedIndex].value;
        
// Si selecionamos  3sets muestra pantalla del 3 y al contrario
        // if(valorsetpartido==="3"){//selecionar el select 
        //     displaySets3.style.display="block";
        //     displaySets5.style.display = "none"; 
          
        // }else if(valorsetpartido==="5"){
        //     displaySets3.style.display="none";
        //     displaySets5.style.display="block"; 
           
            
        // } 
//  ==>CODIGO ANTERIOR OPTIMIZADO CON LA FINCION FLECHA
        let muestraPantallaJuego = () => {
         let valorSeleccionado = setsPartido.options[setsPartido.selectedIndex].value;
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
        };
        muestraPantallaJuego();
      

//Aparicion de las estadisticas y boton de los puntos
        // let panelPuntos=document.getElementById('panelPuntos');
        // if(valorsetpartido === "3"||valorsetpartido === "5"){
        //     panelPuntos.style.display="block" 
        // }


// Modifica en el encabezado el Nombre de torneo 
        // let torneoset3=document.getElementById('torneoset3');
        // torneoset3.textContent=document.getElementById('inputTorneo').value;

        // let torneoset5=document.getElementById('torneoset5');
        // torneoset5.textContent=document.getElementById('inputTorneo').value;

//Modifica nombres de los jugadores
        //set3
        // let nomJugador1=document.getElementById('nomJugador1set3');
        // nomJugador1.textContent=document.getElementById('inputJugador1').value;
        // nomJugador1.textContent=document.getElementById('inputJugador1').value;

        // let nomJugador2=document.getElementById('nomJugador2set3');
        // nomJugador2.textContent=document.getElementById('inputJugador2').value;
        // nomJugador1.textContent=document.getElementById('inputJugador1').value;
        // //set5
        // let nomJugador1set5=document.getElementById('nomJugador1set5');
        // nomJugador1set5.textContent=document.getElementById('inputJugador1').value;
        // nomJugador1.textContent=document.getElementById('inputJugador1').value;

        // let nomJugador2set5=document.getElementById('nomJugador2set5');
        // nomJugador2set5.textContent=document.getElementById('inputJugador2').value;
        // nomJugador1.textContent=document.getElementById('inputJugador1').value;
        // //nombre jugador1 marcador
        // let nomMarcador1=document.getElementById('nomMarcador1');
        // nomMarcador1.textContent=document.getElementById('inputJugador1').value;
        // //nombre jugador2 marcador
        //  let nomMarcador2=document.getElementById('nomMarcador2');
        //  nomMarcador2.textContent=document.getElementById('inputJugador2').value;

        //OPTIMIZADO
        // const actualizarNombresJugadores = () => {
        //     const jugador1Nombre = document.getElementById('inputJugador1').value;
        //     const jugador2Nombre = document.getElementById('inputJugador2').value;
        
        //     // Actualizamos los nombres en todos los elementos necesarios
        //     document.getElementById('nomJugador1set3').textContent = jugador1Nombre;
        //     document.getElementById('nomJugador2set3').textContent = jugador2Nombre;
        //     document.getElementById('nomJugador1set5').textContent = jugador1Nombre;
        //     document.getElementById('nomJugador2set5').textContent = jugador2Nombre;
        //     document.getElementById('nomMarcador1').textContent = jugador1Nombre;
        //     document.getElementById('nomMarcador2').textContent = jugador2Nombre;
        // };
        // actualizarNombresJugadores();
   
        // if(valorsetpartido==="3"){//selecionar el select 
             
           
        // }else if(valorsetpartido==="5"){
           
            
        // } 
        Partido.añadirASet(sets);

  

    }





};

// export {valorsetpartido};

