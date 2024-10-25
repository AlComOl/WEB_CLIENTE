class Persona{
    constructor(nombre,edad){
    this._nombre=nombre;
    this._edad=edad;

    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    set nombre(n){
        
    

        this._nombre=n;
    
    }

    set edad(e){
        if(e<0){
            document.write("No se pueden introducir numeros menores de 0");
        }else{
            this._edad=e;
        }   
    }


    imprimir(){
        document.write(`El nombre establecido es ${persona1.nombre} y la edad ${persona1.edad}`);
    }




}

let persona1= new Persona();
persona1._nombre="Alvaro"

persona1.edad=-1;
persona1.nombre="Alvaro";
persona1.imprimir();


