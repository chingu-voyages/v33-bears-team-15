import axios from 'axios';

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:3000';

export default axiosClient;
