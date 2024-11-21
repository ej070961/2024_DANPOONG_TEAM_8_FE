import { axiosInstance } from './index.ts';

export const getCompleteArea: () => Promise<string[]> = async () => {
  try {
    const res = await axiosInstance.get('/area/next/create');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
