import { fetchData } from '../../utilities';

/**
 * This file holds all of methods to create our search ui.
 * Feel like it should have been a class too....?
 */

export const onSearchSubmit = (e) => {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value;

  const url = `/spotify/search?q=${searchValue}&type=artist`;
  fetchData(url);
}
