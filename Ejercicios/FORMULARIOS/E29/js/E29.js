window.onload=function(){

    document.getElementById("mostrar").addEventListener('click',acceder);


    function acceder(){

        if(document.getElementById('1').checked){
            alert("Puedes acceder eres mayor de edad")
        }
        if(document.getElementById('2').checked){
            alert("Eres menor de edad")
        }
    }






}