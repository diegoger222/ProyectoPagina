document.addEventListener('DOMContentLoaded', function() {
    const mangaDataContainer = document.getElementById('mangaData');
  
    // Ejemplo de JSON del manga
    const mangaJSON = '{"nombre":"Nombre del Manga","tipo":"Manga","estado":"Finalizado","webcomic":false,"yonkoma":true,"generos":["Aventura","Comedia"],"titulos":"Títulos del Manga","ultimoCapitulo":"Último Capítulo","link":"https://www.ejemplo.com"}';
  
    // Mostrar los datos del manga
    mostrarManga(JSON.parse(mangaJSON));
  
    function mostrarManga(manga) {
      const fragment = document.createDocumentFragment();
  
      const nombreElement = createMangaElement('Nombre:', manga.nombre);
      fragment.appendChild(nombreElement);
  
      const tipoElement = createMangaElement('Tipo:', manga.tipo);
      fragment.appendChild(tipoElement);
  
      const estadoElement = createMangaElement('Estado:', manga.estado);
      fragment.appendChild(estadoElement);
  
      const webcomicElement = createMangaElement('Webcomic:', manga.webcomic ? 'Sí' : 'No');
      fragment.appendChild(webcomicElement);
  
      const yonkomaElement = createMangaElement('Yonkoma:', manga.yonkoma ? 'Sí' : 'No');
      fragment.appendChild(yonkomaElement);
  
      const generosElement = createMangaElement('Géneros:', manga.generos.join(', '));
      fragment.appendChild(generosElement);
  
      const titulosElement = createMangaElement('Títulos:', manga.titulos);
      fragment.appendChild(titulosElement);
  
      const ultimoCapituloElement = createMangaElement('Último Capítulo:', manga.ultimoCapitulo);
      fragment.appendChild(ultimoCapituloElement);
  
      const linkElement = createMangaElement('Link:', createLink(manga.link));
      fragment.appendChild(linkElement);
  
      mangaDataContainer.appendChild(fragment);
    }
  
    function createMangaElement(labelText, valueText) {
      const element = document.createElement('p');
  
      const label = document.createElement('label');
      label.textContent = labelText;
      element.appendChild(label);
  
      const value = document.createElement('span');
      value.textContent = valueText;
      element.appendChild(value);
  
      return element;
    }
  
    function createLink(url) {
      const link = document.createElement('a');
      link.href = url;
      link.textContent = url;
      link.target = '_blank';
      return link;
    }
  });
  