import styled from 'styled-components';
import RecordDetail from '../../components/mission/detail/RecordDetail.tsx';
import BackToolbar from '../../components/common/BackToolbar.tsx';
import { useLocation } from 'react-router-dom';

const MissionCompleteDetailPage = () => {
  const { missionName } = useLocation().state;

  return (
    <MissionCompleteDetailContainer>
      <BackToolbar title={missionName} />
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
