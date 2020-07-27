const email = require('./routes/email');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/email', email);

require('dotenv').config({
  path: `${__dirname}/../.env`,
});
