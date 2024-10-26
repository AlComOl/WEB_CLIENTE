window.onload=function(){


    document.getElementById("empezarPartida").addEventListener("click",inicioJuego);



 











    function inicioJuego(){

        var pInicio= document.getElementById("datos");//declara una variable introducciendo los elemetos(container) en ella
    
        pInicio.parentNode.removeChild(pInicio);//borra los elementos de dentro de la variable
    
        var pJuego=document.getElementById("juego");
    
        pJuego.style.display="block";//muestra la pantalla, cambia el estado de display



    
    }
}



