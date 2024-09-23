
/*Número de enlaces de la página*/
window.onload = function() {
console.log("Hola");
var enlace=document.getElementsByTagName('a');
alert(enlace.length);
/*Dirección a la que enlaza el penúltimo enlace*/
var segundo=document.getElementsByTagName('a');
alert(segundo[6]);
/*Numero de enlaces que enlazan a http://prueba*/
var enlazan =document.getElementsByName(segundo[6]);
alert(enlazan.length);
/*Número de enlaces del tercer párrafo*/



}
