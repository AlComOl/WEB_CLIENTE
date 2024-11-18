import { Corredor } from "../modulos/modulo.js";

//Variables
var arrayCampeones = [];
var nombres = ["Alfonso", "Luis", "Julio", "Rafa", "Ivan", "Maria", "Elena", "Clara", "Pepe", "Javi", "Ana", "David", "Paula", "Laura", "Isabel", "Gemma", "Irene", "Julian"];
var categorias = ["Masculino", "Femenino", "Veterano"];
var tipos = ["10K", "Maraton"];

var primeraCarga = true;
var contImagen = 1;



//Funcion para cargar la pagina
window.onload = function () {
    rellenarArrayCampeones();
    document.getElementById("clasif").style.display = "none";
    mostrarGaleria();
    document.getElementById("enlaceGaleria").addEventListener("click", mostrarGaleria);
    document.getElementById("enlaceClasificacion").addEventListener("click", mostrarClasificacion);
    document.getElementById("siguiente").addEventListener("click", siguienteImagen);
    document.getElementById("anterior").addEventListener("click", anteriorImagen);

}

//Funcion para rellenar/crear los corredores y meterlos en el arrayCampeones, con el criterio de los "if"
let rellenarArrayCampeones = () => {
    let posicionTipo = 0;
    let posicionCategoria = 0;
    for (let i = 0; i < 18; i++) {
        let corredor = new Corredor(nombres[i], tipos[posicionTipo], categorias[posicionCategoria]);
        arrayCampeones[i] = corredor;
        posicionCategoria++;

        if (posicionTipo == 0) {
            posicionTipo = 1;
        } else {
            posicionTipo = 0;
        }

        if (posicionCategoria == 3) {
            posicionCategoria = 0;
        }
    }
}

//Funcion para mostrar el elemento con id="galeria". Llamando a mostrarImagenes()
let mostrarGaleria = () => {
    document.getElementById("clasif").style.display = "none";
    document.getElementById("galeria").style.display = "block";
    mostrarImagenes();
}

//Funcion para mostrar el elemento con id="clasf" (clasificacion)
let mostrarClasificacion = () => {
    document.getElementById("clasif").style.display = "block";
    document.getElementById("galeria").style.display = "none";
}

//Funcion para mostrar las imagenes. Con la primeraCarga, creo un elemento <img>, le asigno atributos (id="" y src="") y lo añado al elemento div con un id=imagenes
//<img id="imagen" src="../imagenes/img_1.jpj">
let mostrarImagenes = () => {
    if (primeraCarga === true) {
        let imagen = document.createElement("img");
        imagen.setAttribute("id", "imagen");
        imagen.setAttribute("src", "../imagenes/img_" + contImagen + ".jpg");
        document.getElementById("imagenes").appendChild(imagen);
        primeraCarga = false;
    }
}

//Funcion para cambiar/pasar las imagenes avanzando (siguiente). Cambiando el atributo src de la imagen con id="imagen", creada en la funcion anterior, mostrarImagenes()
let siguienteImagen = () => {
    contImagen++;
    if (contImagen == 4) {
        contImagen = 1;
    }
    let imagen = document.getElementById("imagen");
    imagen.setAttribute("src", "../imagenes/img_" + contImagen + ".jpg");
}

//Funcion para cambiar/pasar las imagenes retrocediendo (anterior)
let anteriorImagen = () => {
    contImagen--;
    if (contImagen == 0) {
        contImagen = 3;
    }
    let imagen = document.getElementById("imagen");
    imagen.setAttribute("src", "../imagenes/img_" + contImagen + ".jpg");
}

