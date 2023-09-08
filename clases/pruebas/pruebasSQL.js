import mysql from "mysql"
const conection = mysql.createConnection({
    host: 'localhost',
    user:'diego',
    password: '1234',
    database: 'paginamanga'
})

conection.connect((err)=>{
    if(err) throw err
    console.log("La conexion funciona")
       console.log()
})

export function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
//`id_manga`, `id_usuario`

const mangaJSON = {"nombre":"Nombre del Manga","tipo":"Manga","estado":"Finalizado","webcomic":false,"yonkoma":true,"generos":["Aventura","Comedia"],"titulos":"Títulos del Manga","ultimoCapitulo":"Último Capítulo","links":"https://www.ejemplo.com","id_manga":generateUUID(),"id_usuario":1};

//const manga = JSON.parse(mangaJSON);
/*
const querySQL = convertirJSONaQuerySQL(mangaJSON);
console.log(querySQL);
mangaEnviar(querySQL)
*/

// una funcion para convertir los strings en arrays, creada para los generos pero se puede aplicar para otros parametros 
function convertirStringAArray(string) {
  // Remover los caracteres { } y espacios en blanco del string
  const limpiaString = string.replace(/\{|\}| /g, '');

  // Dividir el string en elementos separados por comas
  const elementos = limpiaString.split(',');

  // Eliminar espacios en blanco adicionales alrededor de cada elemento
  const array = elementos.map(elemento => elemento.trim());

  return array;
}

function convertirJSONaQuerySQL(manga) {
    const nombreTabla = 'mangas'; // Nombre de la tabla en la base de datos
    const columnas = Object.keys(manga).join(', ');
  
    // Transformar los valores de los géneros en formato {valor1, valor2, ...}
    const generos = manga.generos.map(genero => `${genero}`).join(', ');
    const valores = Object.values(manga).map(valor => Array.isArray(valor) ? `'{${generos}}'` : typeof valor === 'string' ? `'${valor}'` : valor).join(', ');
  
    const querySQL = `INSERT INTO ${nombreTabla} (${columnas}) VALUES (${valores});`;
    return querySQL;
  }

//funcion para enviar el manga al servidor sql, se le pasa un string que es la query
  export function mangaEnviar(string){
    conection.query(string,(err)=>{
        if(err) throw err
        console.log("popu funcionas")
    })
}

conection.query('SELECT * from mangas',(err,rows)=>{
  if(err) throw err
  console.log(rows[0].generos)
})


  conection.end()