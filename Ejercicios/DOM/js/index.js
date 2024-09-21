
/*Número de enlaces de la página*/
window.onload = function() {
    var info = document.getElementById("informacion");
   

 // Numero de enlaces de la pagina

  var enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = "+enlaces.length;

/*Dirección del penúltimo enlace*/

var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
info.innerHTML = info.innerHTML + "<br/>" + mensaje;


// Numero de enlaces que apuntan a http://prueba
var c=0;
for(var i=0;i<enlaces.length;i++){
    if(enlaces[i].href=="http://prueba" || enlaces[i].href=="http://prueba/" ){
      
        c++;
    }
}


info.innerHTML=info.innerHTML+"<br>"+ "Número de mensajes que apuntan a http://prueba = "+ c; 



//Número de enlaces del tercer párrafo

var parrafos= document.getElementsByTagName("p");

enlaces=parrafos[2].getElementsByTagName("a");

info.innerHTML=info.innerHTML+"<br/>"+"Numero de enlaces del tercer parrafo"+ enlaces.length;
}

