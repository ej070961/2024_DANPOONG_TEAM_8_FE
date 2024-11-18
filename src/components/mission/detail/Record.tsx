import styled from 'styled-components';

interface RecordProps {
  title: string;
}

const mockContent =
  '오늘은 뭘했냐면 잠을 자고 밥을 먹고 지금은 빼빼로를 먹으면서 작업을 하고 있다. 오늘까지 책을 읽었어야 했는데 못 읽었다. 오늘은 뭘했냐면 잠을 자고 밥을 먹고 지금은 빼빼로를 먹으면서 작업을 하고 있다. 오늘까지 책을 읽었어야 했는데 못 읽었다.오늘은 뭘했냐면 잠을 자고 밥을 먹고 지금은 빼빼로를 먹으면서 작업을 하고 있다. 오늘까지 책을 읽었어야 했는데 못 읽었다.오늘은 뭘했냐면 잠을 자고 밥을 먹고 지금은 빼빼로를 먹으면';

const Record = ({ title }: RecordProps) => {
  return (
    <RecordContainer>
      <RecordTitle>{title}</RecordTitle>
      <RecordContent>{mockContent}</RecordContent>
    </RecordContainer>
  );
};

export default Record;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 480px;
  background-color: white;
`;

const RecordTitle = styled.div`
  margin-left: 8px;
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const RecordContent = styled.div`
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0 18px;
  margin-top: 30px;
`;
