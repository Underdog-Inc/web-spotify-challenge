import { testFn } from './test-file';

window.addEventListener('load', () => {
  console.log('page loaded');

  // check imported js
  setTimeout(() => {
    console.log('log after 2 seconds:');
    testFn();
  }, 2000);
});
