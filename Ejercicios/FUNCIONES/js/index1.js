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
  if(mayor>menor){
   let res=menor;
  }else{
    
  }
  return res;

}*/

/*averigua si una palabra es palindroma */

let p=prompt("Introduce una palabra");
let palabra =[];

for(let i=0;i<p.length;i++){
  palabra[i]=p[i];
}
let res=palabra.reverse();

if(res===palabra){
  document.write("La palabra es palindroma");
}else{
  document.write("La palabra no es palindroma");
}



/*Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayo */