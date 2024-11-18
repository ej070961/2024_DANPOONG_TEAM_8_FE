import styled from 'styled-components';
import MissionCard from './MissionCard.tsx';
import { CompletedMission, ActivatedMission } from '../../types';

interface MissionListProps {
  missions: ActivatedMission[] | CompletedMission[];
}

const MissionList = ({ missions }: MissionListProps) => {
  return (
    <MissionListContainer>
      {missions.map((mission) => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
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
