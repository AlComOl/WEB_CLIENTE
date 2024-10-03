// Disponer dos campos de texto tipo password.
// Cuando se presione un botón mostrar si las dos claves 
// ingresadas son iguales o no (es muy común solicitar al
// operador el ingreso de dos veces de su clave para validar 
// si las escribió correctamente, esto se hace cuando se crea
// una password para el ingreso a un sitio o para el cambio 
// de una existente).
// Tener en cuenta que podemos emplear el operador == para 
// ver si dos string son iguales. 


window.onload= function(){

    document.getElementById('boton1').addEventListener("click",confirmar);
   console.log("sdfghj");
function confirmar(){
    let clave1 = document.getElementById('pwd-1').value;
    let clave2=document.getElementById('pwd-2').value

    if(clave1==clave2){
        alert("La clave es correcta")
    }else{
        alert("La clave no es correcta");
    }
}

}