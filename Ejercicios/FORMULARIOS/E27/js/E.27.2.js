window.onload = function () {
    document.getElementById('productos').addEventListener('change', getPrecio);//al cambiar el valor del elemento id productos se ejecutar la funccion getPrecio
    document.getElementById('cantidad').addEventListener('click',getPrecio);//al hacer click en la funcion cantidad se ejecutará el la funcion getPrecio

    
    function getPrecio(){

        let p=document.getElementById('productos').value;//actualiza el valor de id  productos dejandolo en la variable
        let c=document.getElementById('cantidad').value;
        let t=parseInt=(p*c);
       

        document.getElementById('total').value=t;//actualiza el valor del elemento id=total dadole el de la variable t

    }
 

}