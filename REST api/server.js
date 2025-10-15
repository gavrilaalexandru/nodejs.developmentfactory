const http = require('http');
const fs = require('fs');
const db = require('./db').connect();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to my node API');
      break;
    case '/people':
      if (req.method === 'GET') {
        fs.readFile(db, (error, data) => {
          if (error) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
          }
          res.statusCode = 200;
          res.end(data);
        });
      } else if (req.method === 'POST') {
        res.statusCode = 201;
        fs.readFile(db, (error, data) => {
          if (error) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
          }
          const people = JSON.parse(data.toString());
          req.on('data', (chunk) => {
            const json = JSON.parse(chunk.toString()); // presupunem ca este json si nu alt tip de data
            people.push(json);
            const newPeople = JSON.stringify(people);
            fs.writeFile(db, newPeople, (error) => {
              if (error) {
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
              }
            });
          });
          res.end();
        });
      }
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
