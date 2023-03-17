const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  const data = require('./data.json');
  res.json(data);
});

app.use(cors());

app.listen(port, () => {
    console.log(`API listening on port ${port}!`);
});