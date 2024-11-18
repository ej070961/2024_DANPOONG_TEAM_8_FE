import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../assets/images/home_bg.png';
import NavBar from '../../components/Common/NavBar';
import MissionInfo from '../../components/Home/MissionInfo';
import ChatIcon from '../../assets/icon/chat-icon';
import ChatIntroSvg from '../../assets/svg/chat-intro.svg?react';
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
