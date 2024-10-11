window.onload=function(){
var hola = document.getElementById('myButton');
hola.onclick = function() {
    alert('Has hecho clic!');
};

// MODELOS INTERNET EXPLORER

var button = document.getElementById('internetexplorer');
button.attachEvent('onclick', function() {
    alert('Has hecho clic en IE!');
});



}