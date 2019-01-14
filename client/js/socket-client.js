//import { connect } from "net";

var socket = io();

socket.on('connect', function(){
    console.log('Servidor web socket en linea');
})