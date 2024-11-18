import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { useTabStore } from '../../store/useTabStore.ts';

interface MissionPanelProps {
  children?: React.ReactNode;
  index: number;
}

const MissionPanel = ({ children, index }: MissionPanelProps) => {
  const { activeTab } = useTabStore();
  return (
    <MissionPanelContainer
      role='tabpanel'
      hidden={activeTab !== index}
      id={`mission-tab-panel-${index}`}
      aria-labelledby={`mission-tab-${index}`}
    >
      {activeTab === index && <ContentBox>{children}</ContentBox>}
    </MissionPanelContainer>
  );
};

export default MissionPanel;

const MissionPanelContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 68px;
`;

const ContentBox = styled(Box)`
  padding-top: 24px;
`;
