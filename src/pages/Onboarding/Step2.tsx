import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import OnboardingHeader from '../../components/Onboarding/OnboardingHeader';
import styled from 'styled-components';
import ObSecondPng from '../../assets/images/ob-second.png';
import StatusBar from '../../components/Onboarding/StatusBar';
function Step2() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <OnboardingHeader
        title={`미션을 완료하면 \n 버디가 성장해요`}
        description={`버디는 자립 준비 청년들을 위한 맞춤형 성장 서비스에요.\n 혼자가 아닌 버디와 함께 자립의 첫걸음을 준비해요!`}
      />
      <img src={ObSecondPng} />
      <StatusBar step={2} />
      <Button text='다음' onClick={() => navigate('/onboarding?step=3')} />
    </Wrapper>
  );
}

export default Step2;
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
