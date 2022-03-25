import { onSearchSubmit } from './components/search';

// TODO: feel like webpack can do this without importing here
import '../styles/reset.css';
import '../styles/global.css';

// TODO: probably something completely different.
// I don't know how files structures work outside of React
window.addEventListener('load', () => {
  console.log('page loaded');

  const form = document.getElementById('search-form');
  form.addEventListener('submit', onSearchSubmit);
});
