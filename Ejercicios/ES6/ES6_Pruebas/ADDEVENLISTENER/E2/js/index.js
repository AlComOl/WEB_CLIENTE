window.onload=function(){

document.addEventListener('click',mostrarFrase);

function mostrarFrase(){
   let contador=0;
   let boton=document.getElementById('texto-informatica');
   let nuevafrase=document.getElementById('ver-mas-boton');
    myarray=["No temo a los ordenadores; lo que temo es quedarme sin ellos» — Isaac Asimov","2. «Una vez un ordenador me venció jugando al ajedrez, pero no me opuso resistencia cuando pasamos al kick boxing»– Emo Philips","3. «La informática tiene que ver con los ordenadores lo mismo que la astronomía con los telescopios»– Edsger W. Dijkstra","4. «El ordenador nació para resolver problemas que antes no existían»– Bill Gates"]
    let indice = Math.floor(Math.random() * myarray.length);
 
       let mostrarFrase=myarray[indice]; 
        // console.log(mostrarFrase);
       nuevafrase.textContent=mostrarFrase;
        
       }
       console.log(mostrarFrase);
    }


