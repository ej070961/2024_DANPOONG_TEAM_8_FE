import styled from 'styled-components';

const CheckGuide = () => {
  return (
    <CheckGuideContainer>
      <BoldText>
        보다 정확한 미션 제공을 위해
        <br />
        사전 점검표를 작성해주세요
      </BoldText>
      <MediumText>
        자립준비정도를 파악하여
        <br />
        맞춤형 미션을 제공해드려요
      </MediumText>
    </CheckGuideContainer>
  );
};

export default CheckGuide;

const CheckGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 8px;
`;

const BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.heading_sb_24px};
  color: white;
`;

const MediumText = styled.span`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: white, 0.6;
`;
