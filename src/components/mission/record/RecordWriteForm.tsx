import RecordInput from './RecordInput.tsx';
import CustomButton from '../../common/CustomButton.tsx';
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
    queryFn: () => getMissionRecord(Number(missionId)),
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
    <>
      <MissionTitle>{data?.missionName}3일 동안의 식단 작성하기</MissionTitle>
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
        </InputContainer>
        {/*<CommentContainer> // TODO 이거 추가
          <Comment />
        </CommentContainer>*/}
        <ButtonContainer>
          <CustomButton label='완료' isValid={isValid} />
        </ButtonContainer>
      </form>
    </>
  );
};

export default RecordWriteForm;

const InputContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 17px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  padding: 0 16px 0 16px;
`;

const MissionTitle = styled.span`
  margin-top: 6px;
  margin-left: 24px;
  font: ${({ theme }) => theme.fonts.heading_sb_22px};
  color: ${({ theme }) => theme.colors.gray900};
`;
