import styles from './styles.scss';

export const fetchData = (url) => {
  clearArtists();
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      const data = res?.artists?.items || res?.artists;
      return buildResultEls(data);
    })
    .catch(err => console.log(err));
}

export const buildResultEls = (data) => {
  const resultContainerWithEls = data.reduce((el, result) => {
    const resultEl = createResultsUi(result);
    if (resultEl) el.appendChild(resultEl);
    return el;
  }, createResultsContainer());

  document.getElementById('page').appendChild(resultContainerWithEls);
}

const createResultsUi = (result) => {
  if (!result?.images?.length) return null;

  const imageEl = createImageEl({ result });
  const metaDataEl = createMetadataContainerEl({ result });
  const resultItemEl = createResultItemEl();
  resultItemEl.appendChild(imageEl);
  resultItemEl.appendChild(metaDataEl)
  return resultItemEl;
}

const createResultsContainer = () => {
  const resultsContainerEl = document.createElement('ul');
  resultsContainerEl.setAttribute('id', 'results-container');
  resultsContainerEl.setAttribute('class', styles.resultsContainer);
  return resultsContainerEl;
}

const createResultItemEl = () => {
  const itemEl = document.createElement('li');
  itemEl.setAttribute('class', styles.itemContainer);
  return itemEl;
}

const createImageEl = ({ result }) => {
  const imageEl = document.createElement('img');
  const image = result.images[0];
  imageEl.setAttribute('src', image.url);
  imageEl.setAttribute('class', styles.image);
  return imageEl;
}

const createMetadataContainerEl = ({ result }) => {
  const metaDataEl = document.createElement('meta-data');
  metaDataEl.setAttribute('class', styles.metaData);

  const nameEl = document.createElement('p');
  nameEl.innerText = result.name;
  nameEl.setAttribute('class', styles.name)
  metaDataEl.appendChild(nameEl);

  const url = `/spotify/artists/${result.id}/related-artists`
  const relatedEl = document.createElement('button');
  relatedEl.innerText = 'See related artists';
  relatedEl.setAttribute('class', styles.relatedBtn);

  relatedEl.addEventListener('click', () => fetchData(url));
  metaDataEl.appendChild(relatedEl);

  return metaDataEl;
}

export const clearArtists = () => {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) {
    resultsContainer.remove();
  }
}
