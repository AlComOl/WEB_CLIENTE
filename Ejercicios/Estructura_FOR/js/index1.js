/*PROBLEMAS


  1-  Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y 
  la altura de un triángulo. El programa deberá informar:
    a) De cada triángulo la medida de su base, su altura y su superficie.
    b) La cantidad de triángulos cuya superficie es mayor a 12.
    Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.*/
   /* let m=0;
    let superficie=0;
    for(let i=0;i<3;i++){
            let base=parseInt(prompt("Introduce base"));
            let altura=parseInt(prompt("Introduce altura"));
            superficie=(base*altura)/2
            if(superficie>12){
               m++; 
            }
            document.write(" a) El triangulo tiene una base de "+base+" una altura de "+ altura + " y una superfice de "+superficie+"<br>");
            
        }
        document.write(" b) Hay "+m+" triangulos con la superfice mayor de 12");*/
   /* Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).*/
   /*let tabla=5;

   for(let i=0;i<51;i++){
       document.write( tabla+" x "+i+" = "+tabla*i+"<br>");
       
   }*/
   /* Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
    /*Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.*/
    
   /* let valor= parseInt(prompt("Introduce el número"));

    for(i=0;i<11;i++){
      document.write(valor+" x "+i+" = "+valor*i+"<br>");
    }*/
    

    /*Realizar un programa que lea los lados de 4 triángulos, e informar:
    a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
    b) Cantidad de triángulos de cada tipo.
    c) Tipo de triángulo del que hay menor cantidad.*/
    

    /*let isosceles=0;
    let escaleno=0;
    let equilatero=0;
    let triangulo=0;

    for(i=0;i<=3;i++){
      let lado1=parseInt(prompt("Introduce el lado 1º del triangulo "));
      let lado2=parseInt(prompt("Introduce el lado 2º del triangulo "));
      let lado3=parseInt(prompt("Introduce el lado 3º del triangulo "));
      if(lado1==lado2&&lado1==lado3){
           triangulo="equilatero";
           equilatero++;
           document.write("El triangulo es "+ triangulo+"<br>");
      }else if(lado1==lado2&&lado2!=lado3){
             triangulo="isósceles";
             isosceles++;
             document.write("El triangulo es "+ triangulo+"<br>");
      }else if(lado1!=lado2&&lado1!=lado3){
              triangulo="escaleno";
              escaleno++;
              document.write("El triangulo es "+ triangulo+"<br>");
          }else{
            document.write("No es un triangulo"+"<br>");
      }
    }
    document.write("hay "+equilatero+" equilateros "+"<br>");
    document.write("hay "+isosceles+" isosceles "+"<br>");
    document.write("hay "+escaleno+" escaleno  "+"<br>");*/

    /*6-Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano.
     Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante.
     Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.*/


     /*let puntos=parseInt(prompt("Número de puntos a Introducir"));
     let c1=0;
     let c2=0;
     let c3=0;
     let c4=0;
       for(let i=0;i<puntos;i++){
        let x=parseInt(prompt("Introduce cordenada x"));
        let y=parseInt(prompt("Introduce cordenada y"));

        if(x<0&&y>0){
          c1++;
          //document.write("cuadrante 1º");
        }else if(x>0&&y>0){
          c2++;
          //document.write("cuadrante 2º");
        }else if(x<0&&y<0){
          c3++;
          //document.write("cuadrante 3º");
        }else if(x>0&&y<0){
          c4++;
          //document.write("cuadrante 4º");
        }else{
          document.write("Esta en el centro del eje")
        }

       
        

     }

     document.write("cuarante 1º hay "+c1+" puntos en el plano"+"<br>"); 
     document.write("cuarante 2º hay "+c2+" puntos en el plano"+"<br>"); 
     document.write("cuarante 3º hay "+c3+" puntos en el plano"+"<br>"); 
     document.write("cuarante 4º hay "+c4+" puntos en el plano"+"<br>"); 

*/
    /*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    a) La cantidad de valores negativos ingresados.
    b) La cantidad de valores positivos ingresados.
    c) La cantidad de múltiplos de 15.
    d) El valor acumulado de los números ingresados que son pares.*/
    /*let cero=0; 
    let n=0;
    let p=0;
    let m=0;
    let ac=0;
      for(i=0;i<=10;i++){
        let v=parseInt(prompt("Ingresa valor por teclado"));
        if(v<0){
          n++;
        }else if(v>0){
          p++;
        }else if(v%15==0){
          m++;
        }else if(v%2==0){
          ac++;
        }

       }
       document.write("El número de valores negativos es "+ n+"<br>");
       document.write("El número de valores positivos es "+ p +"<br>");
       document.write("El número de valores multiplos de 15 es "+m+"<br>");
       document.write("El número de valores total pares  es "+ac+"<br>");*/



    /*7-Se cuenta con la siguiente información:
    Las edades de 5 estudiantes del turno mañana.
    Las edades de 6 estudiantes del turno tarde.
    Las edades de 11 estudiantes del turno noche.
    Las edades de cada estudiante deben ingresarse por teclado.
    a) Obtener el promedio de las edades de cada turno (tres promedios).
    b) Imprimir dichos promedios (promedio de cada turno).
    c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
    Solución
Retornar al menu*/
let m=0;
let=t=0;
let n=0;
let res=0
let res1=0;
let res2=0;

for(let i=0;i<5;i++){
    m=parseInt(prompt("Introduce edad personas turno de mañana "+i));
    res+=m;
}

  for(let j=0;j<6;j++){
       m=parseInt(prompt("Introduce edad personas turno de tarde "+j));
         res1+=m;
}

    for(let k=0;k<11;k++){
      m=parseInt(prompt("Introduce edad personas turno de noche "+k));
       res2+=m;
}

res=res/5;
res1=res1/6;
res2=res2/11;


document.write("turno de mañana "+ res);
document.write("<br>");
document.write("turno de mañana "+ res1);
document.write("<br>");
document.write("turno de mañana "+ res2);
document.write("<br>");

if(res>res1&&res>res2){
  document.write("El turno de mañana tiene el promedio de edad más alto"+"<br>");
}else{
  if(res1>res2){
    document.write("El turno de tarde tiene el promedio de edad más alto"+"<br>");
  }else{
    document.write("El turno de noche tiene el promedio de edad más alto"+"<br>");
  }

}
