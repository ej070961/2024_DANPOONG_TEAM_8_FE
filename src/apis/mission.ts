import { axiosInstance } from './index.ts';
import {
  CompletedMissionsRes,
  GetAreaHomeRes,
  MissionRecord,
  MissionRecordRes,
  OnGoingMission,
} from '../@type/mission.ts';

export const getAreaHome: () => Promise<GetAreaHomeRes> = async () => {
  try {
    const res = await axiosInstance.get('/area/home');
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postMissionRecord = async ({ id, content, feedback }: MissionRecord) => {
  try {
    const res = await axiosInstance.post(
      '/missionRecord/create',
      { content, feedback },
      {
        params: {
          mission: id,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMissionRecord = async (id: number) => {
  try {
    const res = await axiosInstance.get<MissionRecordRes>(`/missionRecord/`, {
      params: {
        mission: id,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOnGoingMissions: () => Promise<OnGoingMission[]> = async () => {
  try {
    const res = await axiosInstance.get('/missions/ongoing');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCompletedMissions: () => Promise<CompletedMissionsRes> = async () => {
  try {
    const res = await axiosInstance.get('/missions/completed');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
