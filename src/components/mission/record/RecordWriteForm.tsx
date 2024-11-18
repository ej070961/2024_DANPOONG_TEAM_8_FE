import RecordInput from './RecordInput.tsx';
import CustomButton from '../../common/CustomButton.tsx';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { useNavigate } from 'react-router-dom';

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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: CREATE 작업
    console.log(data);
    navigate('/mission/complete', { replace: true });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
  margin-top: 19px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  padding: 0 16px 0 16px;
`;
