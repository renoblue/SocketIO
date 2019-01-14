const express = require('express'); //importar el express

const socketIO = require('socket.io'); //variable para importar el componente
const http = require('http'); //servidor interno propio de node
const path = require('path'); // pagina cliente

const app = express(); //genera la aplicacion,se carga el express

const server = http.createServer(app); //caracteristicas del app para la conexion,nativo con caracteristicas de express
//const io = socketIO(server);
module.exports.io = socketIO(server);
require('./socket/socket_config');


const pathPublic = path.resolve(__dirname, '../client'); //le indica al servidor cual es la pagina que se puede acceder ->_dirname consigue toda la direccion de lo que estoy utilizando 

app.use(express.static(pathPublic)); //al iniciar se ejecutara el index del cliente

const port = process.env.PORT || 3001; //variable de entorno del sistema ejm console.log(process), se grabara al momento de correrle en un hosting

server.listen(port, (error) => { //es un servidor socket que tendra el poder :v
    if (error) {
        throw new Error(error);
    }
    console.log(`Reno el server está en el puerto: ${port}`);
});