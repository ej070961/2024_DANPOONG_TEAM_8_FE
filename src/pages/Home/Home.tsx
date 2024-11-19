import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../assets/images/home_bg.png';
import NavBar from '../../components/Common/NavBar';
import MissionInfo from '../../components/Home/MissionInfo';
import ChatIcon from '../../assets/icon/chat-icon';
import ChatIntroSvg from '../../assets/svg/chat-intro.svg?react';
import StarSvg from '../../assets/svg/star.svg?react';
import PolygonSvg from '../../assets/svg/polygon.svg?react';
import Chick from '../../assets/images/chick.png';

function Home() {
  return (
    <Wrapper>
      <ContentContainer>
        {/* 미션관리, 챗봇 버튼 영역 */}
        <HeaderSection>
          <MissionInfo />
          <ChatBtn>
            <ChatIcon />
          </ChatBtn>
          <ChatIntroMsg />
        </HeaderSection>
        {/* 캐릭터 영역 */}
        <CharacterWrapper />
        <CharacterSection>
          <button className='msg-wrapper'>오늘은 무슨 일 없었어?</button>
          <PolygonSvg />
          <ImgContainer>
            <StyledStar left={80} top={10} />
            <StyledStar left={50} top={60} />
            <StyledStar right={50} top={30} />
            <img src={Chick} />
          </ImgContainer>
          <button className='name-wrapper'>버디버디</button>
        </CharacterSection>
      </ContentContainer>
      <NavBar />
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 480px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${BackgroundImg});
  background-size: 100vw 100vh;
`;
const ContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 11px 16px 110px; 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
`;
const ChatBtn = styled.button`
  min-width: 55px;
  width: 55px;
  height: 55px;

  border-radius: 50%;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 사라지는 애니메이션 정의
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// 애니메이션이 적용된 ChatIntroSvg 스타일 정의
const ChatIntroMsg = styled(ChatIntroSvg)`
  position: absolute;
  bottom: -60px;
  right: 5px;
  animation: ${fadeOut} 1s ease-out 4s forwards; /* 4초 후 서서히 사라짐 */
`;

// 애니메이션 정의
const grow = keyframes`
  0% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 280px;
    height: 280px;
  }
`;
const CharacterWrapper = styled.div`
  position: absolute;
  top: 55%; /* 위치 조정 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */

  background: rgba(255, 238, 171, 0.8);
  filter: blur(75px);
  border-radius: 50%;
  animation: ${grow} 2s infinite alternate; /* 애니메이션 설정 */
`;
// 스타일드 컴포넌트 정의
const ImgContainer = styled.div`
  position: relative;
  margin-bottom: -5px;

  > img {
    height: 250px;
  }
`;

const Stargrow = keyframes`
   0% {
    transform: scale(0.5); 
  }
  100% {
    transform: scale(1.3); 
  }
`;

const StyledStar = styled(StarSvg)<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
}>`
  position: absolute;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  animation: ${Stargrow} 2s infinite alternate; /* 애니메이션 설정 */
`;

const CharacterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  z-index: 20;

  .msg-wrapper {
    padding: 16px 34px;
    margin-bottom: 5px;
    height: 57px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 35px;

    ${({ theme }) => theme.fonts.body_m_18px};
    color: ${({ theme }) => theme.colors.gray900};
  }

  .name-wrapper {
    padding: 0 26px;

    height: 35px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(9.83607px);
    border-radius: 22.9508px;

    ${({ theme }) => theme.fonts.body_m_14px};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;
