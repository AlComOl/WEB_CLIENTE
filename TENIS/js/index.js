window.onload=function(){


    document.getElementById('empezarPartida').addEventListener('click',inicioJuego);

//elimina la pantalla del formulario de datos requeridos y muestra el marcador
    function inicioJuego(){

        var pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
    
        pInicio.style.display="none";
// muestra la tabla de 3 o 5 sets
        // let setsPartido=document.getElementById('setsPartido');
        // let valorsetpartido=setsPartido.options[setsPartido.selectedIndex].value;
        
        // // Si esta chequeado el 3 muestra pantalla del 3 y al contrario
        // if(valorsetpartido==="3"){//selecionar el select 
        //     displaySets3.style.display="block";
        //     displaySets5.style.display = "none"; 
        //     console.log(valorsetpartido);
        // }else if(valorsetpartido==="5"){
        //     displaySets3.style.display="none";
        //     displaySets5.style.display="block"; 
        //     console.log(valorsetpartido+"set5");
            
        // } 
//  ==>CODIGO ANTERIOR OPTIMIZADO CON LA FINCION FLECHA
        let ElegirSet = () => {
            let valorSeleccionado = setsPartido.options[setsPartido.selectedIndex].value;
          if(valorSeleccionado === "3") 
                 (displaySets3.style.display = "block", displaySets5.style.display = "none")
            else (displaySets3.style.display = "none", displaySets5.style.display = "block");
        };
        ElegirSet();
       

// Llamar a la función de actualización al cargar la página


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

        //
   


 

    }





}



