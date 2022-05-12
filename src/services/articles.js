import { http } from './api';

const baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = () => {
  return http.get(`${baseURL}/search?query=react`);
};
