window.onload=function() {
   

    document.addEventListener('click',ocultarDiv);


  function ocultarDiv(evento){
    let box =document.getElementById('box');
    if(box.style.display==='none'){
        box.style.display='block';

    }else{
        box.style.display='none';
    }
   }
}