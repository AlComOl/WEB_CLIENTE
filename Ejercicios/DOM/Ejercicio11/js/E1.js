// A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:





window.onload = function () {

    //     Número de enlaces de la página    
    var info = document.getElementById("informacion");//Selecciona el elemento con id="informacion" y lo guarda en la variable "info" 

    var enlaces = document.getElementsByTagName("a");//Obtiene todos los elementos <a> del docuemnto

    info.innerHTML = "Numero de enlaces" + enlaces.length;//Muetra el numero total de enlaces dentro del documeto 

    //     Dirección a la que enlaza el penúltimo enlace

    var enlace = "el penultimo enlace es :" + enlaces[enlaces.length - 1].href;

    info.innerHTML = info.innerHTML + "<br/>" + enlace;


    //     Numero de enlaces que enlazan a http://prueba

    let n = 0;

    for (let index = 0; index < enlaces.length; index++) {

        if (enlaces[index].href == "http://prueba/") {
            n++;
        }

    }

    info.innerHTML = info.innerHTML + "<br>" + "Hay " + n + " que enlazan con http://prueba/";


    //     Número de enlaces del tercer párrafo

    // var ultimoparrafo=document.getElementById("p");
    // let x=ultimoparrafo[2].getElementsByTagName("a");
    let parrafos = document.getElementsByTagName("p");
    let g = parrafos[2].getElementsByTagName("a");
    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + g.length;



}
