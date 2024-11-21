import styled from 'styled-components';
import MissionCard from './MissionCard.tsx';
import { useFetchMissions } from '../../hooks/useFetchMissions.ts';
import Loading from '../Common/Loading.tsx';
import { CompletedMission, OnGoingMission } from '../../@type/mission.ts';
import { AreaType } from '../../@type/goal.ts';

interface MissionListProps {
  type: 'onGoing' | 'completed';
}

const MissionList = ({ type }: MissionListProps) => {
  const { data, isPending } = useFetchMissions(type);

  if (isPending) {
    return <Loading />;
  }

  return (
    <MissionListContainer>
      {data?.map((mission: OnGoingMission | CompletedMission) => (
        <MissionCard
          key={mission.id}
          id={mission.id}
          missionType={AreaType[mission.areaName]}
          missionName={mission.missionName}
          isComplete={mission.completed}
        />
      ))}
      {data?.length === 0 && (
        <NonMissionContainer>
          <NoneMissionText>아직 완료한 미션이 없어요!</NoneMissionText>
          <Image src={'/src/assets/images/slime2.png'} />
        </NonMissionContainer>
      )}
    </MissionListContainer>
  );
};

export default MissionList;

const MissionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 16px;
`;

const NoneMissionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray400};
`;

const NonMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Image = styled.img`
  width: 120px;
  height: 100px;
`
