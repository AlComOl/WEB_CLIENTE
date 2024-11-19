window.onload = function(){


   let boton=document.getElementById('addTaskBtn');

    boton.addEventListener('click', addTarea);


    function addTarea(){
// añado la linea de la lista 
        tareanueva=document.getElementById('newTaskInput').value;//texto tarea a añador

        let etiqueta=document.createElement('li');//crear tipo elemento
        etiqueta.id='deleteBtn';
        
        let contenido=document.createTextNode(tareanueva);//crear nodo tipo texto con el contenido(nuevatarea)

        etiqueta.appendChild(contenido);//lo añado a la etiqueta

        document.getElementById('taskList').appendChild(etiqueta);//lo añado al docuemnto
        
       
       
 // añado la x para borrar la tarea      
        let borrarTarea=document.createElement('button');//creo el boton 
        borrarTarea.textContent="X";// añado la x 

        borrarTarea.classList.add('deleteBtn');//añado el css 
        borrarTarea.id='btnEliminar';

        etiqueta.appendChild(borrarTarea);//añado el boton a la etiqueta 


        document.getElementById('taskList').appendChild(etiqueta);//lo añado al documento


 
       let deleteTarea= document.querySelector('.deleteBtn');
        borrarTarea.addEventListener('click',eliminarTarea);

        let eliminarTarea = () =>{
              document.getElementById('deleteBtn').remove();
        }
     }
}