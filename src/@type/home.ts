import { OnGoingMission } from './mission.ts';

export interface Character {
  id: number;
  characterType: string;
  characterName: string;
  level: number;
}

export interface UserHomeRes {
  member_nickname: string;
  missionProPer: number;
  character: Character;
  mission: OnGoingMission;
}
