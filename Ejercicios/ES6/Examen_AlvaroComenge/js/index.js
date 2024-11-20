window.onload = function() {

    //cride a la api y porte les dades
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(datos => {
        //guarde en el map per a despres traureu
        let tabla = datos.map(usuari => ({
          name: usuari.name,
          username: usuari.username,
          city: usuari.address.city
        }));

         //cride a la api y porte les dades
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => {
      //guarde en el map per a despres traureu
      let tabla = datos.map(usuari => ({
        name: usuari.name,
        username: usuari.username,
        city: usuari.address.city
      }));
console.log(tabla);
      // Selecciona tablaUsuarios de la tabla
      let tablaUsuaris = document.getElementById("tablaUsuarios");

      // Recorre els usuaris y mostra els que no tenen el display none, vull ficar un id per a que apareguen 
      tabla.forEach(user => {
        let nombre = `<tr>
              <td>${user.name}<button id="formulario">boton</button></td>
              
              </tr>`;
          tablaUsuaris.innerHTML += nombre;//mostre en el html
      });
    })
  
        // Selecciona tablaUsuarios de la tabla
        let tablaUsuaris = document.getElementById("tablaUsuarios");
  
        // Recorre els usuaris y mostra els que no tenen el display none, vull ficar un id per a que apareguen 
        tabla.forEach(user => {
          let nombre = `<tr>
                <td>${user.name}<button id="formulario">boton</button></td>
                
                </tr>`;
            tablaUsuaris.innerHTML += nombre;//mostre en el html
        });
      })

      
    document.addEventListener('click',aparceForm);

      function aparceForm(){
        let formulari=document.getElementById('formulario');
     

      


      }
     
  }
  
