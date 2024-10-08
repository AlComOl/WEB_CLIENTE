window.onload=function(){

document.getElementById("procesador").addEventListener("change",parcial1);//cogemos el valor del id procesador
//cuando cambiamos valor se ejecuta la funcion parcial1
document.getElementById("monitor").addEventListener("change",parcial2);
document.getElementById("DiscoDuro").addEventListener("change",parcial3);
document.getElementById("mostrar").addEventListener("click",sum);

 function parcial1(){
     let p1=parseInt(document.getElementById("procesador").value);//introduce dentro de la variable el valor del id,previamente pasandolo a entero
     document.getElementById('par_1').value=p1;//Asigna el valor de la variable p1 a la propiedad value del elemento con ID 'par_1
 }
function parcial2(){
    let p2=parseInt(document.getElementById("monitor").value);
    document.getElementById('par_2').value=p2;
}
function parcial3(){
    let p3=parseInt(document.getElementById("DiscoDuro").value);
    document.getElementById('par_3').value=p3;
}

function sum(){//se suman los valores de las variables y se asignan a la varible tot

    let p=parseInt(document.getElementById('procesador').value);
    let m=parseInt(document.getElementById('monitor').value);
    let d=parseInt(document.getElementById('DiscoDuro').value);
    let tot=p+m+d;

   //se actualiza el valor de id total con la suma del producto 
    document.getElementById('total').value=tot;
}

}
