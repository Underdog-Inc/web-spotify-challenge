import styles from './styles.scss';
import { fetchData } from '../../utilities';

/**
 * This file holds all of methods to create our results / empty state ui.
 * Feel like it should have been a class....?
 */

export const buildAndRenderResults = (resultsList) => {
  clearArtists();
  hideEmptyState();

  const resultContainerWithEls = resultsList.reduce((resultsContainerEl, result) => {
    const resultEl = createResultEl(result);
    if (resultEl) resultsContainerEl.appendChild(resultEl);
    return resultsContainerEl;
  }, createResultsContainer());

  const pageEl = document.getElementById('page');
  pageEl.appendChild(resultContainerWithEls);
};

const createResultsContainer = () => {
  const resultsContainerEl = document.createElement('ul');
  resultsContainerEl.setAttribute('id', 'results-container');
  resultsContainerEl.setAttribute('class', styles.resultsContainer);
  return resultsContainerEl;
};

const createResultEl = (result) => {
  if (!result?.images?.length) return null;

  const imageEl = createImageEl(result);
  const metaDataEl = createMetadataContainerEl(result);

  const resultItemEl = document.createElement('li');
  resultItemEl.setAttribute('class', styles.itemContainer);

  resultItemEl.appendChild(imageEl);
  resultItemEl.appendChild(metaDataEl)
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
  nameEl.setAttribute('class', styles.name)
  return nameEl;
}

const createMetaDataRelatedEl = (result) => {
  const relatedEl = document.createElement('button');
  relatedEl.innerText = 'See related artists';
  relatedEl.setAttribute('class', styles.relatedBtn);

  const url = `/spotify/artists/${result.id}/related-artists`
  relatedEl.addEventListener('click', () => fetchData(url));

  return relatedEl;
}

export const clearArtists = () => {
  const resultsContainer = document.getElementById('results-container');
  if (resultsContainer) {
    resultsContainer.remove();
  }
};

export const showEmptyState = () => {
  const emptyState = document.getElementById('empty-state');
  emptyState.classList.remove('hidden')
  clearArtists();
}

export const hideEmptyState = () => {
  const emptyState = document.getElementById('empty-state');
  emptyState.classList.add('hidden')
}
