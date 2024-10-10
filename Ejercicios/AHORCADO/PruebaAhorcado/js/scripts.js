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
}

//Funcion que recoge todas las funciones que se realizan al ejecutar la función inicio()
function inicio(){
    elegirPalabra();
    mostrarGuiones();
    mostrarTeclado();
    mostrarVidas();
}

//Funcion para elegir aleatoriamente una palabra de las predefinidas anteriormente
function elegirPalabra(){
    palabra = palabras[(Math.floor(Math.random() * (palabras.length-0) + 0))];
    return palabra;
}

//Funcion para mostrar tantos guiones como letras tenga la palabra elegida
function mostrarGuiones(){
    document.getElementById("empezarJuego").style.display = "none"; //Se oculta el botón de "empezar juego"
    guiones = "";
    for (let i=0; i<palabra.length; i++){
        guiones += "_ ";
    }
    document.getElementById("guiones").innerHTML = guiones;// Se introduce en el div con id="guiones" tantos guiones como tenga la palabra aleatoria elegida
}

//Funcion para crear botones de cada letra del teclado
function llenarTeclado(teclado){
    for (let i=0; i<teclado.length;i++){
        botonLetra = document.createElement("button");// Creo un elemento/etiqueta "button"
        botonLetra.innerText = teclado[i];// Introduzco contenido en el "button"
        botonLetra.id = teclado[i];// Creo al "button" un atributo "id" asignandole un valor
        botonLetra.setAttribute("class","btn btn-outline-warning");// Creo al "button" un atributo "class" asignandole un valor
        divActual = document.getElementById("letras");
        divActual.appendChild(botonLetra);// añade el "button", en el elemento div con id="letras"
        //Le añadimos Eventos a los botones
        botonLetra.addEventListener("click", comprobarLetra);
        botonLetra.addEventListener("click", mostrarVidas);
    }
}

//Funcion para mostrar el teclado en la pantalla
function mostrarTeclado(){
    llenarTeclado(lineaTeclado1);
    document.getElementById("letras").appendChild(document.createElement("br"));// Salto de linea, despues de la 1ª linea del teclado
    llenarTeclado(lineaTeclado2);
    document.getElementById("letras").appendChild(document.createElement("br"));
    llenarTeclado(lineaTeclado3);
}

//Funcion para comprobar que la letra elegida se encuentra dentro de la palabra que buscamos
function comprobarLetra(){
    let aux = "";//variable auxiliar donde se va guardando el intento de busqueda de la palabra aleatoria
    vidaAux = vidas;    //Igualamos aquí una variable auxiliar para poder actualizar después las vidas

    for (let i=0; i<palabra.length; i++){ //Bucle for para comprobar por cada posición de la palabra si se encuentra la letra clicada
        // Si la letra se encuentra en alguna de las posiciones de la palabra aleatoria, se muestra la letra
        if (this.id == palabra[i]){
            aux += this.id + " ";
        //Si no, no añade ninguna letra. Se pone " *2 " para que en caso de haber una letra acertada no la sobreescrriba, 
        //y complete siempre las que son correctas.
        //Con la funcion mostrarGuiones(), las posiciones pares corresponden a guiones y las impares a un espacio    
        } else {
            aux = aux + guiones[i*2] + " ";
        }
    }
    //Asigno en el array "guiones" el intento de busqueda
    guiones = aux;
    // Se introduce en el div con id="guiones" el array "guiones" actualizado
    document.getElementById("guiones").innerHTML = guiones;

    //Si no hay guiones, entonces ganamos la partida
    if (!guiones.includes("_")){
        ganarPartida();
        setTimeout(recargarPagina,2500);// Espera 2,5 seg para ejecutar la funcion recargarpagina()
    }

    //Si la palabra no incluye la letra elegida, entonces restamos una vida
    if (!palabra.includes(this.id)){
        vidas--;
        setTimeout(fallar,1);// Espera 1 milesima de seg para ejecutar la funcion fallar()
        setTimeout(colorOriginal,1000);
    }

    //Si nos quedamos sin vidas, entonces perdemos la partida
    if (vidas==0){
        perderPartida();
        setTimeout(recargarPagina,2500);
    }
}

//Funcion para mostrar el mensaje que hemos ganado
function ganarPartida(){
    // Oculto los div que no me interesan y muestro el div con id="ganarPerder"
    document.getElementById("guiones").style.display = "none";
    document.getElementById("letras").style.display = "none";
    document.getElementById("vidas").style.display = "none";
    document.getElementById("ganarPerder").style.display = "block";
    document.getElementById("perder").style.display = "none";
    //Al final del div con id="ganarPerder" se crea un parrafo con el texto "¡HAS GANADO!"
    var texto = "¡HAS GANADO!";
    var parrafo = document.createElement("p");
    parrafo.innerText = texto;
    document.getElementById("ganarPerder").appendChild(parrafo);
}

//Funcion para mostrar el mensaje que hemos perdido
function perderPartida(){
    document.getElementById("guiones").style.display = "none";
    document.getElementById("letras").style.display = "none";
    document.getElementById("vidas").style.display = "none";
    document.getElementById("ganarPerder").style.display = "block";
    document.getElementById("ganar").style.display = "none";
    var texto = "¡HAS PERDIDO!";
    var parrafo = document.createElement("p");
    parrafo.innerText = texto;
    document.getElementById("ganarPerder").appendChild(parrafo);
}

//Funcion para mostrar las vidas que nos quedan. Si voy acertando esta funcion no se ejecuta
function mostrarVidas(){
    if (vidaAux != vidas){
        // Dentro del div con id="vidas"
        // Se van creando un parrafo "p" con un id="vida4", id="vida3", id="vida2", id="vida1"
        // y con class="alert alert-warning" de bootstrap5 (Components --> Alerts)
        let parrafo = document.createElement("p");
        parrafo.id = "vida"+vidas;
        parrafo.className = "alert alert-warning";
        parrafo.innerText = "VIDAS: " + vidas;
        document.getElementById("vidas").appendChild(parrafo);
        actualizarVida();
    }
}

//Funcion para actualizar las vidas con cada intento. Si voy acertando esta funccion no se ejecuta
function actualizarVida(){
    divActual = document.getElementById("vidas");
    if (vidas<5){
        divActual.removeChild(document.getElementById("vida" + (vidas+1)));
    }
}

//Funcion para reiniciar/recargar el juego. Utilizada despues de ganar o perder en el juego
function recargarPagina(){
    location.reload();
}

//Funcion para que el elemento vidas se ponga rojo al fallar
function fallar(){
    document.getElementById("vida"+vidas).style.backgroundColor = "red";
}

//Funcion para que las vidas vuelvan al color original
function colorOriginal(){
    document.getElementById("vida"+vidas).style.backgroundColor = "gold";
}








/****************************************************************************************************** */
/*DE AQUI HACIA ABAJO, NO TOCAR. ES EL SCRIPT QUE VENIA CON LA PLANTILLA DESCARGADA DE START BOOTSTRAP*/
/****************************************************************************************************** */








/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
