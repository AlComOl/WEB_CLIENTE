window.onload = function () {

    document.getElementById('mostrar').addEventListener('click', mostrarDeportes);

    function mostrarDeportes() {

        let checkk = [];
        let pos = 0;

        if (document.getElementById('checkbox1').checked) {
            checkk[pos] = document.getElementById('checkbox1').value;
            pos++;
        }
        if (document.getElementById('checkbox2').checked) {
            checkk[pos] = document.getElementById('checkbox2').value;
            pos++;
        }
        if (document.getElementById('checkbox3').checked) {
            checkk[pos] = document.getElementById('checkbox3').value;
            pos++;
        }
    
        
        for (let i = 0; i < checkk.length; i++) {
            let ch = document.write(checkk[i]);
            contendor.innerHTML="";//borra el resultado anterior
            // let p = document.createElement("p");
            // let content = document.createTextNode(ch);

            let p = document.createElement("p");
            let content = document.createTextNode(checkk[i]); // Usa directamente el valor del array
            
            
            p.appendChild(content);
            document.body.appendChild(p);

        }

    }
}