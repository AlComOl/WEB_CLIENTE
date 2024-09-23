
window.onload = function() {
let etiquetaH2=document.getElementsByTagName("h2");//coge los h2 y todo lo que cuelga


for(let i=0;i<etiquetaH2.length;i++){//itera dentro del los h2

    let h2texto= etiquetaH2[i].textContent;//extrae y mete los h2 e.n el parrafo
   
    let nuevoParrafo = document.createElement("p");//creo un nuevo parrafo de texto p

    var contenido = document.createTextNode(h2texto);//crea un nodo de tipo texto


    nuevoParrafo.appendChild(contenido);

    document.body.appendChild(nuevoParrafo);


}



}
