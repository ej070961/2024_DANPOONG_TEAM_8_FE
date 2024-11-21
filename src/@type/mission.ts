export interface GetAreaHomeRes {
  "percentage": number
  "progressAreaType": string
  "completeAreaTypes": string[]
}

export interface OnGoingMission {
  id: number;
  missionName: string;
  areaName: string;
  description: string;
  duration: string;
  steps: string[];
  completed: boolean;
}

export interface CompletedMission {
  id: number;
  missionName: string;
  areaName: string;
  completed: boolean;
}

export interface CompletedMissionsRes {
  missions: CompletedMission[];
}

export type MissionRecord = {
  id: number;
  content: string;
  feedback: string;
};

export interface MissionRecordRes {
  member: {
    id: number;
    kakaoId: number;
    nickname: string;
  };
  mission: {
    areaName: string;
    completed: boolean;
    id: number;
    missionName: string;
  }
}
