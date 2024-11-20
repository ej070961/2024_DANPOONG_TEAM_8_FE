import styled from 'styled-components';
import KakaoIcon from '../../assets/icon/kakao-icon';
import { kakaoLogin } from '../../apis/user';
function KaKaoButton() {
  const handleLogin = async () => {
    const res = await kakaoLogin();
    window.location.href = res.location;
  };
  return (
    <Container onClick={handleLogin}>
      <KakaoIcon />
      카카오로 로그인하기
    </Container>
  );
}

export default KaKaoButton;

const Container = styled.button`
  width: 100%;
  height: 60px;
  margin: 0 25px 50px 25px;
  background-color: #fee500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  border-radius: 18px;
  z-index: 10;

  ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
`;
