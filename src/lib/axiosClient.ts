import axios from 'axios';

export const axiosClient = axios.create();

axiosClient.defaults.baseURL =
  'http://localhost:3000' || process.env.NEXT_PUBLIC_API_HOSTNAME;

export default axiosClient;
