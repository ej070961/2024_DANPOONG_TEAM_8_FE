import { useState } from 'react';
import * as React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import SupportPanels from './SupportPanels.tsx';

const supportTabs = () => [
  {
    id: 0,
    label: '전체',
  },
  {
    id: 1,
    label: '경제',
  },
  {
    id: 2,
    label: '주거',
  },
  {
    id: 3,
    label: '진로',
  },
  {
    id: 4,
    label: '법률',
  },
  {
    id: 5,
    label: '건강',
  },
];

const SupportTabs = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SupportBoxContainer>
      <StyledTabs value={value} onChange={handleChange} centered>
        {supportTabs().map((tab) => (
          <Tab key={tab.id} label={tab.label} disableRipple />
        ))}
      </StyledTabs>
      <SupportPanels value={value} />
    </SupportBoxContainer>
  );
};

export default SupportTabs;

const SupportBoxContainer = styled(Box)`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const StyledTabs = styled(Tabs)`
  padding-left: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

  .MuiTab-root {
    color: ${({ theme }) => theme.colors.gray400} !important;
    font: ${({ theme }) => theme.fonts.body_m_18px};
    font-weight: bold;
    outline: none;
    border: none;
    max-width: 70px;
    width: 61px;
    min-width: 50px;
    padding-left: 6px;
    padding-right: 6px;
  }

  &:focus {
    outline: none;
  }

  .Mui-selected {
    color: ${({ theme }) => theme.colors.gray900} !important;
    font: ${({ theme }) => theme.fonts.body_sb_18px};
    font-weight: bold;
    border: none;
  }

  .MuiTab-selected.Mui-focusVisible {
    outline: none;
  }

  .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.colors.gray900};
  }
`;
