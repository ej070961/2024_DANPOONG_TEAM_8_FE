import styled from 'styled-components';
import BackgroundImg from '../../assets/images/home_bg.png';
import NavBar from '../../components/Common/NavBar';
function Home() {
  return (
    <Wrapper>
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
