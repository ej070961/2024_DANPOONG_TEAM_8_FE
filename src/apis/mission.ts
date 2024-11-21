import { axiosInstance } from './index.ts';
import {
  CompletedMissionsRes,
  GetAreaHomeRes,
  MissionRecord,
  MissionRecordRes,
  OnGoingMission,
} from '../@type/mission.ts';

export const getAreaHome = async () => {
  try {
    const res = await axiosInstance.get<GetAreaHomeRes>('/area/home');
    return res.data;
  } catch (error) {
    console.error(error);
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

export const getOnGoingMissions = async () => {
  try {
    const res = await axiosInstance.get<OnGoingMission[]>('/missions/ongoing');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCompletedMissions = async () => {
  try {
    const res = await axiosInstance.get<CompletedMissionsRes>('/missions/completed');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
