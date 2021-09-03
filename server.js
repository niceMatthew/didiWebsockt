const { Server } = require('ws');
const wsServer = new Server({
    port: 8888
})
// wsServer 服务器
// socket 套接字  电源插座
wsServer.on('connection', (socket) => {
    // onmessage监听客户端发过来的消息
    socket.on('message', (message) => {
        console.log(message);
        socket.send(message);
    })  
})