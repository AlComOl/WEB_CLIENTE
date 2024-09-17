/*let nota1= parseInt(prompt("Ingrese numero"));
let nota2= parseInt(prompt("Ingrese segundo número"));

if(nota1>nota2){
    let res=nota1+nota2;
    let dif=nota1-nota2;
    document.write('La suma de las notas es '+res +'<br>'+'La diferencia es '+dif);
}else{
    let res3=nota1/nota2;
    let res4=nota1*nota2;
    document.write("La división del primero entre el sugundo : "+ res3+"<br>");
    document.write("El producto del primero entre el sugundo : "+ res4);

}*/

/*Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'*/
/*let nota1= parseInt(prompt("Ingrese nota 1"));
let nota2= parseInt(prompt("Ingrese nota 2"));
let nota3= parseInt(prompt("Ingrese nota 3"));


if(nota1+nota2+nota3/3>=4){
    document.write("REGULAR");
}else{
    
    document.write("REPROVADO");
}*/

/*Se ingresa por teclado un número positivo de uno o dos dígitos (1..99)
 mostrar un mensaje indicando si el número tiene uno o dos dígitos
(recordar de convertir a entero con parseInt para preguntar posteriormente
 por una variable entera). Tener en cuenta qué condición debe cumplirse 
 para tener dos dígitos un número entero. */ 

 let nota1= parseInt(prompt("Ingrese numero del 1 al 99"));

 if(nota1<=9){
    document.write("El número tiene un digito")
 }else{
    document.write("el número tiene mas de un digito")
 }


