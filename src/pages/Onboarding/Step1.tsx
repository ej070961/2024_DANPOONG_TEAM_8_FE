import { useNavigate } from 'react-router-dom';
import Button from '../../components/Common/Button';
import styled from 'styled-components';
import OnboardingHeader from '../../components/Onboarding/OnboardingHeader';
import ObFirstPng from '../../assets/images/ob-first.png';
import StatusBar from '../../components/Onboarding/StatusBar';
function Step1() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <OnboardingHeader
        title={`혼자가 아닌 함께!\n 자립의 첫걸음`}
        description={`버디는 자립 준비 청년들을 위한 맞춤형 성장 서비스에요.\n 혼자가 아닌 버디와 함께 자립의 첫걸음을 준비해요!`}
      />
      <img src={ObFirstPng} width={'90%'} />
      <StatusBar step={1} />
      <Button text='다음' onClick={() => navigate('/onboarding?step=2')} />
    </Wrapper>
  );
}

export default Step1;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 0;
  > img {
    margin: auto;
  }
`;
