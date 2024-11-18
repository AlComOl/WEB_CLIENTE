// Validar que se ingrese un número de 3 dígitos enteros, el carácter punto y 2 dígitos decimales. 

    

let numero=prompt('Ingrese un número');
let patron = /[0-9]{3}/;
if(patron.test(numero))
    alert('el número tiene 3 digitos')
else
    alert('No tiene 3 digitos');

