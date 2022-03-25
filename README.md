# Web new hire challenge

**System requirements**:</br>
Node version 16.14.0</br>
npm version 8.5.0
</br></br>

**Technologies**:</br>
`webpack`, `express`, `vanilla js`, `scss`, `spotify web api`
</br></br>

**Installation**:</br>
`git clone [this repo]`</br>
`cd /web-spotify-challenge`</br>
Add a `.env` to the root directory.</br>
Run `npm run build:dev`</br>
Run `npm run start:dev`</br>
App runs at `localhost:8080`</br>

```
// .env

CLIENT_ID=[YOUR_SPOTIFY_CLIENT_ID]
CLIENT_SECRET=[YOUR_SPOTIFY_CLIENT_SECRET]
SPOTIFY_ENDPOINT="https://api.spotify.com/v1"
SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/api/token"
```
</br>

**Useful resources**:</br>
[Spotify web API](https://developer.spotify.com/documentation/web-api/reference/#/)</br>
[Spotify client credentials](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/)
</br></br>

**To do**:</br>
- probably change all of the ui and file structure?
- figure how to use the public folder correctly fml
- add linter?
- figure out why i can't get babel to import/export everything
- need to double check that async/await works now.. possibly same babel issue?
- could use some sass variables
- maybe get rid of those .css style sheets?
