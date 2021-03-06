import express from 'express';
import path from 'path';
import getAuthToken from './middleware/get-auth-token';
import spotifyProxy from './middleware/spotify-proxy';

const app = express();
const PORT = 8080;

// immediately get spotify bearer token
app.use('/', getAuthToken());

// proxy requests from client
app.use('/spotify', spotifyProxy());

// public folder
app.use(express.static('dist'));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// run app on port 8080
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
