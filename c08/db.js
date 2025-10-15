function connect() {
  console.log('Conectare cu succes!');
  return 'db.json';
}

// export default connect; // ES6

module.exports = { connect }; // Common JS
