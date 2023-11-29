import axios from 'axios';

const clientHttp = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

clientHttp.interceptors.response.use((res) => {
  console.log('[ clientHttp.ts - 11 ] - response:', res);

  return res;
});

export default clientHttp;
