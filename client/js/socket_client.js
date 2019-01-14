
var socket=io(); // 

socket.on('connect', function(){  //socket encendido se conectara al servidor
    console.log('Conectado con el servidor');
})

//cliente servidor connect
//servidor al cliente conexion

socket.on('disconnect', function(){  
    console.log('DesConectado con el servidor');
});

socket.emit('enviarMensaje', {
 usuario: 'cliente1',
 estado: 'conectado',
 mensaje: 'envió un diccionario al servidor'
}, function(res){
    console.log(res)
});