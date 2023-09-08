//const mysql = require('mysql')
import mysql from "mysql"
import { pruebamanga } from './clases/prueba.js'
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

conection.query(pruebamanga(),(err)=>{
    if(err) throw err
    console.log("popu funcionas")
})

export function mangaEnviar(string){
    conection.query(string,(err)=>{
        if(err) throw err
        console.log("popu funcionas")
    })
}
//usada para generar las ids aleatorias
export function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


conection.query('SELECT * from users',(err,rows)=>{
    if(err) throw err
    console.log(rows)
})

conection.end()

/* 
INSERT INTO `mangas` (`nombre`, `tipo`, `estado`, `webcomic`, `yonkoma`, `generos`, `titulos`, `ultimocapitulo`, `links`, `id_manga`, `id_usuario`) VALUES ('Tensei Kizoku no Isekai Boukenroku ~Jichou wo Shiranai Kamigami no Shito~', 'manga', 'emision', '0', '0', '{Acción, Aventura, Comedia, Fantasia, Reencarnación, Romance, Harem, Magia}', '{Adventure Record of Reincarnated Aristocrat ~ The apostle of Gods who doesn’t know self-esteem~}', '51', '{https://lectormanga.com/library/manga/40200/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito}', '1', '1');




*/
