/*
Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos. 
*/
let n1= parseInt(prompt("Introduce un número"));
let n2= parseInt(prompt("Introduce segundo número"));
let n3= parseInt(prompt("Introduce tercer número"));

/*if(n1>n2&&n2>n3){
    document.write("El numero mayor es : "+n1);   
}else if(n1>n3&&n3>n2){
    document.write("El numero mayor es : "+n1);
}else if(n2>n1&&n1>n3||n2==n3){
    document.write("El numero mayor es : "+n2);
}else if(n2>n3&&n3>n1||n1==n2){
    document.write("El numero mayor es : "+n2);
}else if(n3>n1&&n1>n2){
    document.write("El numero mayor es : "+n3);
}else if(n3>n2&&n2>n1){
    document.write("El numero mayor es : "+n3);
}else if(n1==n2&&n2<n3){
    document.write("El numero mayor es : "+n1);
}else if(n2==n3&&n2<n1){
    document.write("El numero mayor es : "+n2);
}else if(n1==n3&&n2>n3){
    document.write("El numero mayor es : "+n2);
}*/

/*CORRECCIÓN*/
if(n1>n2){
    
    if(n1>n3){
        document.write("El mayor de los tres numero es:"+n1);
       
    }else{
        document.write("El mayor de los tres numero es:"+n3);
    }
}else{
    if(n2>n3){
        document.write("El mayor de los tres numero es:"+n2);
    }else{
        document.write("El mayor de los tres numero es:"+n3);
    }

}

/*Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo. */

/*let entero=(prompt("Ingresa un número"));

if(entero>0){
    document.write("El número es positivo");
}else if(entero==0){
    document.write("El número es 0");
}else{
    document.write("El número es negativo");
}*/

/*Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.*/ 

/*let entero=(prompt("Ingresa un número de 1 , 2 o 3 cifras"));

if(entero>999)
    document.write("El número tiene mas de 3 cífras");
else{
    if(entero>=99&&entero<999){
        document.write("El número tiene 3 cífras");
        
    }else if(entero>9&&entero<=99){
        document.write("El número tiene 2 cífras");
    }else if(entero<=9){
        document.write("El número tiene 1 cífras");
    }
}*/


/*De un postulante a un empleo, que realizó un test de capacitación, se obtuvo 
la siguiente información: nombre del postulante,
cantidad total de preguntas que se le realizaron y
cantidad de preguntas que contestó correctamente.
Se pide confeccionar un programa que lea los datos del postulante
e informe el nivel del mismo según el porcentaje de respuestas correctas
 que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.*/


/*let nom=(prompt("Introduce el nombre"));
let pre= parseInt((prompt("Introduce la cantidad de preguntas que realizaron")));
let prebien= parseInt((prompt("Introduce cantidad de preguntas que respondió correctamente")));

if(prebien/pre*100>=90){

    document.write(nom+" esta en Nivel superior");
}else if(prebien/pre*100>75 && prebien/pre*100<=90 ){
    document.write(nom+" está en el Nivel medio");
}else if(prebien/pre*100>=50 && prebien*pre/10<75 ){
    document.write(nom+" está Nivel regular");
}else if(prebien/pre*100<50){
    document.write(nom+" está Fuera de nivel");
}else{
    document.write(nom+" Fuera de rango");
}*/

