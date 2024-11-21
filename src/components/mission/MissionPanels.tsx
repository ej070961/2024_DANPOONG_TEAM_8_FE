import MissionPanel from './MissionPanel.tsx';
import MissionList from './MissionList.tsx';
import styled from 'styled-components';
import CurrentGoal from './goal/CurrentGoal.tsx';

const MissionPanels = () => {
  return (
    <MissionPanelContainer>
      <MissionPanel index={0}>
        <CurrentGoal />
      </MissionPanel>
      <MissionPanel index={1}>
        <MissionList type='onGoing' />
      </MissionPanel>
      <MissionPanel index={2}>
        <MissionList type='completed' />
      </MissionPanel>
    </MissionPanelContainer>
  );
};

export default MissionPanels;

const MissionPanelContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: scroll;
`;
