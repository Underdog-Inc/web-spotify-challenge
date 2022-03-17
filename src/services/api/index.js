const searchArtist = (val) => {
  const url = `/spotify/search?q=${val}&type=artist`;
  return fetchData(url);
};

const getRelatedArtists = (artistId) => {
  const url = `/spotify/artists/${artistId}/related-artists`;
  return fetchData(url);
};

const fetchData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      const data = res?.artists?.items || res?.artists;
      return data;
    })
    .catch(err => console.log(err));
};

export const api = {
  searchArtist,
  getRelatedArtists,
};
