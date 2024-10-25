// Confeccionar una función que muestre la tabla de multiplicar. Si no llegan datos muestra por defecto la tabla del 2. Por defecto se muestran 10 términos de la tabla salvo que se indique un valor en contrario.
// La función debe tener 2 parámetros y ambos deben tener un valor por defecto.
    

window.onload=function(){
 function tablaMultiplicar(tabla, tipo = '<p>') {
    let lista = tipo;  // Inicio la lista con <ul>
    for (let i = 0; i <= 10; i++) {  // Multiplica hasta 10
        lista += `<p>${tabla[0]} x ${i} = ${tabla[0] * i}</p>`; // Acceder al primer valor del array
    }
    lista += '</p>';  // Cierro la lista una vez terminado el bucle
    return lista;
}

const tabla = [2];  // El array con un solo valor


document.write(tablaMultiplicar(tabla));

}
