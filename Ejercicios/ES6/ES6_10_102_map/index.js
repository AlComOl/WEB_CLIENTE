
window.onload=function(){


    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(response=>response.json())
    .then(datos=>{
        for (const provincias of datos.provincias)
            document.write(`${provincias.id}  ${provincias.nombre} <br>`)
            
        });


  

}