window.onload = function() {
    let calculadora1;
    let cont = 0;
    let num1;
    let num2;

    class Calculadora {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
            this.resultado = null;
        }

        suma() {
            this.resultado = this.num1 + this.num2;
            this.imprimir();
        }

        resta() {
            this.resultado = this.num1 - this.num2;
            this.imprimir();
        }

        multiplicar() {
            this.resultado = this.num1 * this.num2;
            this.imprimir();
        }

        dividir() {
            if (this.num2 !== 0) {
                this.resultado = this.num1 / this.num2;
            } else {
                this.resultado = "Error: División por cero";
            }
            this.imprimir();
        }

        imprimir() {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.value = this.resultado; // Usar value para el input
        }
    }

    class CalculadoraCientifica extends Calculadora {
        cuadrado() {
            this.resultado = this.num1 ** 2;
            this.imprimir();
        }

        raiz() {
            this.resultado = Math.sqrt(this.num1);
            this.imprimir();
        }
    }

    function introducirNumeros() {
        const num = document.getElementById("numero");
        if (cont === 0) {
            num1 = parseFloat(num.value);
            cont++;
            num.value = "";
        } else if (cont === 1) {
            num2 = parseFloat(num.value);
            calculadora1 = new (num1, num2);
            cont++;
            num.value = "";
        }
    }

    // funcion flecha coge el id si el evento hace click introduce numeros y suma
    document.getElementById("suCalculadoram").addEventListener("click", () => {
        introducirNumeros();
        if (cont === 2) {
            calculadora1.suma();
            cont = 0; 
        }
    });

    document.getElementById("res").addEventListener("click", () => {
        introducirNumeros();
        if (cont === 2) {
            calculadora1.resta();
            cont = 0; 
        }
    });

    document.getElementById("mult").addEventListener("click", () => {
        introducirNumeros();
        if (cont === 2) {
            calculadora1.multiplicar();
            cont = 0; //reinicia la funcoin contador no trabaja bien
        }
    });

    document.getElementById("div").addEventListener("click", () => {
        introducirNumeros();
        if (cont === 2) {
            calculadora1.dividir();
            cont = 0; 
        }
    });

    document.getElementById("cuadrado").addEventListener("click", () => {
        if (cont === 1) {
            const calculadoraCientifica = new CalculadoraCientifica(num1, 0); // Usamos num2 como 0 para cumplir con el constructor
            calculadoraCientifica.cuadrado();
            cont = 0; 
        }
    });

    document.getElementById("raiz").addEventListener("click", () => {
        if (cont === 1) {
            const calculadoraCientifica = new CalculadoraCientifica(num1, 0); // Usamos num2 como 0 para cumplir con el constructor
            calculadoraCientifica.raiz();
            cont = 0; 
        }
    });
}
