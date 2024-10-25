window.onload = function () {
    var mapaUsuarios = new Map();
    let mas = document.createElement("button");
    let menos = document.createElement("button");
    mas.setAttribute("id", "sumar");
    menos.setAttribute("id", "quitar");
    mas.setAttribute("type", "button");
    menos.setAttribute("type", "button");
    mas.textContent = "+";
    menos.textContent = "-";
    document.getElementById("contenedor").appendChild(mas);
    document.getElementById("contenedor").appendChild(menos);

    document.getElementById("contenedor").addEventListener("click", function (e) {
        if (e.target.id == "sumar" && mapaUsuarios.size < 15) {
            meter();
            console.log(mapaUsuarios.size);
        } else if(e.target.id == "quitar"){
            let lista = document.getElementById("lista").lastElementChild;
            lista.remove();
            mapaUsuarios.delete(parseInt(lista.getAttribute("id")));
            console.log(mapaUsuarios.size);
        }

        if (mapaUsuarios.size == 15) {
            document.getElementById("sumar").style.display = "none";
            
        } else {
            document.getElementById("sumar").style.display = "block";
        }
        
        if(mapaUsuarios.size < 11){
            document.getElementById("quitar").style.display = "none";
        } else {
            document.getElementById("quitar").style.display = "block";
        }

    })

    function meter() {
        
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => {
        let contador = 0;
        let entrada;
        for (let usuario of datos) {
            if (contador == 0) {
                entrada = {
                    nombre: usuario.name,
                    nombreUsuario: usuario.username,
                    ciudad: usuario.address.city
                }; 
                mapaUsuarios.set((mapaUsuarios.size), entrada);
            }
            contador++;
        }
            let nombre = document.createTextNode(entrada.nombre); 
            let li = document.createElement("li");
            li.appendChild(nombre);
            li.setAttribute("id", mapaUsuarios.size);
            document.getElementById("lista").appendChild(li);
    });
}


    document.getElementById("lista").addEventListener("click", function (e){

        if (parseInt(e.target.id) >= 0 && parseInt(e.target.id) <= mapaUsuarios.size) {
            
            let existe = document.getElementById("contenedorFormulario");

            if (existe != null) {
                document.getElementById("contenedorFormulario").remove();
            }

            let elementoEnCuestion = document.getElementById(e.target.id);
            let datosUsuario = mapaUsuarios.get(parseInt(elementoEnCuestion.getAttribute("id"))); 
            console.log(datosUsuario);
            
            let div = document.createElement("div");
            div.setAttribute("id", "contenedorFormulario");
            let formulario = document.createElement("form");
            let labelUsuario = document.createElement("label");
            let tituloUsuario = document.createElement("h3");
            let inputContra = document.createElement("input");
            let inputNumero = document.createElement("input");
            let boton = document.createElement("button");
            boton.textContent = "Login";
            boton.setAttribute("type", "submit");
            inputNumero.setAttribute("type", "number");
            inputNumero.setAttribute("required", "true");
            inputNumero.setAttribute("min", 3);
            inputNumero.setAttribute("max", 5);
            inputNumero.setAttribute("id", "numero");
            //inputContra.setAttribute("pattern", "^\d{5}$");
            inputContra.setAttribute("required", "true");
            inputContra.setAttribute("id", "contra");
            inputContra.setAttribute("type","password");
            inputContra.setAttribute("placeholder", datosUsuario.ciudad);
            tituloUsuario.textContent = datosUsuario.nombre;
            labelUsuario.textContent = "Nombre de usuario: " + datosUsuario.nombreUsuario;
            
            formulario.appendChild(labelUsuario);
            formulario.appendChild(inputContra);
            formulario.appendChild(inputNumero);
            formulario.appendChild(boton);
            div.appendChild(formulario);
            elementoEnCuestion.appendChild(div);

            console.log(e.target.textContent);
            
            document.getElementById("contenedorFormulario").addEventListener("input", function (e){
                    let entradaUsuario = document.getElementById(e.target.id);
                    
                    switch (e.target.id) {
                        case "numero":
                            if (entradaUsuario.validity.rangeUnderflow) {
                                entradaUsuario.setCustomValidity("Ingresa un NUMERO que ser un valor mayor o igual a 3");
                                document.getElementById("numero").style.display = "block";
                                entradaUsuario.style.borderColor = "red";
                            } else if(entradaUsuario.validity.rangeOverflow){
                                entradaUsuario.setCustomValidity("Ingresa un NUMERO que ser un valor menor o igual a 5");
                                document.getElementById("numero").style.display = "block";
                                entradaUsuario.style.borderColor = "red";
                            } else {
                                entradaUsuario.style.borderColor = "black";
                                document.getElementById("numero").style.display = "block";
                            }
                            break;
                        case "contra":
                            if (entradaUsuario.value == entradaUsuario.getAttribute("placeholder")) {
                                entradaUsuario.setCustomValidity("");
                                document.getElementById("numero").style.display = "block";
                                entradaUsuario.style.borderColor = "black";
                                console.log("correct");

                                

                            } else {
                                entradaUsuario.setCustomValidity("Contraseña incorrecta");
                                document.getElementById("numero").style.display = "block";
                                entradaUsuario.style.borderColor = "red";
                                
                            }
                            break;
                        default:
                        break;
                    }


            });

        }
    });

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => {
        let contador = 0;
        for (let usuario of datos) {
            if (contador < 10) {
                let entrada = {
                    nombre: usuario.name,
                    nombreUsuario: usuario.username,
                    ciudad: usuario.address.city
                }; 
                mapaUsuarios.set(contador, entrada);
            }
            contador++;
        }
        hacerLista(mapaUsuarios);
    });

    function imagenes(){
        fetch("https://picsum.photos/200")
        .then(response => response.blob())
        .then(datos => {
                return console.log(datos);
        });
    }

    function hacerLista(mapaDeUsuarios){
        let contador = 0;
        for (const iterator of mapaDeUsuarios.values()) {
            let nombre = document.createTextNode(iterator.nombre); 
            let li = document.createElement("li");
            li.appendChild(nombre);
            li.setAttribute("id", contador);
            document.getElementById("lista").appendChild(li);
            contador++;
        }
    } 

}