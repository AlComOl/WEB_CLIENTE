window.onload = function () {
    document.getElementById('productos').addEventListener('click', getPrecio);
    document.getElementById('cantidad').addEventListener('click',getPrecio);

    
    function getPrecio(){

        let p=document.getElementById('productos').value;
        let c=document.getElementById('cantidad').value;
        let t=parseInt=(p*c);
        console.log(t);

        document.getElementById('total').value=t;

    }
 

}