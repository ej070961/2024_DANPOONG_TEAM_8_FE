import styled from 'styled-components';
import { supportPrograms } from '../../apis/mocks/supportPrograms.ts';
import SupportCard from './SupportCard.tsx';

interface SupportListProps {
  supportType?: string;
}

const SupportList = ({ supportType }: SupportListProps) => {
  const data = supportType
    ? supportPrograms.filter((support) => support.supportType === supportType)
    : supportPrograms;

  return (
    <SupportListContainer>
      {data.map((support) => (
        <SupportCard key={support.id} support={support} />
      ))}
    </SupportListContainer>
  );
};

export default SupportList;

const SupportListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  gap: 16px;
`;
