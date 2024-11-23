import { FadeLoader } from 'react-spinners';
import theme from '../../styles/theme.ts';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <FadeLoader color={theme.colors.primary} />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
