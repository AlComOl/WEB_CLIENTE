window.onload=function(){
    console.log("hola");
let boton=document.getElementById('mostrar');

let valor1=document.getElementById('d1');
let valor2=document.getElementById('d2');
let valor3=document.getElementById('d3');

boton.addEventListener('click',mostrarRespuestas);   // Inicializamos una cadena vacía para almacenar la selección



function mostrarRespuestas(){
    let res="";
   
    // Verificamos cada checkbox y construimos la cadena de selección
    if(document.getElementById('d1').checked){//si el id=d1 está ticado construimos la variable
        res+="baloncesto,"
    }
    if(document.getElementById('d2').checked){
        res+="esgrima,"
    }
    if(document.getElementById('d3').checked){
        res+="alterofilia"
    }
    document.getElementById('resultados').value=res;
  
}
}

