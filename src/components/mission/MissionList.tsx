import styled from 'styled-components';
import MissionCard from './MissionCard.tsx';
import { useFetchMissions } from '../../hooks/useFetchMissions.ts';
import Loading from '../Common/Loading.tsx';
import { CompletedMission, OnGoingMission } from '../../@type/mission.ts';

interface MissionListProps {
  type: 'onGoing' | 'completed';
}

const MissionList = ({ type }: MissionListProps) => {
  // TODO 수정 예정
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
          missionType={mission.areaName}
          missionName={mission.missionName}
          isComplete={mission.isCompleted}
        />
      ))}
      {data?.length === 0 && <NoneMissionText>미션이 존재하지 않습니다.</NoneMissionText>}
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
  height: 70vh;
  font: ${({ theme }) => theme.fonts.heading_sb_24px};
  color: ${({ theme }) => theme.colors.gray900};
`
