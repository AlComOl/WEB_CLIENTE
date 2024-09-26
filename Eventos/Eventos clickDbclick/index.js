 /*Realizar un programa que muestre en un div el número 2.
    Cada vez que se hace doble clic sobre el mismo duplicar el valor contenido en el div hasta el 256.
     Añade un boton reiniciar que cuando le des al boton reinicie a 2 el div
*/

addEventListener("DOMContentLoaded", inicio);
function inicio(){
document.getElementById("cuentas").addEventListener("dblclick",prueba);//coje todo lo del div id=cuentas
document.getElementById("reinicio").addEventListener("click",reiniciar);//coje todo lo del boton con div reinicio
}



   function prueba(){//si entra a la funcion al hacer click al numero 
      let num=document.getElementById("cuentas");//Cogemos do lo que hay dentro del id cuentas (el div) lo mete dentro de la varible num
      
      if(num.textContent<256){
        
         let por2=num.textContent*2;//crera otra varible y multiplica por 2 el contenido metiendolo en ella
         num.textContent = por2;

        // num.innerHTML=por2.textContent;//esto no funciona

      }else{
         num.removeEventListener("dblclick",prueba);//si es mayor borra el evento y no hace nada
      }
  }


   function reiniciar(){// FUNCION PARA EL REINICIO
      let num = document.getElementById("cuentas");
  
      if(num.textContent ==256){
          num.textContent=2;
          num.addEventListener("dblclick", multiplicar);
      }else{
        
  }

   }

  
       
    
    







