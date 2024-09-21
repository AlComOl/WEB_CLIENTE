/*PROBLEMAS
Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) 
y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla
4 5 6 7 8 9 10

  */

/*function mostrar(){
  let cadena=" ";
  let x=parseInt(prompt("Introduce el primer número (tiene que ser menor que el segundo"));
  let y=parseInt(prompt("Introduce el segundo número (tiene que ser mayor que el segundo)"));

  for(i=x;i<=y;i++){
    cadena+=(i+" ");
    console.log(cadena);
  }
return cadena;
}
document.write(mostrar());*/


/*function mostrarRango() {
            let inicio = parseInt(prompt("Ingrese valor inicial"))
            let fin = parseInt(prompt("Ingrese valor final"))
            for (let f = inicio; f <= fin; f++) {
                document.write(f + " - ")
            }
        }

        mostrarRango();*/


/* Elaborar una función a la cual le enviemos tres enteros y muestre el menor.*/


/*let mayor=parseInt(prompt("Introduce el primer número"));
let menor=parseInt(prompt("Introduce el segundo número"));

document.write(muestra(mayor,menor));

function muestra(mayor,menor){
  let res;
  if(mayor>menor){
    res=menor;
  }else{
    res=mayor;
  }
  return res;

}*/
//Confeccionar una función a la cual le envíe tres enteros y
// los muestre ordenados de menor a mayor. 
/*let res;
let a=(prompt("Introduce el número"));
let b=(prompt("Introduce el número"));
let c=(prompt("Introduce el número"));


document.write(orden(a, b, c));

function orden(a,b,c){
  if(a!=b&&a!=c&&b!=c){
    if(a<b){
       if(a<c){
          if(b<c){
           res=a+" "+b+" "+c;
          }else{
           res=a+" "+c+" "+b;
          }
       }else{
        if(b<a){
        res=c+" "+a+" "+b;
        }
      }
    }else{
      if(b<c){
      res=b+" "+a+" "+c;
      }else{
        res=c+" "+b+" "+a;  
      }
    }
  }else{
    res="hay algun numero igual";
  }
  return res;
}*/
/*VERSION LIBRO */

function mostrarOrdenados(x1, x2, x3) {
  if (x1 < x2 && x1 < x3) {
      document.write(x1 + ' ');
      if (x2 < x3) {
          document.write(x2 + ' ' + x3);
      } else {
          document.write(x3 + ' ' + x2);
      }
  } else {
      if (x2 < x3) {
          document.write(x2 + ' ');
          if (x1 < x3) {
              document.write(x1 + ' ' + x3);
          } else {
              document.write(x3 + ' ' + x1);
          }
      } else {
          document.write(x3 + ' ');
          if (x1 < x2) {
              document.write(x1 + ' ' + x2);
          } else {
              document.write(x2 + ' ' + x1);
          }
      }
  }
}


let valor1 = parseInt(prompt('Ingrese primer valor:'));
let valor2 = parseInt(prompt('Ingrese segundo valor:'));
let valor3 = parseInt(prompt('Ingrese tercer valor:'));
document.write('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
document.write('Los valores ordenados de menor a mayor son: ');
mostrarOrdenados(valor1, valor2, valor3);


/*averigua si una palabra es palindroma */

/*let p=prompt("Introduce una palabra");
let palabra =[];

for(let i=0;i<p.length;i++){
  palabra[i]=p[i];
}
let res=palabra.reverse();

if(res===palabra){
  document.write("La palabra es palindroma");
}else{
  document.write("La palabra no es palindroma");
}*/



/*Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayo */