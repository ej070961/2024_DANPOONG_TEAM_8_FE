import styled from 'styled-components';

interface ProgressProps {
  value: number;
}

function ProgressBar({ value }: ProgressProps) {
  return (
    <Container>
      <ProgressBox percent={value}>
        <div className='content' />
      </ProgressBox>
      <p>{value}%</p>
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;

  > p {
    ${({ theme }) => theme.fonts.body_m_16px};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const ProgressBox = styled.div<{ percent: number }>`
  position: relative;
  width: 80%;
  height: 30px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary_lighten400};

  .content {
    position: absolute;
    left: 0;
    width: ${({ percent }) => percent}%;
    height: 30px;
    background: linear-gradient(90deg, #7676ff 0%, #c5c5ff 119.85%);
    border-radius: 20px;
  }
`;
