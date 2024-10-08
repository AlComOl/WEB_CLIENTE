// Generar un presupuesto de un equipo de computación a partir de tres objetos de tipo SELECT que nos permiten seleccionar:
// Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
// Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)
// Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
// Para cada característica indicamos string a mostrar (Ej. Intel I3) y el valor asociado a dicho string (Ej. 400).
// Al presionar un botón "Calcular" mostrar el presupuesto en un objeto de tipo TEXT. 

window.onload = function () {
    document.getElementById('procesador').addEventListener('change', componente1);//cogemos el valor del id procesador
    //cuando cambiamos valor se ejecuta la funcion componente1
    document.getElementById('monitor').addEventListener('change', componente2);
    document.getElementById('discoduro').addEventListener('change', componente3);
    document.getElementById('butt').addEventListener('click', calculo);

    function componente1() {
        let opt1 = document.getElementById('procesador');//guarda el elemento HTML completo del id en la variable
        document.getElementById('precioP').value = parseInt(opt1.options[opt1.selectedIndex].value);
        return opt1;
    }
    function componente2() {
        let opt2 = document.getElementById('monitor');
        document.getElementById('precioM').value = parseInt(opt2.options[opt2.selectedIndex].value);
        return opt2;
    }
    function componente3() {
        let opt3 = document.getElementById('discoduro');
        document.getElementById('precioD').value = parseInt(opt3.options[opt3.selectedIndex].value);
        return opt3;
    }
    function calculo() {
        let pp = parseInt(componente1().value);
        let pm = parseInt(componente2().value);
        let pd = parseInt(componente3().value);

        document.getElementById('precioT').value = pp + pm + pd;
    }

}