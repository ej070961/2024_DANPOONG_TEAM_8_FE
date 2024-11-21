export interface GetAreaHomeRes {
  "progressAreaType": string
  "percentage": number
  "completeAreaTypes": string[]
}


export interface OnGoingMission {
  id: number;
  missionName: string;
  areaName: string;
  description: string;
  duration: string;
  steps: string[];
  isCompleted: boolean;
}

export interface CompletedMission {
  id: number;
  missionName: string;
  areaName: string;
  isCompleted: boolean;
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
  missionName: string;
  areaName: string;
}
