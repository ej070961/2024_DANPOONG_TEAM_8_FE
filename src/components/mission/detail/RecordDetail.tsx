import styled from 'styled-components';
import Record from './Record.tsx';
import { Divider } from '@mui/material';
import Comment from './Comment.tsx';

const mockComment = `미션 수행 후 뿌듯한 기분이 드셨군요!\n뿌듯한 순간들이 쌓여 단풍님에게\n긍정적인 변화를 가져왔으면 좋겠어요!`;

const RecordDetail = () => {
  return (
    <RecordDetailContainer>
      <Record title='어떤 미션을 수행했나요?' />
      <Divider style={{ margin: '0 14px' }} />
      <Record title='수행 후 어떤 기분이 들었나요?' />
      <CommentContainer>
        <Comment content={mockComment}/>
      </CommentContainer>
    </RecordDetailContainer>
  );
};

export default RecordDetail;

const RecordDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
`;

const CommentContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
`;
