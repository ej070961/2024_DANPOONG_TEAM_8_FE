import styled from 'styled-components';
import ProgressBar from './ProgressBar';

function MissionInfo() {
  return (
    <Container>
      <span className='body-m-dark'>단풍님</span>
      <ProgressBar />
      <div>
        <span className='body-m-dark'>{'레벨 3 '}</span>
        <span className='body-m-600'>
          목표 달성까지 <span className='body-m-purple '>4개의 미션</span>이 남았어요!
        </span>
      </div>
    </Container>
  );
}

export default MissionInfo;

const Container = styled.div`
  width: 85%;
  height: 111px;
  border-radius: 26px;
  background: #ffffff;
  padding: 13px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .body-m-dark {
    ${({ theme }) => theme.fonts.body_m_14px};
    color: ${({ theme }) => theme.colors.gray900};
  }
  .body-m-600 {
    ${({ theme }) => theme.fonts.body_m_14px};
    color: ${({ theme }) => theme.colors.gray600};
  }
  .body-m-purple {
    ${({ theme }) => theme.fonts.body_m_14px};
    color: ${({ theme }) => theme.colors.primary_lighten100};
  }
`;
