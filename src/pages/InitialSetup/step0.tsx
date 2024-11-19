//어떤 사람인지 선택하는 화면
import styled from 'styled-components';
import Header from '../../components/InitialSetup/Header';
function Step0() {
  return (
    <Wrapper>
      <Header step={0} />
    </Wrapper>
  );
}

export default Step0;

const Wrapper = styled.div`
  max-width: 480px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
