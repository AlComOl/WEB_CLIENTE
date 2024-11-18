//Clase Corredor
class Corredor{
    //Constructor
    constructor(nombre, tipo, categoria){
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
    }

    //Getters
    get getNombre(){
        return this.nombre;
    }

    get getTipo(){
        return this.tipo;
    }

    get getCategoria(){
        return this.categoria;
    }
}

export {Corredor};