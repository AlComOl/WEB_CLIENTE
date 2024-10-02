window.onload= function(){


//document.querySelector('form').addEventListener("submit", confirmar);
//document.querySelector('form').addEventListener("submit", confirmar);
 //preguntar a german porque no puedo poner el documentdetelementByID("user")   
 //document.getElementById('user').addEventListener('submit',confirmar);
 //document.getElementById('pwd').addEventListener('submit',confirmar);

function confirmar(){
    let clave1 = document.getElementById('user').value;
    let clave2=document.getElementById('pwd').value

    if(clave1=="Alvaro"&&clave2=="aptget"){
        alert("La clave es correcta")
    }else{
        alert("La clave no es correcta");
    }
}

}