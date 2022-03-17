import styles from './styles.scss';
import { fetchData } from '../../utilities';

//
//  PUBLIC
//
export const loadResults = (resultsList) => {
  if (!resultsList.length) {
    clearArtists();
    showEmptyState();
    return null;
  }

export const buildAndRenderResults = (resultsList) => {
  clearArtists();
  hideEmptyState();

  const resultContainerWithEls = buildResultEls(resultsList);
  const pageEl = document.getElementById('page');
  pageEl.appendChild(resultContainerWithEls);
};


//
//  METHODS
//
const hideEmptyState = () => {
  const emptyState = document.getElementById('empty-state');
  emptyState.classList.add('hidden');
};

const showEmptyState = () => {
  const emptyState = document.getElementById('empty-state');
  emptyState.classList.remove('hidden');
}

const clearArtists = () => {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) {
    resultsContainer.remove();
  }
};

const createResultEl = (result) => {
  if (!result.images?.length) return null;

  const imageEl = createImageEl(result);
  const metaDataEl = createMetadataContainerEl(result);

  const resultItemEl = document.createElement('li');
  resultItemEl.setAttribute('class', styles.itemContainer);

  resultItemEl.appendChild(imageEl);
  resultItemEl.appendChild(metaDataEl);
  return resultItemEl;
};

const createImageEl = (result) => {
  const imageEl = document.createElement('img');
  const image = result.images[0];
  imageEl.setAttribute('src', image.url);
  imageEl.setAttribute('class', styles.image);
  return imageEl;
};

const createMetadataContainerEl = (result) => {
  const metaDataEl = document.createElement('meta-data');
  metaDataEl.setAttribute('class', styles.metaData);

  const nameEl = createMetadataNameEl(result);
  metaDataEl.appendChild(nameEl);

  const relatedEl = createMetaDataRelatedEl(result);
  metaDataEl.appendChild(relatedEl);

  return metaDataEl;
};

const createMetadataNameEl = (result) => {
  const nameEl = document.createElement('p');
  nameEl.innerText = result.name;
  nameEl.setAttribute('class', styles.name);
  return nameEl;
};

const createMetaDataRelatedEl = (result) => {
  const relatedEl = document.createElement('button');
  relatedEl.innerText = 'See related artists';
  relatedEl.setAttribute('class', styles.relatedBtn);

  relatedEl.addEventListener('click', () => {
    api.getRelatedArtists(result.id)
      .then(results => {
        loadResults(results)
      })
      .catch(err => console.log(err));
    }
  );

  return relatedEl;
};

export const clearArtists = () => {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) {
    resultsContainer.remove();
  }
};

  return resultsList.reduce((resultsContainerEl, result) => {
    const resultEl = createResultEl(result);
    if (resultEl) resultsContainerEl.appendChild(resultEl);
    return resultsContainerEl;
  }, resultsContainerEl);
};
