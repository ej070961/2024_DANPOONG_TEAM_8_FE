import MissionPanel from './MissionPanel.tsx';
import GoalList from '../common/GoalList.tsx';
import MissionList from './MissionList.tsx';
import { activatedMissionList } from '../../apis/mocks/activatedMissionList.ts';
import { completedMissionList } from '../../apis/mocks/completedMissionList.ts';
import styled from 'styled-components';
import CurrentGoal from './goal/CurrentGoal.tsx';

const MissionPanels = () => {
  return (
    <MissionPanelContainer>
      <MissionPanel index={0}>
        <CurrentGoal />
        <MissionListText>자립목표 리스트</MissionListText>
        <GoalList enabled={false} />
      </MissionPanel>
      <MissionPanel index={1}>
        <MissionList missions={activatedMissionList} />
      </MissionPanel>
      <MissionPanel index={2}>
        <MissionList missions={completedMissionList} />
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

const MissionListText = styled.div`
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
  padding-left: 8px;
  padding-top: 34px;
  padding-bottom: 14px;
`;
