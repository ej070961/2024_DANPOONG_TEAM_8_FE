import { Divider, Modal } from '@mui/material';
import styled from 'styled-components';
import { OnGoingMission } from '../../@type/mission.ts';
import theme from '../../styles/theme.ts';

interface GuideModalProps {
  open: boolean;
  handleClose: () => void;
  mission?: OnGoingMission;
}

const GuideModal = ({ open, handleClose, mission }: GuideModalProps) => {
  return (
    <Modal open={open} onClose={handleClose} sx={{ border: 'none', borderRadius: 0, }}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CancelIcon src='/src/assets/svg/cancel.svg' onClick={handleClose}/>
        <MissionName>{mission?.missionName}</MissionName>
        <Description>{mission?.description}</Description>
        <Duration>
          수행 권장 기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{mission?.duration}
        </Duration>
        <Divider color={theme.colors.gray100} style={{ marginTop: '17px' }} />
        <ImageContainer>
          <Image src={'/src/assets/images/guide-slime.png'} />
          <SlimeComment>단계별로 수행 방법을 알려줄게</SlimeComment>
        </ImageContainer>
        <StepContainer>
          {mission?.steps.map((step, index) => (
            <StepContent key={index}>
              <Number>{index + 1}</Number>
              <Step>{step}</Step>
            </StepContent>
          ))}
        </StepContainer>
      </ModalContainer>
    </Modal>
  );
};

export default GuideModal;

const ModalContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 16px;
  border-radius: 30px;
  border: none;
  background-color: white;

  &:focus-visible {
    outline: none
  },
`;

const MissionName = styled.div`
  font: ${({ theme }) => theme.fonts.heading_sb_20px};
  color: ${({ theme }) => theme.colors.gray900};
  text-align: center;
  margin-top: 12px;
`;

const Description = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_14px};
  color: ${({ theme }) => theme.colors.gray900};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 18px 52px;
  margin-top: 15px;
  border: none;
  border-radius: 20px;
`;

const Duration = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray900};
  margin-top: 21px;
  margin-left: 7px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 9px;
`;

const Image = styled.img`
  width: 85px;
  height: 85px;
`;

const SlimeComment = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_14px};
  color: white;
  text-align: center;
  padding: 13px 31px;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 27px;
  margin-bottom: 43px;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 3px 10px;
  margin-top: 3px;
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Step = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const CancelIcon = styled.img`
  position: absolute;
  top: 22px;
  right: 22px;
  width: 18px;
  height: 18px;
`
