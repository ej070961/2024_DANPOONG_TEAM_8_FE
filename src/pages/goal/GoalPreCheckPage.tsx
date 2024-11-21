import styled from 'styled-components';
import CheckCardList from '../../components/goal/CheckCardList.tsx';
import CheckGuide from '../../components/goal/CheckGuide.tsx';
import BackToolbar from '../../components/Common/BackToolbar.tsx';
import { useLocation } from 'react-router-dom';

const GoalPreCheckPage = () => {
  const location = useLocation();
  const { type, id } = location.state;

  return (
    <GoalPreCheckContainer>
      <BackToolbar isWhite={true} />
      <GuideContainer>
        <CheckGuide />
      </GuideContainer>
      <CheckCardList type={type} areaId={id} />
    </GoalPreCheckContainer>
  );
};

export default GoalPreCheckPage;

const GoalPreCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background: linear-gradient(90deg, #7676ff 0%, #c5c5ff 67%, #d6ecff 100%);
  padding-top: 13px;
`;

const GuideContainer = styled.div`
  margin: 20px 16px 44px 16px;
`;
