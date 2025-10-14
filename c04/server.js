const http = require('http'); // import http from 'http'

const host = process.env.HOST || 'localhost'; // host daca e setat ori localhost
const port = process.env.PORT || 3030; // port daca e setat ori 3030

const server = http.createServer((req, res) => {
  // functie callback
  res.statusCode = 200; // status code OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
