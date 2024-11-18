import styled from 'styled-components';
import BackgroundImg from '../../assets/images/home_bg.png';
import NavBar from '../../components/Common/NavBar';
import MissionInfo from '../../components/Home/MissionInfo';
function Home() {
  return (
    <Wrapper>
      <ContentContainer>
        {/* 미션관리, 챗봇 버튼 영역 */}
        <HeaderSection>
          <MissionInfo />
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
