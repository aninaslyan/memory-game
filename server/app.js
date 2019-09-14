import http from 'http';

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

server.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
