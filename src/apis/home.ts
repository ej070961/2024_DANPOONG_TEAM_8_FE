import { axiosInstance } from './index.ts';
import { UserMissionRes } from '../@type/home.ts';

export const getHomeInfo: () => Promise<UserMissionRes> = async () => {
  try {
    const res = await axiosInstance.get('/home');
    return res.data;
  } catch (error) {
    console.error(error)
  }
};
