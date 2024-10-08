window.onload = function () {
    document.getElementById("select1").addEventListener("change",getPrecio)
};

function getPrecio() {
   // Toma el valor de la opción seleccionada en un menú desplegable (<select>).
    let seleccion = document.getElementById('select1');
   // Coloca ese valor en un campo de texto que tiene el ID text3. 
    document.getElementById('text3').value = seleccion.options[seleccion.selectedIndex].value;

}