// Validar el ingreso de una hora con el formato hh:mm:ss o hh:mm 

let hora=prompt('Ingresa la hora');

let patron = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;

if(patron.test(hora))
    alert('correcto');
else
    alert('Incorrecto');