import { http } from './api';

const baseURL = 'https://connections-api.herokuapp.com/users';

export const registerUser = (userData) => {
  return http.post(`${baseURL}/signup`, userData);
};
