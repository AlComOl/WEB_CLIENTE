window.onload=function(){

// let suma=document.getElementById('boto');

// suma.addEventListener('click',contador);
// let res=0;
// function contador(){

// let num=document.getElementById('add');
// res++;
// num.textContent=res;

let parrafo=document.querySelector('p');
let input=document.querySelector('input');



// input.addEventListener('change',(e)=>{
//     console.log(e
// );
// });

input.addEventListener('change',probando);

function probando(event){

parrafo.textContent=event.target.value;
}


let cuadrado=document.querySelector('.bloque')

cuadrado.addEventListener('mouseover', colorCambia);
// cuadrado.addEventListener('mouseleave', vuelveColor);

function colorCambia(){
    cuadrado.style.backgroundColor="yellow";
}
// function vuelveColor(){
//     cuadrado.style.backgroundColor="yellow"
// }

}
