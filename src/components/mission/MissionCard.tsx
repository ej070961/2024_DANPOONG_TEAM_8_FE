import styled from 'styled-components';
import CardButton from '../common/CardButton.tsx';
import { ActivatedMission, CompletedMission } from '../../types';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations.ts';

interface MissionProps {
  mission: ActivatedMission | CompletedMission;
}

const MissionCard = ({ mission }: MissionProps) => {
  const navigate = useNavigate();

  const label = mission.isComplete ? '완료' : '기록하기';
  const path = mission.isComplete
    ? navigations.MISSION_COMPLETE_DETAIL
    : navigations.MISSION_RECORD_WRITE;

  const handleNavigate = () => {
    navigate(`${path}/${mission.id}`);
  };
  return (
    <MissionContainer onClick={handleNavigate}>
      <MissionType>{mission.missionType}</MissionType>
      <MissionTitle>{mission.missionTitle}</MissionTitle>
      <ButtonContainer>
        <CardButton isDisabled={mission.isComplete} label={label} onClick={handleNavigate} />
      </ButtonContainer>
    </MissionContainer>
  );
};

export default MissionCard;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 112px;
  border-radius: 30px;
  border: none;
  background-color: white;
  padding: 20px 24px 16px 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MissionType = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_14px};
  color: ${({ theme }) => theme.colors.gray500};
`;

const MissionTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
`;
