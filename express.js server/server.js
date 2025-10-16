const express = require('express');

const app = express();

const userRouter = require('./routes/user');
const indexRouter = require('./routes/index');

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api', indexRouter);
app.use(express.static('./public'));

app.use((req, res) => {
  // not optimal
  res.status(404).json({ message: 'Not found' });
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3030;

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
