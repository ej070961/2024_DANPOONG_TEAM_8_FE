import styled from 'styled-components';
import MissionTabs from '../../components/mission/MissionTabs.tsx';
import Toolbar from '../../components/Common/Toolbar.tsx';
import NavBar from '../../components/Common/NavBar.tsx';

const MissionPage = () => {
  return (
    <MissionContainer>
      <Toolbar title='미션' />
      <MissionTabs />
      <NavBar />
    </MissionContainer>
  );
};

export default MissionPage;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
