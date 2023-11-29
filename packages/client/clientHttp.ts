import axios from 'axios';

const clientHttp = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export default clientHttp;
