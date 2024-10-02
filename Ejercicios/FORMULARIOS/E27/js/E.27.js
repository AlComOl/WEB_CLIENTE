window.onload = function () {
    console.log("Hola");
};

function cambiarColor() {
    // Obtén el select por su ID
    let seleccion = document.getElementById('select1');
    // Actualiza los campos de texto con la selección actual
    document.getElementById('text1').value = seleccion.selectedIndex; // Índice de la opción seleccionada
    document.getElementById('text2').value = seleccion.options[seleccion.selectedIndex].text; // Texto de la opción
    document.getElementById('text3').value = seleccion.options[seleccion.selectedIndex].value; // Valor de la opción
    document.getElementById('text4').value = "Información adicional"; // Valor en el nuevo campo
}