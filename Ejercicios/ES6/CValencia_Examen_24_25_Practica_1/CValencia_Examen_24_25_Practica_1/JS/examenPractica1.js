document.addEventListener("DOMContentLoaded", inicio);

var contador = 1;
var contador1 = 0;

function cargarApi() {

    var tabla = document.getElementById("tabla1");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(datos => {

            let cadena = '<tr><th>Nombre</th><th>Usuario</th><th>Ciudad</th></tr>';

            for (let usuarios of datos) {
                cadena += `<tr><td><a href='#' id=` + contador + `>${usuarios.name}</a></td><td><p id=0` + contador + `>${usuarios.username}</p></td><td><p id=00` + contador + `>${usuarios.address.city}</p></td></tr>`;

                contador++;
            }

            tabla.innerHTML = cadena;

            for (let index = 1; index < contador; index++) {
                document.getElementById(index).addEventListener("click", formularioUsuario);
            }
        });

}

function anyadirPersona() {

    let cadena1 = "per";

    if (contador <= 15) {
        var tabla = document.getElementById("tabla1");

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(datos => {

                let cadena = `<tr id=` + contador + `><td><a href='#' id= ` + cadena1 + contador + `>${datos[contador1].name}</a></td><td><p id=0` + contador + `>${datos[contador1].username}</p></td><td><p id=00` + contador + `>${datos[contador1].address.city}</p></td></tr>`;
                tabla.innerHTML += cadena;

                document.getElementById(contador).addEventListener("click", formularioUsuario);
                contador++;
                contador1++;
            });
    } else {
        alert("No se pueden añadir mas de 15!");
    }

}

function restarApi() {

    miId = contador - 1;

    if (miId > 10) {
        var persona = document.getElementById(miId);
        persona.remove();
    } else {
        alert("Deja de tocarme!");
    }

    contador--;

}

function inicio() {

    cargarApi();

    document.getElementById("anyadir").addEventListener("click", anyadirPersona);
    document.getElementById("quitar").addEventListener("click", restarApi);

}

function formularioUsuario() {

    var form = document.getElementById("formulario");
    form.hidden = false;

    let id = this.id;



    var aeo = document.getElementById("0" + id);
    var aeo1 = document.getElementById("00" + id);

    document.getElementById("nombreUsu").textContent = this.textContent;
    document.getElementById("usus").textContent += aeo.textContent;
    document.getElementById("contrasenya").placeholder = aeo1.textContent;

    document.getElementById("login").addEventListener("click", function () {
        cambiarPestanya(id);
    });

}

function cambiarPestanya(id) {

    var idCiudad = document.getElementById("00" + id);
    
    if (document.getElementById("contrasenya").value == idCiudad.textContent || document.getElementById("leNumero") >= 3 || document.getElementById("leNumero") <= 5) {
        var tablita = document.getElementById("mostrarTabla");
        tablita.style.display = "none";
        var formulita = document.getElementById("formularioUsuario");
        formulita.style.display = "none";

        var divFinal = document.getElementById("muestrate");
        divFinal.hidden = false;

        var h1Final = document.getElementById("nombreUsuarioLog");
        h1Final.textContent = document.getElementById(id).textContent;


    } else {
        alert("Contraseña incorrecta");
    }

}