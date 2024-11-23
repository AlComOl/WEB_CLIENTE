$(function(){
    

$(".item").css("background-color" ,"#cecece");
$("#cart_items").css("border","4px solid black");
$("img").css("border" , "1px solid blue ");
$(".item > label ").css("text-decoration","underline");
$("button").css("color", "red");
$(".item >label+label").css("color","white");
$("*:contains('€')").css("color","green");
// Pon el fondo de color amarillo a todos los <div> que estén vacíos.
$("*:empty").css();
// Pon el fondo de color rojo al primer y último elemento de la clase item.
// Pon el borde de color verde (border-color:green) a las imágenes de
// camisetas




});