//Variables
var palabra = "";
var divActual;
var botonLetra;
var vidas="❤️❤️❤️❤️❤️"
var letrasRepes = [];
var guiones = [];

const palabras = ["ANA", "GEMA", "JOSE", "JULIO", "EMILIANO", "AMPARO"];
const lineaTeclado1 = ['Q','W','E','R','T','Y','U','I','O','P'];
const lineaTeclado2 = ['A','S','D','F','G','H','J','K','L','Ñ'];
const lineaTeclado3 = ['Z','X','C','V','B','N','M'];

//Al cargar la pagina, cuando ocurra el evento "click" sobre el elemento con id="empezarJuego" se ejecuta la función "inicio()"
window.onload = function(){
    document.getElementById("empezarJuego").addEventListener("click", inicio);
   


function inicio(){
    pasaPantallaInicio();
    elegirPalabra();
    mostrarGuiones();
    mostrarTeclado();
  
    

    
   
}
//Esta funcion quita la pantalla de inicio y muestra la pantalla para jugar
function pasaPantallaInicio(){

    var pInicio= document.getElementById('container');//declara una variable introducciendo los elemetos(container) en ella

    pInicio.parentNode.removeChild(pInicio);//borra los elementos de dentro de la variable

    var pJuego=document.getElementById("juego");

    pJuego.style.display='block';//muestra la pantalla, cambia el estado de display

    let intentos=document.getElementById("aciertos");//añadimos las vidas al juego
    intentos.innerText=vidas;



}
//Funcion para elegir aleatoriamente una palabra de las predefinidas anteriormente
function elegirPalabra(){
    palabra = palabras[(Math.floor(Math.random() * (palabras.length-0) + 0))];
    return palabra;
}
//Función que muestra las letras de cada palabra
//he tenido que modificar esta funcion porque tenia que tratar guines como un array 
//para ver los aciertos
// function mostrarGuiones(){
   
//     guiones = "";
//     for (let i=0; i<palabra.length; i++){
//         guiones += "_ ";
//     }
//     document.getElementById("guiones").innerHTML = guiones;// Se introduce en el div con id="guiones" tantos guiones como tenga la palabra aleatoria elegida
// }

// Muestra los guiones
function mostrarGuiones() {
    guiones = Array(palabra.length).fill("_"); // Inicializa un array de guiones
    document.getElementById("guiones").innerText = guiones.join(" "); // Se introduce en el div(join convierte el array en una cadena de texto)

    //maneja las vidas

    
}

//Funcion para crear botones de cada letra del teclado
function llenarTeclado(teclado){
    for (let i=0; i<teclado.length;i++){
        botonLetra = document.createElement("button");// Creo un elemento/etiqueta "button"
        botonLetra.innerText = teclado[i];// Introduzco contenido en el "button"
        botonLetra.id = teclado[i];// Creo al "button" un atributo "id" asignandole un valor
        botonLetra.setAttribute("class","btn btn-outline-warning");// Creo al "button" un atributo "class" asignandole un valor
        divActual = document.getElementById("letrasTeclado");
        divActual.appendChild(botonLetra);// añade el "button", en el elemento div con id="letras"
    

        

        //Le añadimos Eventos a los botones
        // botonLetra.addEventListener("click", comprobarLetra);
        // botonLetra.addEventListener("click", mostrarVidas);
    }
      
}
//Funcion para mostrar el teclado en la pantalla
function mostrarTeclado(){
    llenarTeclado(lineaTeclado1);
    document.getElementById("letrasTeclado").appendChild(document.createElement("br"));// Salto de linea, despues de la 1ª linea del teclado
    llenarTeclado(lineaTeclado2);
    document.getElementById("letrasTeclado").appendChild(document.createElement("br"));
    llenarTeclado(lineaTeclado3);
}

 document.addEventListener('keydown',comprobarLetra);//ejecuta la funcion si presionamos la tecla del teclado
 document.getElementById('letrasTeclado').addEventListener('click',comprobarLetra);//ejecuta la funcion si hacemos click en el teclado
//hay que asignar el evento a un evento en concreto





 //funcion comprobar si la letra esta en la palabra elegida
 function comprobarLetra(evento){
    let valor;
    let encontrado=false;


    var letra= evento.key;
    if(evento.type==="click"){
      
       valor=evento.target.id//como el id es igual que el valor del boton(la letra), lo guardo en la variable
       comprobarLetrasRepes(valor);//covalormprobacion
       document.getElementById(valor).style.backgroundColor="blue";//pintar la letra que he selecionado
     
       
    }else if(evento.type==="keydown"){
       
        valor=evento.key.toUpperCase()//aqui capturamos el valor del la tecla
        comprobarLetrasRepes(valor);
        document.getElementById(valor).style.backgroundColor="red";
        
        
    } 
      
       
        let p=document.getElementById('guiones');//Asigno a la variable el elemento  id=guiones.
              for (let i = 0; i < palabra.length; i++) {
             
                if(palabra[i].toUpperCase()===valor.toUpperCase()){//comprueba 
                 guiones[i]=valor.toUpperCase();
                 encontrado=true;

                }
              
              }
              if(encontrado==false){//si no encuelo encuentra

                vidasFallos(); //maneja dentro  de la funcion el fallo 
              }
              p.innerText = guiones.join(" ");//lo concierte en cadena

              if (encontrado==true) {
              
                verificarGanador();
            }

              
              
}


function verificarGanador() {
    // Unir guiones en una cadena
    const palabraGanadora = guiones.join("");
    
    // Comparar con la palabra original
    if (palabraGanadora === palabra) {
        alert("¡Has ganado!");
        window.location.href = "index.html";
        // var fin=document.getElementById("juego");
        // fin.parentNode.style.display="none"; 

       

        

        
    }
}




//Funcion para manejar las vidas y los fallos

function vidasFallos(){
    //maneja los fallos
       var fallos=0;
       let nodoFallo=document.createTextNode("💩");//agrego el nodo de texto en la variable
       document.getElementById("fallos").appendChild(nodoFallo);//cojo el id, y meto el texto con appendchild
       
       
       var vidaAux="";//creo la variable vacia

       for (let i = 0; i < vidas.length-2; i++) {//cada vez que itero quito un corazon
        vidaAux +=vidas[i];
       }

       vidas=vidaAux;

        let aciertos=document.getElementById("aciertos");
        
        aciertos.innerText=vidas; //el resultado a la variable con innertext

         if(vidas==""){
        
           let gameOver=document.getElementById("reiniciar");
           gameOver.style.display="block";
//hay que mejorar porque la ultima letra no se be 
           dejarDeEscuchar();


         }   

         
    

}
// Función para dejar de escuchar
    function dejarDeEscuchar() {
        document.removeEventListener("click", manejarClick);
        document.removeEventListener("keydown", manejarTeclado);
}






//aviso de repeticion de letra
        function comprobarLetrasRepes(valor){
            

            for (let i = 0; i<letrasRepes.length; i++) {
              if (letrasRepes[i]===valor) {
                alert("YA HAS INTRODUCIDO LA LETRA");
              }
               
            }
            letrasRepes.push(valor);

         }






    

 


 








































































}