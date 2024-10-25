// Almacenar en un Map los nombres de paises como clave y la cantidad de habitantes como valores. 
// Mostrar en una lista HTML que se debe crear en forma dinámica inmediatamente luego que se carga la página.
window.onload=function(){


const paises = new Map();
paises.set("España", "46000000");
paises.set("Alemania", "30000000");
paises.set("Francia", "60000000");
}


let cadena="";
for (const[ pais, poblacion ]of paises) {
    cadena+=`<li>${pais}:${poblacion}</li>`;
}

document.getElementById("paises").innerHTML = cadena;


  

}