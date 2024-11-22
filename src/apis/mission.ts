import { axiosFastInstance, axiosInstance } from './index.ts';
import {
  CompletedMissionsRes,
  GetAreaHomeRes,
  MissionData,
  MissionDetailRes,
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

export const postMissionRecord: ({}: MissionRecord) => Promise<MissionData> = async ({
  id,
  content,
  feedback,
}: MissionRecord) => {
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
    console.log(res)
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMissionRecord = async (id: string) => {
  try {
    const res = await axiosInstance.get<MissionRecordRes>(`/missionRecord/create`, {
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

export const postBuddyFeedback: (missionId: string) => Promise<MissionDetailRes> = async (
  missionId: string,
) => {
  try {
    const res = await axiosFastInstance.post(`/api/buddy-feedback?mission_id=${missionId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
