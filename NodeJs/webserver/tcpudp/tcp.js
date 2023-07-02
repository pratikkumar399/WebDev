const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Hello client');
    socket.on('data', (data) => {
        console.log(data.toString());
    });
});

server.listen(8080, () => {
    console.log('TCP server started on port 8080');
});