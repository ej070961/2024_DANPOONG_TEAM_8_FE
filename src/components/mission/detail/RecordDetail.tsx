import styled from 'styled-components';
import Record from './Record.tsx';
import { Divider } from '@mui/material';
import Comment from './Comment.tsx';

const RecordDetail = () => {
  return (
    <RecordDetailContainer>
      <Record title='어떤 미션을 수행했나요?' />
      <Divider style={{ margin: '0 14px' }} />
      <Record title='수행 후 어떤 기분이 들었나요?' />
      <CommentContainer>
        <Comment />
      </CommentContainer>
    </RecordDetailContainer>
  );
};

export default RecordDetail;

const RecordDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CommentContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
`;
