import { fetchData } from '../results';

export const onSearchSubmit = (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value;
  const filterInput = document.getElementById('filter-type');
  const filterValue = filterInput.value;

  const url = `/spotify/search?q=${searchValue}&type=${filterValue}`;
  fetchData(url);
}
