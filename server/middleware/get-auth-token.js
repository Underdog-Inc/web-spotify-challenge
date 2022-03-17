require('dotenv').config();
const fetch = require('cross-fetch');

/**
 * Spotify requires that we use a bearer token to run anonymous requests.
 * This function gets that token and stores it in our browser cookies.
 * Cookie: spotify_access_token
 */
const getToken = () => (_request, response, next) => {
  const {
    SPOTIFY_AUTH_ENDPOINT,
    CLIENT_ID,
    CLIENT_SECRET,
  } = process.env;

  const credentials = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const credentialsBase64 = new Buffer.from(credentials).toString('base64');

  fetch(SPOTIFY_AUTH_ENDPOINT, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      'Authorization': `Basic ${credentialsBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
  .then(res => res.json())
  .then(res => {
    // TODO: need to set the 60 min cookie expiration
    // currently you can get a new one on refresh
    response.cookie(
      'spotify_access_token',
      res.access_token,
      { httpOnly: false }
    );

    return next();
  })
  .catch(err => {
    console.log('[AUTH ERROR]:', err)
  });
};

module.exports = getToken;
