import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://port-0-test-m3kd03l2a7de4974.sel4.cloudtype.app',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
});
