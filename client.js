const net = require('net');

let client = net.createConnection(6969, '0.0.0.0');

client.on('connect', () => {
  console.log('Connected to server');
  process.stdin.pipe(client);
});

client.on('data', (chunk) => {
  console.log(`Broadcast from server: ${chunk}`);
});

client.on('end', () => {
  console.log('Disconnected from server');
});