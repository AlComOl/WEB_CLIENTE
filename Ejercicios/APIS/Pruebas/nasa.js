// fetch("datos.php")
//             .then(response=>response.json())
//             .then(datos=>console.log(datos));

fetch("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY")
.then(response => response.json())
.then(datos => {
//   for (let objeto of datos)
//  e   document.write(`${objeto.close_approach_data}<br>`);

console.log(datos);
});