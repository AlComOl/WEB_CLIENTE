/*PROBLEMAS

Ha llegado la parte fundamental, que es el momento donde uno desarrolla individualmente un algoritmo para la resolución de problemas.
El tiempo a dedicar a esta sección EJERCICIOS PROPUESTOS debe ser mucho mayor que el empleado al ver EJERCICIOS RESUELTOS.
La experiencia dice que debemos dedicar el 80 % del tiempo a la resolución individual de problemas y el otro 20 % al análisis y codificación de problemas ya resueltos por otras personas.
Es de vital importancia para llegar a ser un buen PROGRAMADOR poder resolver problemas en forma individual.

    Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas
     mayores o iguales a 7 y cuántos menores.*/
   
     
     /*let acumula=0;
     let m=0;
     let n=0;
     let nota=0;
      
        while(acumula<10){
           
           
             nota=(parseInt(prompt("Introduce la nota")));
           
            acumula++;
            if(nota>=7){ 
                console.log(nota);
               m++; 
            }else{
                n++;
            }
        }

        document.write("Hay "+m+" alumnos que han sacado de 7 para arriba");
        document.write("<br>");
        document.write("Hay "+n+" alumnos que han sacado de 7 para abajo");*/
    /*Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.*/

      
    /*  let cont=0;
      let suma=0;
      while(cont<5.0){
        
        let a=parseFloat(prompt("Ingresa la altura"));
        suma=a+suma;
        console.log(suma);
        cont++;
       
       
      }
        let p=suma/cont;
        document.write(p);*/
     



    /*En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa
     que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y 
     cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos 
     al personal.*/
       /* let cont=0;
        let acumula1=0;
        let acumula2=0;
        let total=0;

      
            
    let s=parseInt(prompt("Que sueldo tienes para comprobar si esta dentro del rango"));
   if(s>100&&s<500){
 
        while(cont<5){  
            
            let sueldo=parseInt(prompt("Introduce sueldo"));
            cont++;
            total=total+sueldo;
               console.log(sueldo);
            console.log(sueldo);   
                if(sueldo<=300){
                    acumula1++;
                }else{
                    acumula2++;
                }
        }
        document.write("En la empresa cobran mas de 300$ "+ acumula2+ " empleados"+"<br>");
      
        document.write("En la empresa cobran menos de 300$ "+ acumula1+ " empleados"+"<br>");

        document.write("El gasto total de la empresa "+total);

   }else{
    document.write("En esta empresa nadie cobra ese sueldo");    
    }  
                
            
           
        
       
    

       /* let cont1 = 0;
        let cont2 = 0;
        let total = 0;
        let sueldo;
        let x = 0;
        while (x < 5) {
            sueldo = parseInt(prompt('Ingrese el sueldo'));
            if (sueldo <= 300) {
                cont1 = cont1 + 1;
            } else {
                cont2 = cont2 + 1;
            }
            total = total + sueldo;
            x = x + 1;
        }
        document.write('Cantidad de empleados que cobran 300 o menos:' + cont1);
        document.write('<br>');
        document.write('Cantidad de empleados que cobran más de 300:' + cont2);
        document.write('<br>');
        document.write('Gastos en sueldos en la empresa:' + total);*/
            





    /*Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)*/
   /* let x=5;
    let c=1;
    document.write("5"+"<br>");
   
    while(c<20){
        c++;
        x=x+5;
        document.write(x+"<br>");
    }*/

    /*Mostrar los múltiplos de 10 hasta el valor 1500.
    Debe aparecer en pantalla 10 - 20 -<30 etc.*/
    let m=10;
    let acumula=10; 
    while(acumula!=1500){
        acumula+=m;
        document.write(acumula);
        document.write("<br>");
    }


    /*Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
    Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.
    Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
    Emplear el operador "%" en la condición de la estructura condicional.

    	if (valor%2==0)

    El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
*/

/*let cont=0;
let nota1=0;
let s=0;

while(cont<5){
     nota=(parseInt(prompt("Introduce nota")));
     
    cont++;
    nota1+=nota;
   console.log(cont);
   console.log(nota1);
}

document.write(nota1/cont);*/

/*Ejercicio 6

El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener 
el resto de la división entera del número de DNI y el número 23.
A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos,
elaborar un pequeño script que:
Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
(Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. 
Si ese es el caso, se muestra un  al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
    Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
    Una vez calculada la letraS, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

   
 /*  var letras  = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
   let n=parseInt(prompt("Introcuce el número de DNI"));
   let l=prompt("Introduce la letra del DNI");
   l=l.toUpperCase();
   
   if(n>0 && n<99999999){
        if(l=letras[n%23]){
            document.write("Coincide el número con la letra");
        }else{
            document.write("No coincide el número con la letra");
        }
   }else{
    document.write("No existe ese número de DNI");
   }*/
           
       
       
        
       
        
       
       

       

          

   






