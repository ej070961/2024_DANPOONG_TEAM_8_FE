import styled from 'styled-components';
import CheckCardList from '../../components/goal/CheckCardList.tsx';
import CheckGuide from '../../components/goal/CheckGuide.tsx';
import BackToolbar from '../../components/common/BackToolbar.tsx';

const GoalPreCheckPage = () => {
  return (
    <GoalPreCheckContainer>
      <BackToolbar isWhite={true} />
      <GuideContainer>
        <CheckGuide />
      </GuideContainer>
      <CheckCardList />
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
