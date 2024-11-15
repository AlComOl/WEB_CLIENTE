import { Partido } from './modules/partido.js';



window.onload=function(){
  var selecionado;
  var partido1;
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
         let jugador1Nombre = document.getElementById('inputJugador1').value;//Introduce en la variable el nombre de los jugadores
         let jugador2Nombre = document.getElementById('inputJugador2').value;
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
            //instanciamos Partido pasando los valores introducidos anteriormente
            partido1=new Partido(selecionado,jugador1Nombre,jugador2Nombre,ranking1,ranking2);
            //creamos las estadisticas del set instanciando un objeto de set con la funcion
             partido1.crearSet();
        };
        //Muestra la pantalla
        muestraPantallaJuego();
       
       
        
    };  
///MANEJAR LOS PUNTOS Y EL MARCADOR 

}