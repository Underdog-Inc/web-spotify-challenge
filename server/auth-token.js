const dotenv = require('dotenv');
const fetch = require('cross-fetch');
dotenv.config();

const getToken = () => (_request, response, next) => {
  const spotifyEndpoint = 'https://accounts.spotify.com/api/token';
  const credentials = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
  const credentialsBase64 = new Buffer.from(credentials).toString('base64');

  fetch(spotifyEndpoint, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Authorization': `Basic ${credentialsBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
  .then(res => res.json())
  .then(res => {
    // set token in cookies
    // TO DO: need to expire this properly
    response.cookie(
      'spotify_access_token',
      res.access_token,
      { httpOnly: false }
    );

    return next();
  })
  .catch(err => {
    console.log('ERROR:', err)
  });
}

module.exports = getToken;
