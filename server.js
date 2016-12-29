const net = require('net');

let server = net.createServer((socket) => {

  console.log('Client connected');

  socket.setEncoding('utf8');

  socket.on('data', (chunk) => {
    console.log(`Broadcast from client: ${chunk}`);
    process.stdin.pipe(socket);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

});

server.listen(6969, '0.0.0.0', () => {
  console.log('Opened server on', server.address());
});