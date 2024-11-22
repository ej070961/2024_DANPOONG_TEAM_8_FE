import RecordInput from './RecordInput.tsx';
import CustomButton from '../../Common/CustomButton.tsx';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMissionRecord, postMissionRecord } from '../../../apis/mission.ts';
import { MissionRecord } from '../../../@type/mission.ts';
import Loading from '../../Common/Loading.tsx';
import Comment from '../detail/Comment.tsx';

const schema = yup.object().shape({
  mission: yup
    .string()
    .min(50, '최소 50자 이상 작성하셔야 합니다.')
    .max(200, '최대 200자까지 작성 가능합니다.'),
  feeling: yup
    .string()
    .min(50, '최소 50자 이상 작성하셔야 합니다.')
    .max(200, '최대 200자까지 작성 가능합니다.'),
});

type FormValues = InferType<typeof schema>;

const RecordWriteForm = () => {
  const navigate = useNavigate();
  const { missionId } = useParams<{ missionId: string }>();
  const { mutate } = useMutation({
    mutationFn: (data: MissionRecord) => postMissionRecord(data),
    onSuccess: () => {
      navigate('/mission/complete', { replace: true });
    },
    onError: () => {
      alert('미션 기록 작성에 실패');
    },
  });
  const { data, isPending } = useQuery({
    queryKey: ['missionRecord', missionId],
    queryFn: () => getMissionRecord(missionId!!),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const missionRecord: MissionRecord = {
      id: Number(missionId),
      content: data.mission!!,
      feedback: data.feeling!!,
    };
    mutate(missionRecord);
  };

  if (isPending) {
    return <Loading />;
  }

  return (
    <InputFormWrapper>
      <MissionTitle>{data?.mission.missionName}</MissionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop: '30px' }}
      >
        <InputContainer>
          <RecordInput
            title='어떤 미션을 수행했나요?'
            name='mission'
            register={register}
            error={errors.mission?.message}
          />
          <RecordInput
            title='수행 후 어떤 기분이 들었나요?'
            name='feeling'
            register={register}
            error={errors.feeling?.message}
          />
          <CommentContainer>
            <Comment content={`수행일지를 작성하면\n버디가 코멘트를 달아드려요!`} />
          </CommentContainer>
          <ButtonContainer>
            <CustomButton label='완료' isValid={isValid} />
          </ButtonContainer>
        </InputContainer>
      </form>
    </InputFormWrapper>
  );
};

export default RecordWriteForm;

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  overflow-y: scroll;
`;

const MissionTitle = styled.span`
  margin-top: 6px;
  margin-left: 8px;
  font: ${({ theme }) => theme.fonts.heading_sb_22px};
  color: ${({ theme }) => theme.colors.gray900};
`;

const InputContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 32px;
`;

const CommentContainer = styled.div`
  margin-top: 46px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 18px;
  padding-bottom: 32px;
`;
