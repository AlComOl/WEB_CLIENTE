window.onload = function(){


   let boton=document.getElementById('addTaskBtn');

    boton.addEventListener('click', addTarea);


    function addTarea(){

        tareanueva=document.getElementById('newTaskInput').value;

        let etiqueta=document.createElement('li');//crear tipo elemento
        let contenido=document.createTextNode(tareanueva);//crear nodo tipo texto con el contenido

        etiqueta.appendChild(contenido);

        document.getElementById('taskList').appendChild(etiqueta);
        
        const borrarTarea=document.createElement('button');
        borrarTarea.textContent="X";

        // borrarTarea.classList.add('deleteBtn');

        // borrarTarea.appendChild(borrarTarea);

    }
}