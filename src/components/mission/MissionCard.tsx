import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations.ts';
import CardButton from '../common/CardButton.tsx';
import GuideModal from './GuideModal.tsx';
import { useState } from 'react';
import { OnGoingMission } from '../../@type/mission.ts';

interface MissionProps {
  id: number;
  missionType: string;
  missionName: string;
  isComplete: boolean;
  isHome?: boolean;
  mission: OnGoingMission | undefined;
}

const MissionCard = ({
  id,
  missionType,
  missionName,
  isComplete,
  isHome,
  mission,
}: MissionProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = isComplete ? '완료' : '기록하기';

  const handleNavigateDetailPage = () => {
    navigate(`${navigations.MISSION_COMPLETE_DETAIL}/${id}`, { state: { missionName } });
  };

  const handleNavigateWritePage = () => {
    navigate(`${navigations.MISSION_RECORD_WRITE}/${id}`);
  };
  return (
    <MissionContainer onClick={isComplete ? handleNavigateDetailPage : handleOpen}>
      <GuideModal open={isComplete ? false : open} handleClose={handleClose} mission={mission!!} />
      <MissionType>{missionType}</MissionType>
      <MissionTitle>{missionName}</MissionTitle>
      <ButtonContainer>
        <CardButton
          isDisabled={isComplete}
          label={isHome ? '완료하기' : label}
          onClick={handleNavigateWritePage}
        />
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
