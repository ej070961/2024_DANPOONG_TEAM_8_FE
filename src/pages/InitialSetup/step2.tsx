//어떤 사람인지 선택하는 화면
import styled from 'styled-components';
import Header from '../../components/InitialSetup/Header';
import Description from '../../components/goal/Description';
import GoalList from '../../components/Common/GoalList';
function Step2() {
  return (
    <Wrapper>
      <Header step={2} />
      <ContentContainer>
        <Description />
        <GoalList enabled={true} init={true} />
      </ContentContainer>
    </Wrapper>
  );
}

export default Step2;

const Wrapper = styled.div`
  max-width: 480px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  padding: 30px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
`;
