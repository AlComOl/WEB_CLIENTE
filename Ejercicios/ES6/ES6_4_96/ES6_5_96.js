// Confeccionar una clase que permita administrar el nombre y la edad de
//  una persona. Mostrar los datos cargados. Imprimir un mensaje si es 
// mayor de edad (edad>=18) 

window.onload = function() {

let nombre=(prompt("Intorduce nombre"));
let edad=(prompt("Intorduce la edad"));

class Persona{//creamos clase
    constructor() {
        this.nombre= nombre;
        this.edad= edad;
    }

    insertar(nombre,edad){//funcion
        this.nombre.push(nombre);//introduce el nombre
        this.edad.push(edad); //introduce la edad 
    }

    mayorEdad(edad){
        return this.edad>=18 ?`${this.nombre} es mayor de edad` : this.edad<18 `${this.nombre} NO es mayor de edad`;
      
      
    }

    mostrarDatos(){
      return  `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }



}

let persona1 = new Persona(nombre, edad);


let infoDiv = document.getElementById("info");
infoDiv.innerHTML = `
<p>${persona1.mostrarDatos()}</p>
<p>${persona1.mayorEdad()}</p>
`;
// Plantear una clase ListaOrdenada. En el constructor definir un atributo de tipo vector vacío.
// Luego definir dos métodos, uno que permita agregar elementos a la lista y otro que lo muestre en la página. 

}