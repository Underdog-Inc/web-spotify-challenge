import { api } from '../../services/api';
import { loadResults } from '../results';

export const onSearchSubmit = (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value;

  api.searchArtist(searchValue).then(loadResults);
};
