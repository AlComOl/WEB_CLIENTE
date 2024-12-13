

window.onload=function(){
    



    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(datos => {
        let cad = '<tr><th>Name</th><th>Username</th><th>City</th></tr>';
        for (let usuario of datos) {
            cad += `<tr><td><a href="#">${usuario.name}</td><td>${usuario.username}</td><td>${usuario.address.city}</td></tr>`;
        }

        console.log(datos);
        document.getElementById("datosTabla").innerHTML = cad;
    });

}
