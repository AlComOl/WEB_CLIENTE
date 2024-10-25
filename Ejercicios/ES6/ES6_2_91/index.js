
        function generarLista(vec, tipo = '<ul>') {
            let lista = tipo;
            for (let x = 0; x < vec.length; x++)
                lista += `<li>${vec[x]}</li>`;
            if (tipo == '<ul>')
                lista += '</ul>';
            else
                lista += '</ol>'
            return lista;
        }

        const opciones1 = ['opción 1', 'opción 2', 'opción 3', 'opción 4', 'opción 5'];
        document.write(generarLista(opciones1));

        const opciones2 = ['opción a', 'opción b', 'opción c', 'opción d'];
        document.write(generarLista(opciones2, '<ol>'));


{/* function tablaMultiplicar(tabla, tipo = '<ul>') {
    let lista = tipo;  // Inicio la lista con <ul>
    for (let i = 0; i <= 10; i++) {  // Multiplica hasta 10
        lista += `<li>${tabla[0]} x ${i} = ${tabla[0] * i}</li>`; // Acceder al primer valor del array
    }
    lista += '</ul>';  // Cierro la lista una vez terminado el bucle
    return lista;
}

const tabla = [2];  // El array con un solo valor

 */}
