/*Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año) */

/*let dia=parseInt(prompt("Introduce el dia"));
let mes=parseInt(prompt("Introduce el mes"));
let año=parseInt(prompt("Introduce el año"));

if(dia==25&&mes==12){
    document.write("El dia que has introducido es el de Navidad");
}else{
    document.write("No es el dia Navidad")
}*/

/*Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero 
con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede
 haber tres condiciones simples)*/

/*let v1=parseInt(prompt("Introduce primer valor"));
let v2=parseInt(prompt("Introduce segundo valor "));
let v3=parseInt(prompt("Introduce tercer valor"));

if(v1==v2&&v1==v3){
    document.write((v1+v2)*v3);
}else{
    document.write("Los numeros no son iguales");
}*/

/*Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10,
 imprimir en la página la leyenda ' Todos los números son menores a diez'.  */

/*let v1=parseInt(prompt("Introduce primer valor"));
let v2=parseInt(prompt("Introduce segundo valor "));
let v3=parseInt(prompt("Introduce tercer valor"));

if(v1<10&&v2<10&&v3<10){
    document.write("Todos los números son menores de 10");
}*/

/*Escribir un programa que pida ingresar la coordenada de un punto en el plano,
 es decir dos valores enteros x e y.Posteriormente imprimir en pantalla en qué cuadrante 
 se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.) */


/*let x=parseInt(prompt("Introduce valor de x"));
let y=parseInt(prompt("Introduce valor de y"));

if(x>0&&y>0){
    document.write("1º Cuadrante");
    }else if(x<0&&y>0){
        document.write("2º Cuadrante");
    }else if(x==0&&y==0){
        document.write("Está en el centro");
    
}else{
    document.write("Está en otro cuadrante");
}*/

/*Como viene corrección */
/*let x=parseInt(prompt("Introduce valor de x"));
let y=parseInt(prompt("Introduce valor de y"));


if(x>0 && y>0){
    document.write("1º Cuadrante");
}else{
    if(x<0 && y>0){
        document.write("2º Cuadrante");
    }else{
        if(x>0 && y<0){
            document.write("3º Cuadrante")
        }else{
            if(x<0 && y<0){
                document.write("4º Cuadrante")
            }else{
                document.write("Se encuentra sobre un eje");
            }
        }

    }
}*/

/*De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un
 programa que lea los datos de entrada e informe
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
 otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.  */

/*let sueldo=parseInt(prompt("Introduce el sueldo"));
let antiguedad=parseInt(prompt("Introduce años de antiguedad"));
if(sueldo<500){
    if(antiguedad<10){
        document.write(((sueldo*20)/100)+sueldo);
    }
    if(antiguedad<10){
        document.write(((sueldo*5)/100)+sueldo);
    }
}else{
    document.write(sueldo);
}*/

/*Codigo hecho por mi primero */
/*let sueldo=parseInt(prompt("Introduce el sueldo"));
let antiguedad=parseInt(prompt("Introduce años de antiguedad"));
if(sueldo<500){
    if(antiguedad>=10){
        document.write(((sueldo*20)/100)+sueldo);
    
    }else{
        document.write(((sueldo*5)/100)+sueldo);
    }  
}else{
    document.write(sueldo);
}
*/
/*Se ingresan por teclado tres números, si al menos uno de los valores 
ingresados es menores a 10, imprimir en la página la leyenda
 'Alguno de los números es menor a diez'.  */

let v1=parseInt(prompt("Introduce el primer valor "));
let v2=parseInt(prompt("Introduce el segundo valor "));
let v3=parseInt(prompt("Introduce el tercer valor "));

/*if(v1>=10 && v2>=10 && v3>=10){
    document.write("Todos los valores son superiores a 10");
}else{
    document.write("Alguno de los números es menor a 10");
}*/
/*Como esta en la solucion */
if(v1>10 || v2>10 || v3>10){
    document.write("Alguno de los valores es menor a 10");
}

