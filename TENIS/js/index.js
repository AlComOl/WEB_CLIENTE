window.onload=function(){


    document.getElementById('empezarPartida').addEventListener('click',inicioJuego);


   




 










//elimina la pantalla del formulario de datos requeridos y muestra el marcador
    function inicioJuego(){

        var pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
    
        pInicio.style.display="none";
    
        // Cogemos los id del ckeeckbox
        let set3=document.getElementById('set3');
        let set5=document.getElementById('set5');
        // las secciones donde esta alojado la pantalla del marcador de 3 y 5 sets
        let contenedorSet3=document.getElementById('displaySets3');
        let contenedorSet5=document.getElementById('displaySets5');
        // Si esta chequeado el 3 muestra pantalla del 3 y al contrario
        if(set3.checked){
            contenedorSet3.style.display="block";
            contenedorSet5.style.display = "none"; 
        }else if(set5.checked){
            contenedorSet3.style.display="none";
            contenedorSet5.style.display="block"; 
        }
//Aparicion de las estadisticas y boton de los puntos
        let panelPuntos=document.getElementById('panelPuntos');
        if(set3.checked||set5.checked){
            panelPuntos.style.display="block" 
        }


// Modifica en el encabezado el Nombre de torneo 
        let torneoset3=document.getElementById('torneoset3');
        torneoset3.textContent=document.getElementById('inputTorneo').value;

        let torneoset5=document.getElementById('torneoset5');
        torneoset5.textContent=document.getElementById('inputTorneo').value;
//Modifica nombres de los jugadores
        //set3
        let nomJugador1=document.getElementById('nomJugador1set3');
        nomJugador1.textContent=document.getElementById('inputJugador1').value;
        nomJugador1.textContent=document.getElementById('inputJugador1').value;

        let nomJugador2=document.getElementById('nomJugador2set3');
        nomJugador2.textContent=document.getElementById('inputJugador2').value;
        nomJugador1.textContent=document.getElementById('inputJugador1').value;
        //set5
        let nomJugador1set5=document.getElementById('nomJugador1set5');
        nomJugador1set5.textContent=document.getElementById('inputJugador1').value;
        nomJugador1.textContent=document.getElementById('inputJugador1').value;

        let nomJugador2set5=document.getElementById('nomJugador2set5');
        nomJugador2set5.textContent=document.getElementById('inputJugador2').value;
        nomJugador1.textContent=document.getElementById('inputJugador1').value;
        //nombre jugador1 marcador
        let nomMarcador1=document.getElementById('nomMarcador1');
        nomMarcador1.textContent=document.getElementById('inputJugador1').value;
         //nombre jugador2 marcador
         let nomMarcador2=document.getElementById('nomMarcador2');
         nomMarcador2.textContent=document.getElementById('inputJugador2').value;
 

    }





}



