import '../styles/reset.css';
import '../styles/global.css';
import { onSearchSubmit } from './components/search';


function main() {
  window.addEventListener('load', () => {
    const form = document.getElementById('search-form');
    form.addEventListener('submit', onSearchSubmit);
  });
};


//
// start app
//
main();



