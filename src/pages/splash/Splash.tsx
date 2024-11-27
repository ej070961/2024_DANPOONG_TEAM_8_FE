import styled from 'styled-components';
import LogoSvg from '../../assets/svg/logo.svg?react';
import Slime from '../../assets/images/slime2.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations';
function Splash() {
  const [opacity, setOpacity] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    if (opacity > 0) {
      const timer = setTimeout(() => {
        setOpacity((prev) => Math.max(prev - 8, 0)); // 상태 업데이트
      }, 200);

      return () => clearTimeout(timer); // 타이머 정리
    } else {
      // 페이지 이동

      navigate(navigations.ONBOARDING);
    }
  }, [opacity]);

  return (
    <Wrapper>
      <LogoSvg />
      <img src={Slime} />
    </Wrapper>
  );
}

export default Splash;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 300px;
  }

  background: #ffffff;
`;
