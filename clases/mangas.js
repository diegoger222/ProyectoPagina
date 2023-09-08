document.addEventListener('DOMContentLoaded', function() {
  const registroForm = document.getElementById('registroForm');

  registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const manga = {
      nombre: document.getElementById('nombre').value,
      tipo: document.getElementById('tipo').value,
      estado: document.getElementById('estado').value,
      webcomic: document.getElementById('webcomic').checked,
      yonkoma: document.getElementById('yonkoma').checked,
      generos: obtenerGenerosSeleccionados(),
      titulos: document.getElementById('titulos').value,
      ultimoCapitulo: document.getElementById('ultimoCapitulo').value,
      link: document.getElementById('link').value
    };

    const mangaJSON = JSON.stringify(manga);
    console.log(mangaJSON);

    // Aquí puedes realizar otras operaciones con los datos, como enviarlos a un servidor o guardarlos en el almacenamiento local.
       
    // Restablecer el formulario después de guardar los datos
    registroForm.reset();
  });


  //Esta funcion de encarga de recoger los Generos que estan seleccionados y los junta en un array (bastante compacto el metodo)
  function obtenerGenerosSeleccionados() {
    const generosSeleccionados = [];

    const generoCheckboxes = document.querySelectorAll('.genero-checkboxes input[type="checkbox"]:checked');
    generoCheckboxes.forEach(function(checkbox) {
      generosSeleccionados.push(checkbox.value);
    });

    return generosSeleccionados;
  }
});
