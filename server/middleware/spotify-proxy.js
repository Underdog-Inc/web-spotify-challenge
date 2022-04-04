require('dotenv').config();
const fetch = require('cross-fetch');

/**
 * Intercept all spotify web api requests and add headers.
 * No real reason to proxy this, we can hit this API from the browser.
 */
const spotifyProxy = () => (proxyRequest, proxyResponse) => {

  console.log(proxyResponse)

  // spotify bearer token
  const cookieList = proxyRequest?.headers.cookie.split(';');
  const spotifyCookieIndex = cookieList.findIndex(cN => cN.match(/spotify_access_token=/g));
  const spotifyAccessToken = cookieList?.[spotifyCookieIndex]?.split('=')?.[1];

  // get spotify request endpoint
  const requestPath = proxyRequest.originalUrl.match(/spotify(.*)/)[1];

  fetch(`${process.env.SPOTIFY_ENDPOINT}${requestPath}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${spotifyAccessToken}`
    }
  })
  .then(res => res.json())
  .then(res => proxyResponse.json(res))
  .catch(err => err)
}

module.exports = spotifyProxy;
