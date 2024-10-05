window.onload = function () {
    document.getElementById('productos').addEventListener('click', getPrecio);
    document.getElementById('cantidad').addEventListener('click',getPrecio);

    
    function getPrecio(){

        let p=parseInt(document.getElementById('productos').value);
        let c=parseInt(document.getElementById('cantidad').value);
        let t=parseInt=(p*c);
        console.log(t);

        document.getElementById('total').value=t;

    }
 

}