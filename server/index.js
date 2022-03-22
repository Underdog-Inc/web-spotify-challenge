// dotenv.config();
const express = require('express');
const path = require('path');
const getToken = require('./auth-token');

const app = express();
const PORT = 8080;

// TO DO: something is very wrong here.g

app.use('/', getToken());

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
