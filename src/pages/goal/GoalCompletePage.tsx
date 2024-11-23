import styled, { keyframes } from 'styled-components';
import BackToolbar from '../../components/common/BackToolbar.tsx';
import CustomButton from '../../components/common/CustomButton.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharacterType } from '../../constant/character.ts';
import { navigations } from '../../constant/navigations.ts';
import { AreaType } from '../../@type/goal.ts';

const GoalCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { areaName, characterType } = location.state || {};
  console.log('areaName: ', areaName)
  console.log(characterType)
  console.log(CharacterType[characterType])
  const character = CharacterType[characterType];

  const handleNavigate = () => {
    navigate(navigations.GOAL, { replace: true });
  };
  return (
    <GoalCompletionContainer>
      <BackToolbar title=' ' />
      <ContentContainer>
        <TextLarge>{AreaType[areaName]}기술 목표 완수</TextLarge>
        <TextSmall style={{ paddingTop: '14px' }}>
          자립을 위한 중요한 첫걸음을 완성했어요
          <br />
          이제 더 많은 일상을 스스로 관리할 수 있어요!
        </TextSmall>
        <GlowingImage src={character} />
        <TextLarge style={{ paddingTop: '41px' }}>버디가 한 층 더 성장했어요!</TextLarge>
      </ContentContainer>
      <ButtonContainer>
        <CustomButton label='다음 목표 설정하러가기' isValid={true} onClick={handleNavigate} />
      </ButtonContainer>
    </GoalCompletionContainer>
  );
};

export default GoalCompletePage;

const GoalCompletionContainer = styled.div`
  padding: 13px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  padding: 0 18px 0 18px;
  align-items: center;
  justify-content: center;
`;

const TextLarge = styled.div`
  font: ${({ theme }) => theme.fonts.heading_sb_24px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const TextSmall = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray500};
`;

const ButtonContainer = styled.div`
  position: absolute;
  max-width: 480px;
  bottom: 0;
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  padding: 0 16px 0 16px;
  justify-content: center; /* 버튼 가운데 정렬 */
`;

const glowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 10px rgba(255, 200, 0, 0.4));
  }
  10% {
    filter: drop-shadow(0 0 20px rgba(255, 210, 0, 0.6));
  }
  20% {
    filter: drop-shadow(0 0 40px rgba(255, 220, 0, 0.8));
  }
  30% {
    filter: drop-shadow(0 0 60px rgba(255, 230, 20, 0.9));
  }
  40% {
    filter: drop-shadow(0 0 80px rgba(255, 240, 40, 1));
  }
  50% {
    filter: drop-shadow(0 0 100px rgba(255, 250, 60, 1));
  }
  60% {
    filter: drop-shadow(0 0 80px rgba(255, 240, 40, 1));
  }
  70% {
    filter: drop-shadow(0 0 60px rgba(255, 230, 20, 0.9));
  }
  80% {
    filter: drop-shadow(0 0 40px rgba(255, 220, 0, 0.8));
  }
  90% {
    filter: drop-shadow(0 0 20px rgba(255, 210, 0, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(255, 200, 0, 0.4));
  }
`;

const GlowingImage = styled.img`
  width: 361px;
  height: 305px;
  padding-top: 25px;
  filter: drop-shadow(0 0 20px rgba(255, 223, 109, 0.6));
  animation: ${glowAnimation} 0.6s infinite;
`;
