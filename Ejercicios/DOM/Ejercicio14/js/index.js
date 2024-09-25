/*A partir de la página web proporcionada, completar el código JavaScript para que:

    Cuando se pinche sobre el primer enlace, 
    se oculte su sección relacionada
    Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
    Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
    Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
*/ 

window.onload=function(){
    
       /* let contenido=document.getElementsById("contenidos");//cojo todo los Id contenidos
        for(i=0;i<contenido;i++){//itero pasando por todos ellos
             let parrafo=contenido.getElementsById("enlace_1");//meto en parrafo el Id enlace_1
       
         }

         function omitir(parrafo){  
            parrafo.onclick=
        }*/

    document.getElementById("enlace_1").onclick=omitir;


    function omitir(){
       var quitar =document.getElementById("contenidos_1");

       if( quitar.style.display=='block'){
            quitar.style.display='none';
       }else{
            quitar.style.display='block';
       }
       
    
     
       
    }
}


