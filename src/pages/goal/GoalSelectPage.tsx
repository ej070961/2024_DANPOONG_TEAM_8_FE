import styled from 'styled-components';
import BackToolbar from '../../components/common/BackToolbar.tsx';
import GoalList from '../../components/common/GoalList.tsx';
import Description from '../../components/goal/Description.tsx';

const GoalSelectPage = () => {
  return (
    <GoalSelectContainer>
      <BackToolbar />
      <ContentContainer>
        <Description />
        <GoalList enabled={true} />
      </ContentContainer>
    </GoalSelectContainer>
  );
};

export default GoalSelectPage;

const GoalSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding-top: 13px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 17px;
  row-gap: 30px;
`;
