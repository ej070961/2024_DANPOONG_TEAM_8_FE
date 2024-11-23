import SupportPanel from './SupportPanel.tsx';
import styled from 'styled-components';
import SupportList from './SupportList.tsx';
import SupportOverviewCard from './SupportOverviewCard.tsx';

interface PanelsProps {
  value: number;
}

const SupportPanels = ({ value }: PanelsProps) => {
  return (
    <SupportPanelsContainer>
      <SupportPanel index={0} value={value}>
        <SupportOverviewCard />
        <SupportList />
      </SupportPanel>
      <SupportPanel index={1} value={value}>
        <SupportList supportType='경제' />
      </SupportPanel>
      <SupportPanel index={2} value={value}>
        <SupportList supportType='주거' />
      </SupportPanel>
      <SupportPanel index={3} value={value}>
        <SupportList supportType='진로' />
      </SupportPanel>
      <SupportPanel index={4} value={value}>
        <SupportList supportType='법률' />
      </SupportPanel>
      <SupportPanel index={5} value={value}>
        <SupportList supportType='건강' />
      </SupportPanel>
    </SupportPanelsContainer>
  );
};

export default SupportPanels;

const SupportPanelsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
