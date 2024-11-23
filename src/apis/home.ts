import { axiosInstance } from './index.ts';
import { UserHomeRes } from '../@type/home.ts';

export const getHomeInfo: () => Promise<UserHomeRes> = async () => {
  try {
    const res = await axiosInstance.get('/home');
    return res.data;
  } catch (error) {
    console.error(error)
  }
};
