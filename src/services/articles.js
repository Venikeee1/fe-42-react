import { http } from './api';

const baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = (query, page = 1) => {
  return http.get(`${baseURL}/search?query=${query}&page=${page}`);
};
