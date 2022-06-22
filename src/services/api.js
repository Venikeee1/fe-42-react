import axios from 'axios';

export const http = {
  get(url, options) {
    return axios.get(url, options);
  },
  post(url, body, options) {
    return axios.post(url, body, options);
  },
};
