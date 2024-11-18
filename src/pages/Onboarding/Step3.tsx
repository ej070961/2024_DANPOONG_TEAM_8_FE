import styled from 'styled-components';
import OnboardingHeader from '../../components/Onboarding/OnboardingHeader';
import Button from '../../components/Common/Button';
import { useNavigate } from 'react-router-dom';
import ObThirdPng from '../../assets/images/ob-third.png';
import StatusBar from '../../components/Onboarding/StatusBar';
function Step3() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <OnboardingHeader
        title={`자립 지원정보를 \n한눈에 확인해보세요`}
        description={`청년들의 주거, 교육, 생활비 등을 지원하는 \n다양한 정보를 한눈에 쉽게 확인해보세요!`}
      />
      <img src={ObThirdPng} />
      <StatusBar step={3} />
      <Button text='다음' onClick={() => navigate('/home')} />
    </Wrapper>
  );
}

export default Step3;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 0;
`;
