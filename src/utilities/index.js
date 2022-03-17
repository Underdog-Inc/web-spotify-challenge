import { buildAndRenderResults } from '../components/results';
import { showEmptyState } from '../components/results'

export const fetchData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      const data = res?.artists?.items || res?.artists;
      if (data?.length) {
        return buildAndRenderResults(data);
      } else {
        return showEmptyState()
      }
    })
    .catch(err => console.log(err));
};
