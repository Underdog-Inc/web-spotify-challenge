import { testFn } from './test-file';
import styles from './styles.scss';

window.addEventListener('load', () => {
  // check imported js
  setTimeout(() => {
    console.log('log after 2 seconds:');
    testFn();
  }, 2000);

  const header = document.querySelector('h1');
  header.setAttribute('class', styles.header);
});
