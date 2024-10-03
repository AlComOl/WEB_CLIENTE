window.onload = function () {
    document.getElementById("select1").addEventListener("change",getPrecio)
};

function getPrecio() {
    // Obtén el select por su ID
    let seleccion = document.getElementById('select1');
    // Actualiza los campos de texto con la selección actual  
    document.getElementById('text3').value = seleccion.options[seleccion.selectedIndex].value; // Valor de la opción

}