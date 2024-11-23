import { Box, Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import MissionPanels from './MissionPanels.tsx';
import { useTabStore } from '../../store/useTabStore.ts';

const MissionTabs = () => {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <MissionBoxContainer>
      <StyledTabs value={activeTab} onChange={setActiveTab}>
        <Tab label='자립목표' disableRipple />
        <Tab label='진행중인 미션' disableRipple />
        <Tab label='완료한 미션' disableRipple />
      </StyledTabs>
      <MissionPanels />
    </MissionBoxContainer>
  );
};

export default MissionTabs;

const MissionBoxContainer = styled(Box)`
  overflow-y: hidden;
  width: 100%;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

  .MuiTab-root {
    color: ${({ theme }) => theme.colors.gray400} !important;
    font: ${({ theme }) => theme.fonts.body_m_18px};
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
  }

  .Mui-selected {
    color: ${({ theme }) => theme.colors.gray900} !important;
    font: ${({ theme }) => theme.fonts.body_sb_18px};
    border: none;
    font-weight: bold;
  }

  .MuiTab-selected.Mui-focusVisible {
    outline: none;
  }

  .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.colors.gray900};
  }
`;
