import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(4001);

console.l('Server is up and running with jenkin build 32');

export default server;
