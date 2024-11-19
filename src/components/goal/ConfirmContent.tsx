import styled from 'styled-components';

interface ConfirmContentProps {
  goalType: string;
  image: string;
}

const ConfirmContent = ({ goalType, image }: ConfirmContentProps) => {
  return (
    <ConfirmContentContainer>
      <TextBold>해당 영역을 목표로 지정할까요?</TextBold>
      <Image src={image} />
      <TextBold style={{ marginTop: '40px' }}>{goalType} 마스터하기</TextBold>
      <TextMedium>
        일상생활에 필요한 요리, 집 관리, 의복 관리 등의
        <br />
        기술을 습득할 수 있는 미션이 주어져요
      </TextMedium>
    </ConfirmContentContainer>
  );
};

export default ConfirmContent;

const ConfirmContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 70px;
  width: 271px;
  height: 271px;
  object-fit: contain;
`;

const TextBold = styled.span`
  font: ${({ theme }) => theme.fonts.heading_sb_24px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const TextMedium = styled.span`
  margin-top: 14px;
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray500};
  text-align: center;
`;
