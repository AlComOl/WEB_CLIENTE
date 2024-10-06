window.onload=function(){
console.log('Hola');
let boton=document.getElementById('mostrar');
let pregunta1=document.getElementById('asir');
let pregunta2=document.getElementById('daw');
let pregunta3=document.getElementById('dam');

boton.addEventListener('click',evaluarRespuestas);

function evaluarRespuestas(){
    let correcta=0;
    let incorrecta=0;
  

//selectIndex coge el indice 0,1,2
//esto cogeria el valor de value options[pregunta1.selectedIndex].value==="1"){
    if(pregunta1.options[pregunta1.selectedIndex].value==="1"){
      correcta++;
    }else{
      incorrecta++;
    }
    
    if(pregunta1.options[pregunta2.selectedIndex].value==="2"){
        correcta++;
      }else{
        incorrecta++;
      }

    if(pregunta1.options[pregunta3.selectedIndex].value==="3"){
        correcta++;
      }else{
        incorrecta++;
      }

      document.getElementById('c').value=correcta;
      document.getElementById('i').value=incorrecta;
}
}