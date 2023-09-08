export function pruebamanga(){
   var a = manga("Patata","patata","depresion", 0 ,0 ,("Magia","penes","popu").toString(),'Popu el tonto'.toString(),"123",'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    var b = mangaqueary(a)
    return b
    //console.log(b)
}


/*
{
 formato del json 
    "nombre": "nombre del manga",
    "tipo": "tipo seleccionado",
    "estado": "estado seleccionado",
    "webcomic":false,
    "yonkoma": false,
    "generos": ["genero1", "genero2", "..."],
    "titulos": "títulos del manga",
    "ultimoCapitulo": "último capítulo",
    "link": "enlace del manga"
  }
*/

function manga(nombre, tipo, estado, webcomic, yonkoma, generos, titulos, ultimocapitulo, links ){
    //var nombre, tipo, estado, webcominc, yonkoma, generos, titulos, ultimocapitulo, links 

    var jsonmanga = {
        "nombre": nombre,
        "tipo": tipo,
        "estado": estado,
        "webcomic": webcomic, //0 1
        "yonkoma": yonkoma, // 0 1
        "generos": generos,  //lista
        "titulos": titulos, //lista
        "ultimoCapitulo": ultimocapitulo,
        "links": links //posible lista
        
    }
    return jsonmanga
}

//genera de forma aleatoria una ID para la base de datos
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

//INSERT INTO `mangas` (`nombre`, `tipo`, `estado`, `webcomic`, `yonkoma`, `generos`, `titulos`, `ultimocapitulo`, `links`, `id_manga`, `id_usuario`) VALUES ('Tensei Kizoku no Isekai Boukenroku ~Jichou wo Shiranai Kamigami no Shito~', 'manga', 'emision', '0', '0', '{Acción, Aventura, Comedia, Fantasia, Reencarnación, Romance, Harem, Magia}', '{Adventure Record of Reincarnated Aristocrat ~ The apostle of Gods who doesn’t know self-esteem~}', '51', '{https://lectormanga.com/library/manga/40200/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito}', '1', '1');
//crea la queary que se enviara a la base de datos
export function mangaqueary(jsonM){
    var quearyb = 'INSERT INTO `mangas` (`nombre`, `tipo`, `estado`, `webcomic`, `yonkoma`, `generos`, `titulos`, `ultimocapitulo`, `links`, `id_manga`, `id_usuario`) VALUES ('+"'"+ jsonM.nombre.toString() +"', '"+ jsonM.nombre +"', '" + jsonM.estado + "', '" +  jsonM.webcomic + "', '" +  jsonM.yonkoma +"', '{" + jsonM.generos + "}', '{" + jsonM.titulos + "}', '" + jsonM.ultimoCapitulo + "','{ " +jsonM.links + "}', '" + generateUUID() + "', '" + 1 + "')"
    console.log(quearyb)
    return quearyb
}

pruebamanga()
//console.log(generateUUID())
//generateUUID()