import styled from 'styled-components';
import LogoSvg from '../../assets/svg/logo.svg?react';
import BackgroundSVg from '../../assets/svg/login-background.svg?react';
import Slime from '../../assets/images/slime2.png';
import CharactersPng from '../../assets/images/characters.png';
import KaKaoButton from '../../components/login/KaKaoButton';
function Login() {
  return (
    <LoginContainer>
      <div className='logo-wrapper'>
        <img src={Slime} className='slime' />
        <LogoSvg />
        <span>나만의 자립친구, 버디</span>
      </div>

      <KaKaoButton />

      <Background>
        <img src={CharactersPng} style={{ position: 'absolute', top: -110 }} />
        <BackgroundSVg />
      </Background>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 400px;
  height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .logo-wrapper {
    position: relative;
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      ${({ theme }) => theme.fonts.body_m_18px};
      // font-size: 20px;
      color: ${({ theme }) => theme.colors.gray900};
    }
  }

  .slime {
    position: absolute;
    width: 80px;
    left: 20px;
    top: -40px;
  }
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
`;
