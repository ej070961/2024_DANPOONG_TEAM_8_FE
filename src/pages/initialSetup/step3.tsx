//어떤 사람인지 선택하는 화면
import styled from 'styled-components';
import Header from '../../components/initialSetup/Header';
import CheckGuide from '../../components/goal/CheckGuide';
import CheckCardList from '../../components/goal/CheckCardList';
import { useLocation } from 'react-router-dom';
function Step3() {
  const location = useLocation();
  const { type, id } = location.state;
  return (
    <Wrapper>
      <Header step={3} />
      <GuideContainer>
        <CheckGuide />
      </GuideContainer>
      <CheckCardList type={type} areaId={id} />
    </Wrapper>
  );
}

export default Step3;

const Wrapper = styled.div`
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #7676ff 0%, #c5c5ff 67%, #d6ecff 100%);
`;
const GuideContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 56px 16px 44px 16px;
`;
