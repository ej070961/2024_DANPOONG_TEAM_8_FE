import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface SupportPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const SupportPanel = ({ children, index, value }: SupportPanelProps) => {
  return (
    <SupportPanelContainer
      role='tabpanel'
      hidden={value !== index}
      id={`support-tab-panel-${index}`}
      aria-labelledby={`support-tab-${index}`}
    >
      {value === index && <ContentBox>{children}</ContentBox>}
    </SupportPanelContainer>
  );
};

export default SupportPanel;

const SupportPanelContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 68px;
`;

const ContentBox = styled(Box)`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
`;
