import { http } from './api';

const baseURL = 'https://connections-api.herokuapp.com/users';

const getUserToken = () => {
  const persistedData = localStorage.getItem('persist:store');
  if (!persistedData) return;

  return JSON.parse(JSON.parse(persistedData).auth).token;
};

export const registerUser = (userData) => {
  return http.post(`${baseURL}/signup`, userData);
};

export const loginUser = (body) => {
  return http.post(`${baseURL}/login`, body);
};

export const getCurrentUser = () => {
  return http.get(`${baseURL}/current`, {
    headers: {
      Authorization: getUserToken(),
    },
  });
};

export const logoutUser = () => {
  return http.post(`${baseURL}/logout`, null, {
    headers: {
      Authorization: getUserToken(),
    },
  });
};
