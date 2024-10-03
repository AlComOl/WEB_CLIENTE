window.onload=function(){

document.getElementById("procesador").addEventListener("change",sum);
document.getElementById("monitor").addEventListener("change",sum);
document.getElementById("DiscoDuro").addEventListener("change",sum);

function sum(){

    let p=parseInt(document.getElementById('procesador').value);
    let m=parseInt(document.getElementById('monitor').value);
    let d=parseInt(document.getElementById('DiscoDuro').value);
    let tot=p+m+d;

   
    document.getElementById('total').value=tot;
}

}