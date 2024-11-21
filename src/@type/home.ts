export interface Character {
  id: number;
  characterType: string;
  characterName: string;
  level: number;
}

export interface Mission {
  id: number;
  missionName: string;
  areaName: string;
  isCompleted: boolean;
}

export interface UserMissionRes {
  member_nickname: string;
  missionProPer: number;
  character: Character;
  mission: Mission;
}
