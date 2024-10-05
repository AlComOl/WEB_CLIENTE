window.onload=function(){

document.getElementById("procesador").addEventListener("change",sum);
document.getElementById("monitor").addEventListener("change",sum);
document.getElementById("DiscoDuro").addEventListener("change",sum);

 document.getElementById("procesador").addEventListener("click",parcial1)
document.getElementById("monitor").addEventListener("click",parcial2);
document.getElementById("DiscoDuro").addEventListener("click",parcial3);

 function parcial1(){
     let p1=parseInt(document.getElementById("procesador").value);
     document.getElementById('par_1').value=p1;
 }
function parcial2(){
    let p2=parseInt(document.getElementById("monitor").value);
    document.getElementById('par_2').value=p2;
}
function parcial3(){
    let p3=parseInt(document.getElementById("DiscoDuro").value);
    document.getElementById('par_3').value=p3;
}

function sum(){

    let p=parseInt(document.getElementById('procesador').value);
    let m=parseInt(document.getElementById('monitor').value);
    let d=parseInt(document.getElementById('DiscoDuro').value);
    let tot=p+m+d;

   
    document.getElementById('total').value=tot;
}

}
