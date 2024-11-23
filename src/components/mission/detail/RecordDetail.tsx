import styled from 'styled-components';
import Record from './Record.tsx';
import { Divider } from '@mui/material';
import Comment from './Comment.tsx';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postBuddyFeedback } from '../../../apis/mission.ts';
import { useEffect } from 'react';
import Loading from '../../common/Loading.tsx';

const RecordDetail = () => {
  const { missionId } = useParams<{ missionId: string }>();
  const { data, mutate, isPending } = useMutation({
    mutationKey: ['missionRecord', missionId],
    mutationFn: (missionId: string) => postBuddyFeedback(missionId),
  });

  useEffect(() => {
    mutate(missionId!!);
  }, []);

  if (isPending) return <Loading />;

  return (
    <RecordDetailContainer>
      <Record title='어떤 미션을 수행했나요?' content={data?.user_mission!!} />
      <Divider style={{ margin: '0 14px' }} />
      <Record title='수행 후 어떤 기분이 들었나요?' content={data?.user_feedback!!} />
      <CommentContainer>
        <Comment content={data?.buddy_feedback!!} completed={true} />
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
