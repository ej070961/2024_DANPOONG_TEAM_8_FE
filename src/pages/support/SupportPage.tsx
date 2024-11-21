import styled from 'styled-components';
import Toolbar from '../../components/Common/Toolbar.tsx';
import SupportTabs from '../../components/support/SupportTabs.tsx';
import NavBar from '../../components/common/NavBar.tsx';

const SupportPage = () => {
  return (
    <SupportContainer>
      <Toolbar title='지원제도' />
      <SupportTabs />
      <NavBar />
    </SupportContainer>
  );
};

export default SupportPage;

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
