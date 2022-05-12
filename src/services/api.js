import axios from 'axios';

export const http = {
  get(url) {
    return axios.get(url);
  },
  post(url, body) {
    return axios.post(url, body);
  },
};
