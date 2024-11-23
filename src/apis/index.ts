import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore.ts';

export const axiosInstance = axios.create({
  baseURL: 'https://port-0-test-m3kd03l2a7de4974.sel4.cloudtype.app',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${useAuthStore.getState().accessToken!}`,
  },
  withCredentials: true,
});

export const axiosFastInstance = axios.create({
  baseURL: 'http://3.208.248.230:3000',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'kakao-id': useAuthStore.getState().kakaoId,
  },
  //withCredentials: true,
});
