# Web new hire challenge

**System requirements**:

Node version 16.14.0

npm version 8.5.0


**Technologies**:

`webpack`, `express`, `vanilla js`, `scss`, `spotify web api`


**Installation**:

`git clone [this repo]`  
`cd /web-spotify-challenge`  
Add a `.env` to the root directory.  

```
// .env

CLIENT_ID=[YOUR_SPOTIFY_CLIENT_ID]
CLIENT_SECRET=[YOUR_SPOTIFY_CLIENT_SECRET]
SPOTIFY_ENDPOINT="https://api.spotify.com/v1"
SPOTIFY_AUTH_ENDPOINT="https://accounts.spotify.com/api/token"
```

Run `npm install`  
In one terminal window/tab run `npm run build:dev`  
In another terminal window/tab run `npm run start:dev`  
App runs at `localhost:8080`  



**Useful resources**:

[Spotify web API](https://developer.spotify.com/documentation/web-api/reference/#/)  
[Spotify client credentials](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/)

<img width="1315" alt="Screen Shot 2022-03-28 at 10 01 21 AM" src="https://user-images.githubusercontent.com/11253715/160438389-1b49b153-51ec-4bbc-9858-b6219240919b.png">

**To do**:

- probably change all of the ui and file structure and createElements?
- figure how to use the public folder correctly fml
- add linter?
- figure out why i can't get babel to import/export everything
- need to double check that async/await works now.. possibly same babel issue?
- could use some sass variables
- maybe get rid of those .css style sheets?
