import styled from 'styled-components';
import { supportPrograms } from '../../apis/mocks/supportPrograms.ts';
import SupportCard from './SupportCard.tsx';

const SupportList = () => {
  return (
    <SupportListContainer>
      {supportPrograms.map((support) => (
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
