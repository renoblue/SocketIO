const { io } = require('../server'); //[io]deconstructor de un array let[bcd] = a  e igual a=[1,2,3]

io.on('connection', (socket) => {
    console.log ('cliente conectado'); //Callback

    client.on('disconnect', () => {
        console.log ('cliente desconectado'); //Callback
    });

    client.on('enviarMensaje', (data, Callback) => {
        console.log(data);
        if(data.usuario){
            Callback({
                respuesta: 'ok'
            })
        }else{
            Callback({
                respuesta: 'No ok'
            })
        }
    });
});

// client.broadcast.emit('enviarMensaje', data) {
//     console.log(data);

// });
 




// otra manera de llamar una función
// io.on('connection', function() {
//     console.log ('cliente on line');
// })
// function leer(){
// }
// let leer = () => {
// }

