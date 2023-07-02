// create a datagram -> a datagram is a small message sent over a network
const dgram = require('dgram');
// -> a dGram socket is a type of network socket which uses the UDP protocol instead of TCP protocol
// use dGram to create a udp server -> udp4 is the ipv4 protocol
const server = dgram.createSocket('udp4');


// listen for messages
server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
}
);

// bind to port 8080
server.bind(8080, () => {
    console.log('UDP server started on port 8080');
}
);