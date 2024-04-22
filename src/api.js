import axios from 'axios';

const baseURL = 'https://full-stack-portfolio-server.vercel.app';

const api = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
