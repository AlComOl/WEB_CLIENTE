//Variables
var palabra = "";
var divActual;
var botonLetra;
var vidas = 5;

var vidas="❤️❤️❤️❤️❤️"
// var letra = "";
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

 document.addEventListener('keypress',comprobarLetra);//ejecuta la funcion si presionamos la tecla del teclado
 document.getElementById('letrasTeclado').addEventListener('click',comprobarLetra);//ejecuta la funcion si hacemos click en el teclado
//hay que asignar el evento a un evento en concreto





 //funcion comprobar si la letra esta en la palabra elegida
 function comprobarLetra(evento){
    let valor;
    let encontrado=false;
    var letra= evento.key;
    if(evento.type==="click"){

       valor=evento.target.id//como el id es igual que el valor del boton(la letra), lo guardo en la variable
       document.getElementById(valor).style.backgroundColor="blue";//pintar la letra que he selecionado
    }else if(evento.type==="keypress"){

        valor=evento.key//aqui capturamos el valor del la tecla
        // document.getElementById(valor).style.backgroundColor="blue";Aqui en el teclado no va
    } 
      
       
        let p=document.getElementById('guiones');//Asigno a la variable el elemento  id=guiones.
              for (let i = 0; i < palabra.length; i++) {
             
                if(palabra[i].toUpperCase()===valor.toUpperCase()){
                 guiones[i]=valor.toUpperCase();
                 encontrado=true;

                }
              
              }
              if(encontrado==false){//si no encuentra el numero inserta un fallo
//creariamos una funciono para manejar los fallos y las vidas
                vidasFallos();
              }
              p.innerText = guiones.join(" ");

              
              
}

//Funcion para manejar las vidas y los fallos

function vidasFallos(){
    //maneja los fallos

       let nodoFallo=document.createTextNode("💩");//
       document.getElementById("fallos").appendChild(nodoFallo);
       
       var vidaAux="";

       for (let i = 0; i < vidas.length-2; i++) {
        vidaAux +=vidas[i];
       }

       vidas=vidaAux;
    

        let aciertos=document.getElementById("aciertos");

        
        aciertos.innerText=vidas;



        
       
    

}
    

 


 








































































}