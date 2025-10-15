const http = require('http');
// const db = require('./db').connect(); // nu recunoaste acest import daca nu exportam mai intai cu module.exports

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Home Page');
      break;
    case '/about':
      res.end('About Page');
      break;
    case '/contact':
      res.end('Contact Page');
      break;
    default:
      res.end('Not found');
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
