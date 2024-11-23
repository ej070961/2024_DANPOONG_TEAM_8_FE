import styled from 'styled-components';
function StatusBar({ step }: { step: number }) {
  return (
    <Container>
      {Array.from({ length: 4 }, (_, index) => (
        <ItemBox key={index} $active={step === index + 1} />
      ))}
    </Container>
  );
}

export default StatusBar;

const Container = styled.div`
  position: absolute;
  height: 8px;
  display: flex;
  gap: 8px;
  margin: auto 0;
  bottom: 110px;
`;
const ItemBox = styled.div<{ $active: boolean }>`
  height: 100%;
  ${({ $active, theme }) =>
    $active
      ? `width: 24px; background: ${theme.colors.primary}; border-radius: 100px; `
      : `width: 8px; background: ${theme.colors.gray300}; border-radius: 50%; `}
`;
