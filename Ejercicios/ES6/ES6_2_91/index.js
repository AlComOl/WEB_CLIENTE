// Confeccionar una función que muestre la tabla de multiplicar. Si no llegan datos 
//muestra por defecto la tabla del 2. Por defecto se muestran 10 términos de la tabla 
//salvo que se indique un valor en contrario.
// La función debe tener 2 parámetros y ambos deben tener un valor por defecto.


// function tablaMultiplicar( tabla, tipo='<p>'){
// let lista=tipo;
//     for(let i=0;i<tabla.length;i++){

//        lista+= `<li>${tabla}x${i}=${tabla[i]*i}</li>`;
//     }
//     return lista;
// }
// const tabla=[2];

// document.write(tablaMultiplicar(tabla));
//NO VA 

function tablaMultiplicar(tabla, tipo = '<ul>') {
    let lista = tipo;  // Inicio la lista con <ul>
    for (let i = 0; i <= 10; i++) {  // Multiplica hasta 10
        lista += `<li>${tabla[0]} x ${i} = ${tabla[0] * i}</li>`; // Acceder al primer valor del array
    }
    lista += '</ul>';  // Cierro la lista una vez terminado el bucle
    return lista;
}

const tabla = [2];  // El array con un solo valor


