import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_PROJECTS_API,
  timeout: 30000,
  timeoutErrorMessage:
    'Requisição demorou muito para responder, requisição foi cancelada.',
});

export default api;
