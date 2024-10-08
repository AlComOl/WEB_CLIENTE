window.onload=function(){

let boton=document.getElementById('mostrar');// Asigna el elemento HTML con ID 'mostrar' a la variable boton
let pregunta1=document.getElementById('asir');
let pregunta2=document.getElementById('daw');
let pregunta3=document.getElementById('dam');

boton.addEventListener('click',evaluarRespuestas);//Al hacer clic en el elemento referenciado por la variable boton (ID 'mostrar'), se ejecutará la función evaluarRespuestas.
function evaluarRespuestas(){
    let correcta=0;
    let incorrecta=0;
  

//selectIndex coge el indice 0,1,2 como un array
//esto cogeria el valor de value options[pregunta1.selectedIndex]
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

      document.getElementById('c').value=correcta; //actualiza el valor de la el id c que es un input poniendo el el valor de la variable correcta
      document.getElementById('i').value=incorrecta;
}
}


// 2. pregunta1.options

//     ¿Qué es?: options es una propiedad del elemento <select> que devuelve una colección (array) de todas las opciones (<option>) dentro del <select>.
//     Contexto: Esto te permite acceder a todas las opciones disponibles en el menú desplegable.

// 3. pregunta1.selectedIndex

//     ¿Qué es?: selectedIndex es una propiedad que devuelve el índice (posición) de la opción actualmente seleccionada en el <select>.
//     Contexto: Si, por ejemplo, la primera opción es la seleccionada, selectedIndex devolvería 0, si la segunda es la seleccionada, devolvería 1, y así sucesivamente.

// 4. pregunta1.options[pregunta1.selectedIndex]

//     ¿Qué hace?:
//         Esta expresión accede a la opción que está actualmente seleccionada en el <select>.
//         pregunta1.options proporciona la colección de opciones, y al utilizar el índice pregunta1.selectedIndex, seleccionas la opción correspondiente de esa colección.
//     Resultado: El resultado será un objeto de tipo <option>, que incluye propiedades como value, text, y otras que describen esa opción específica.