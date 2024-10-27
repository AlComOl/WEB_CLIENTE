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

// Modifica en el encabezado el Nombre de torneo 
        let torneoset3=document.getElementById('torneoset3');
        torneoset3.textContent=document.getElementById('inputTorneo').value;

        let torneset5=document.getElementById('torneoset5');
        torneset5.textContent=document.getElementById('inputTorneo').value;
//Hay que meter los campos de los datos de html de la misma forma que lo hacemos anterior mente
        let jugador1=document.getElementById()

    }




    // Creamos el objeto Jugador 


    class Jugador1{

         Ace = 0;

    }

}



