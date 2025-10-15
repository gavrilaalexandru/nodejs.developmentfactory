const fs = require('fs');

fs.readFile('test.txt', (error, data) => {
  if (error != null) {
    console.log(error);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('test.txt', ' dolor sit amet', { flag: 'a' }, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Fisierul a fost scris.');
});

// ambele operatii fiind asincrone, sunt lansate aproape simultan, fara sa se astepte una pe cealalta, din acest caz
// obtinem outputuri diferite

fs.rename('test.txt', 'node.txt', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Fisierul a fost redenumit');
});

fs.unlink('node1.txt', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Fisierul a fost sters cu succes.');
});
