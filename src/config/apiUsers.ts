import axios from 'axios';

const apiUsers = axios.create({
  baseURL: process.env.REACT_APP_USERS_API,
  timeout: 30000,
  timeoutErrorMessage:
    'Requisição demorou muito para responder, requisição foi cancelada.',
});

export default apiUsers;
