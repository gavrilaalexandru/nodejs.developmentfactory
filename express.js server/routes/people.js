const express = require('express');
const fs = require('fs');
const db = require('../db').connect();

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(db, (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.send('Internal Server Error');
      return;
    }
    res.statusCode = 200;
    res.send(data);
  });
});

router.post('/', (req, res) => {
  res.statusCode = 201;
  fs.readFile(db, (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.send('Internal Server Error');
    }
    const people = JSON.parse(data.toString());
    people.push(req.body);
    const allPeople = JSON.stringify(people);
    fs.writeFile(db, allPeople, (error) => {
      if (error) {
        res.statusCode = 500;
        res.send('Internal Server Error');
        return;
      }
    });
    res.send();
  });
});

module.exports = router;
