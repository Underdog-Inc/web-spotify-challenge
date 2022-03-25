const express = require('express');
const path = require('path');
const getAuthToken = require('./spotify/get-auth-token');
const spotifyProxy = require('./spotify/proxy');

const app = express();
const PORT = 8080;

// TODO: need to handle refresh & add expiresAt to cookie
// immediately get spotify auth token
app.use('/', getAuthToken());

// proxy requests from client
app.use('/spotify', spotifyProxy())

// public folder
app.use(express.static('dist'));

// think this is serving our html file from the dist folder
// honestly not sure, should probably figure this out
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// run app on port 8080
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
