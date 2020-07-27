const email = require('./routes/email');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/email', email);

require('dotenv').config({
  path: `${__dirname}/../.env`,
});
