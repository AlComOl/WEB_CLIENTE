// Elevar al cuadrado todos los elementos de un array de números

// let numeros=[2,4,6,8,10];

// let cuadradoNumeros= numeros.map( (q) => {
//    return  q*q;
// });

// Alternativamente fucnion flecha

// let numeros = [1, 2, 3, 4];
// let numerosCuadrado = numeros.map(x => x * x);
// console.log(numerosCuadrado); // [1, 4, 9, 16]

// Mostrar numeros en pantalla del map

// document.getElementById('cuadrado')=;

// cuadradoNumeros.forEach(value => {
//     document.write(value+", ");
// });

// console.log(cuadradoNumeros[1]);

// Suponiendo que se tiene un array de objetos que representan usuarios con diferentes propiedades,
// y se desea extraer solamente su nombre y apellido en un nuevo

let usuarios = [
    { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30 },
    { id: 2, nombre: "María", apellido: "García", edad: 25 },
    { id: 3, nombre: "Laura", apellido: "López", edad: 28 }
  ];

  let nombresCompletos=usuarios.map( (usuario) => {
    return `${usuario.nombre} ${usuario.apellido}`
  });

  document.write(nombresCompletos);
  

