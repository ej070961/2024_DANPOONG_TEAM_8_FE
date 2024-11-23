import styled from 'styled-components';
import BackToolbar from '../../components/common/BackToolbar.tsx';
import RecordWriteForm from '../../components/mission/record/RecordWriteForm.tsx';

const MissionRecordWritePage = () => {
  return (
    <MissionRecordWriteContainer>
      <BackToolbar title='수행일지' />
      <RecordWriteForm />
    </MissionRecordWriteContainer>
  );
};

export default MissionRecordWritePage;

const MissionRecordWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: white;
  overflow-y: hidden;
`;
