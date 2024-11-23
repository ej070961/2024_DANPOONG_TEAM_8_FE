import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore.ts';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SPRING_BOOT_SERVER_URL,
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
  baseURL: import.meta.env.VITE_FAST_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosFastInstance.interceptors.request.use((config) => {
  const kakaoId = useAuthStore.getState().kakaoId;
  if (kakaoId) {
    config.headers['kakao-id'] = kakaoId;
  }
  return config;
});
