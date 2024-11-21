import styled from 'styled-components';
import RecordDetail from '../../components/mission/detail/RecordDetail.tsx';
import BackToolbar from '../../components/common/BackToolbar.tsx';

const MissionCompleteDetailPage = () => {
  return (
    <MissionCompleteDetailContainer>
      <BackToolbar title='3일 동안의 식단 작성하기' />
      <RecordDetailContainer>
        <RecordDetail />
      </RecordDetailContainer>
    </MissionCompleteDetailContainer>
  );
};

export default MissionCompleteDetailPage;

const MissionCompleteDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: white;
  overflow: hidden;
`;

const RecordDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 18px 0 18px;
  overflow: auto;
`;
