import '../styles/reset.css';
import '../styles/global.css';
import styles from '../styles/styles.scss';

window.addEventListener('load', () => {
  /* add base html styles */
  const header = document.querySelector('h1');
  header.setAttribute('class', styles.header);

  const page = document.getElementById('page');
  page.setAttribute('class', styles.page);

  const searchSection = document.getElementById('search-section');
  searchSection.setAttribute('class', styles.searchSection);
  /* end styles */


  /* track search */
  const form = document.getElementById('search-form');
  const onSearchSubmit = (e) => {
    e.preventDefault();

    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;

    fetch(`/spotify/search?q=${searchValue}&type=track`)
      .then(res => res.json())
      .then(res => {
        // do something with these results
        console.log(res);
      })
      .catch(err => console.log('ERROR:', err));
  }

  form.addEventListener('submit', onSearchSubmit);
  /* end track search */
});
