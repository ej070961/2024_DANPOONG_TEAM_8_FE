import styled from 'styled-components';
import ArrowLeftIcon from '../../assets/icon/arrow-left';

function Header({ step }: { step: number }) {
  return (
    <Container>
      <ArrowLeftIcon color={step <= 2 ? '#18181B' : '#FFFFFF'} />
      <ProgressContainer>
        <ActiveBox position={step <= 1 ? 0 : (step - 1) / 3} />
      </ProgressContainer>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;

  .icon-wrapper {
    display: absolute;
    left: 16px;
    top: 13px;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 240px;
  height: 5px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray200};
  margin: auto;
`;

const ActiveBox = styled.div<{ position: number }>`
  position: absolute;
  width: 80px;
  height: 5px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  left: ${({ position }) => `${position * 100}%`};
`;
