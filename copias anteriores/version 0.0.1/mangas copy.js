document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById("nombre").value;
    var tipo = document.getElementById("tipo").value;
    var estado = document.getElementById("estado").value;
    var webcomic = document.getElementById("webcomic").checked;
    var yonkoma = document.getElementById("yonkoma").checked;
  
    var generos = [];
    var generoCheckboxes = document.getElementsByClassName("genero-checkboxes")[0].getElementsByTagName("input");
    for (var i = 0; i < generoCheckboxes.length; i++) {
      if (generoCheckboxes[i].checked) {
        generos.push(generoCheckboxes[i].value);
      }
    }
  
    var titulos = document.getElementById("titulos").value;
    var ultimoCapitulo = document.getElementById("ultimoCapitulo").value;
    var link = document.getElementById("link").value;
  
    // Aquí puedes hacer lo que desees con los datos recolectados
    // Por ejemplo, puedes enviarlos a una base de datos usando SQL
  
    console.log("Nombre: " + nombre);
    console.log("Tipo: " + tipo);
    console.log("Estado: " + estado);
    console.log("Webcomic: " + webcomic);
    console.log("Yonkoma: " + yonkoma);
    console.log("Géneros: " + generos.join(", "));
    console.log("Títulos: " + titulos);
    console.log("Último Capítulo: " + ultimoCapitulo);
    console.log("Link: " + link);
  
    // Puedes agregar aquí la lógica adicional que desees, como mostrar un mensaje de éxito o redirigir al usuario a otra página.
  });
  