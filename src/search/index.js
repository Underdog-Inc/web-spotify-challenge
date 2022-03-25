import { fetchData } from '../results';

export const onSearchSubmit = (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value;

  const url = `/spotify/search?q=${searchValue}&type=artist`;
  fetchData(url);
}
