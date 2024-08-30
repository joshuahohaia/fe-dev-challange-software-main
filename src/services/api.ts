import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getProperties = async () => {
  const response = await api.get('/properties');
  return response.data;
};
