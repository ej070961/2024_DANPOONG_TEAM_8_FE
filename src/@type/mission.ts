import { Character } from './home.ts';

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

export interface MissionDetailRes {
  status: string;
  message: string;
  buddy_feedback: string;
  char_type: string;
  character_level: number;
  user_mission: string;
  user_feedback: string;
}

export interface MissionResponse2DTO {
  id: number;
  missionName: string;
  areaName: string;
  completed: boolean;
}

export interface MemberInfoDTO {
  id: number;
  kakaoId: number;
  nickname: string;
}

export interface MissionData {
  id: number;
  content: string;
  feedback: string;
  allCompleted: boolean;
  missionResponse2DTO: MissionResponse2DTO;
  memberInfoDTO: MemberInfoDTO;
  characterResponseDTOForMission: Character;
}
