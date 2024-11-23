import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore.ts';

export const axiosInstance = axios.create({
  baseURL: 'https://port-0-test-m3kd03l2a7de4974.sel4.cloudtype.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export const axiosFastInstance = axios.create({
  baseURL: 'http://3.208.248.230:3000',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  //withCredentials: true,
});

axiosFastInstance.interceptors.request.use((config) => {
  const kakaoId = useAuthStore.getState().kakaoId;
  if (kakaoId) {
    config.headers['kakao-id'] = kakaoId;
  }
  return config;
});
