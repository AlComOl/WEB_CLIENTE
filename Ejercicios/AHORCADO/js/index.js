//Variables
var palabra = "";
var divActual;
var botonLetra;
var vidas = 5;
var vidaAux;
// var letra = "";
var guiones = "";

const palabras = ["MANDARINA", "NARANJA", "SANDIA", "ALBARICOQUE", "MANZANA", "AGUACATE"];
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
   
}
//mete el container dentro de la pantalla de inicio y lo elimina
function pasaPantallaInicio(){

    var pInicio= document.getElementById('container');

    pInicio.parentNode.removeChild(pInicio);

    var pJuego=document.getElementById("juego");

    pJuego.style.display='block'
}
//Funcion para elegir aleatoriamente una palabra de las predefinidas anteriormente
function elegirPalabra(){
    palabra = palabras[(Math.floor(Math.random() * (palabras.length-0) + 0))];
    return palabra;
}

function mostrarGuiones(){
   
    guiones = "";
    for (let i=0; i<palabra.length; i++){
        guiones += "_ ";
    }
    document.getElementById("guiones").innerHTML = guiones;// Se introduce en el div con id="guiones" tantos guiones como tenga la palabra aleatoria elegida
}










































































}